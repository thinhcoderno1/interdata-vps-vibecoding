const CLOUD_PLANS_URL =
  'https://support.interdata.vn/index.php?rp=/store/best-plan-real-cloud';
const SUPPORT_ORIGIN = 'https://support.interdata.vn';

const fallbackPlans = [
  {
    id: '521',
    name: 'BD-Cloud 1',
    price: '988.000 đ',
    billingCycle: '1 năm',
    specs: ['3 vCore', '3 GB RAM', '30 GB SSD NVMe', '1 IPv4 Private', '300 Mbps Network Port', 'Unlimited Bandwidth'],
    orderUrl: `${SUPPORT_ORIGIN}/index.php?rp=/store/best-plan-real-cloud/bd-cloud-1`,
  },
  {
    id: '522',
    name: 'BD-Cloud 2',
    price: '2.988.000 đ',
    billingCycle: '1 năm',
    specs: ['4 vCore', '8 GB RAM', '80 GB SSD NVMe', '1 IPv4 Private', '300 Mbps Network Port', 'Unlimited Bandwidth'],
    orderUrl: `${SUPPORT_ORIGIN}/index.php?rp=/store/best-plan-real-cloud/bd-cloud-2`,
  },
  {
    id: '523',
    name: 'BD-Cloud 3',
    price: '5.999.000 đ',
    billingCycle: '1 năm',
    specs: ['8 vCore', '16 GB RAM', '140 GB SSD NVMe', '1 IPv4 Private', '400 Mbps Network Port', 'Unlimited Bandwidth'],
    orderUrl: `${SUPPORT_ORIGIN}/index.php?rp=/store/best-plan-real-cloud/bd-cloud-3`,
  },
];

function decodeHtml(value = '') {
  return value
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#039;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');
}

function cleanText(value = '') {
  return decodeHtml(value.replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizePrice(value = '') {
  return cleanText(value).replace(/,/g, '.');
}

function absoluteUrl(value = '') {
  if (!value) return CLOUD_PLANS_URL;
  return new URL(decodeHtml(value), SUPPORT_ORIGIN).toString();
}

export function parseCloudPlans(html) {
  const productPattern =
    /<div[^>]+class="tt-single-product[^"]*"[^>]+id="product(?<id>\d+)"[^>]*>(?<body>[\s\S]*?)<a[^>]+href="(?<url>[^"]+)"[^>]+id="product\k<id>-order-button"[^>]*>/gi;

  return [...html.matchAll(productPattern)]
    .map((match) => {
      const { id, body, url } = match.groups;
      const name = cleanText(
        body.match(new RegExp(`id="product${id}-name"[^>]*>([\\s\\S]*?)<\\/h5>`, 'i'))?.[1],
      );
      const price = normalizePrice(
        body.match(/<span[^>]+class="price"[^>]*>([\s\S]*?)<\/span>/i)?.[1],
      );
      const billingCycle = cleanText(
        body.match(/<span[^>]+class="text-muted mb-0 tt-cycle"[^>]*>([\s\S]*?)<\/span>/i)?.[1],
      );
      const descriptionHtml =
        body.match(new RegExp(`id="product${id}-description"[^>]*>([\\s\\S]*?)<\\/div>`, 'i'))?.[1] ?? '';
      const descriptionLines = descriptionHtml
        .replace(/<br\s*\/?>/gi, '\n')
        .split('\n')
        .map(cleanText)
        .filter(Boolean);
      const specs = descriptionLines.filter((line) => !/gia hạn/i.test(line));

      return {
        id,
        name,
        price,
        billingCycle,
        specs,
        orderUrl: absoluteUrl(url),
      };
    })
    .filter((plan) => plan.name && plan.price && plan.specs.length);
}

export async function getCloudPlans() {
  try {
    const response = await fetch(CLOUD_PLANS_URL, {
      headers: {
        Accept: 'text/html,application/xhtml+xml',
        'User-Agent': 'InterData-VPS-Vibe-Code/1.0',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`WHMCS responded with ${response.status}`);
    }

    const plans = parseCloudPlans(await response.text());
    if (!plans.length) {
      throw new Error('No cloud plans found in WHMCS response');
    }

    return {
      plans,
      source: CLOUD_PLANS_URL,
      isFallback: false,
    };
  } catch (error) {
    console.error('Unable to refresh InterData cloud plans:', error);
    return {
      plans: fallbackPlans,
      source: CLOUD_PLANS_URL,
      isFallback: true,
    };
  }
}
