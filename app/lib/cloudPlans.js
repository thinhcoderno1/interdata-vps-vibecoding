const CLOUD_PLANS_API_URL =
  'https://support.interdata.vn/packages.php?gid=98&module';
const SUPPORT_ORIGIN = 'https://support.interdata.vn';

const fallbackPlans = [
  {
    id: '525',
    name: 'Vibe Basic',
    prices: {
      monthly: '277.000 đ',
      quarterly: '747.900 đ',
      annually: '997.200 đ',
      biennially: '1.794.960 đ',
      triennially: '2.393.280 đ',
    },
    specs: ['2 vCore', '4 GB RAM', '30 GB SSD NVMe', '1 IPv4 Private', '300Mbps Network Port', 'Unlimited Bandwidth'],
  },
  {
    id: '526',
    name: 'Vibe Standard',
    prices: {
      monthly: '370.000 đ',
      quarterly: '999.000 đ',
      annually: '1.332.000 đ',
      biennially: '2.397.600 đ',
      triennially: '3.196.800 đ',
    },
    specs: ['3 vCore', '6 GB RAM', '30 GB SSD NVMe', '1 IPv4 Private', '300Mbps Network Port', 'Unlimited Bandwidth'],
  },
  {
    id: '527',
    name: 'Vibe Pro',
    prices: {
      monthly: '525.000 đ',
      quarterly: '1.417.500 đ',
      annually: '1.890.000 đ',
      biennially: '3.402.000 đ',
      triennially: '4.536.000 đ',
    },
    specs: ['4 vCore', '8 GB RAM', '50 GB SSD NVMe', '1 IPv4 Private', '300Mbps Network Port', 'Unlimited Bandwidth'],
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

function parseSpecs(description = '') {
  return decodeHtml(description.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, ''))
    .split(/\r?\n/)
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter((line) => line && !/gia hạn/i.test(line));
}

function formatPrice(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount) || amount < 0) return null;
  return `${new Intl.NumberFormat('vi-VN').format(amount)} đ`;
}

function getOrderUrl(id, billingCycle = 'monthly') {
  return `${SUPPORT_ORIGIN}/cart.php?a=add&pid=${id}&billingcycle=${billingCycle}`;
}

export function parseCloudPlans(payload) {
  if (!payload?.success || !Array.isArray(payload.products)) return [];

  return payload.products
    .map((product) => {
      const pricing = product.pricing?.VND ?? {};
      const prices = {
        monthly: formatPrice(pricing.monthly),
        quarterly: formatPrice(pricing.quarterly),
        annually: formatPrice(pricing.annually),
        biennially: formatPrice(pricing.biennially),
        triennially: formatPrice(pricing.triennially),
      };

      return {
        id: String(product.pid ?? ''),
        name: product.name?.trim() ?? '',
        prices,
        price: prices.monthly,
        billingCycle: '1 tháng',
        specs: parseSpecs(product.description),
        orderUrl: getOrderUrl(product.pid),
      };
    })
    .filter((plan) => plan.id && plan.name && plan.prices.monthly && plan.specs.length);
}

export async function getCloudPlans() {
  try {
    const response = await fetch(CLOUD_PLANS_API_URL, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'InterData-VPS-Vibe-Code/1.0',
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`InterData pricing API responded with ${response.status}`);
    }

    const plans = parseCloudPlans(await response.json());
    if (!plans.length) {
      throw new Error('No VPS Vibe Coding plans found in pricing API');
    }

    return {
      plans,
      source: CLOUD_PLANS_API_URL,
      isFallback: false,
    };
  } catch (error) {
    console.error('Unable to refresh InterData VPS Vibe Coding plans:', error);
    return {
      plans: fallbackPlans.map((plan) => ({
        ...plan,
        price: plan.prices.monthly,
        billingCycle: '1 tháng',
        orderUrl: getOrderUrl(plan.id),
      })),
      source: CLOUD_PLANS_API_URL,
      isFallback: true,
    };
  }
}
