import './globals.css';
import { faqs } from './components/data';

const siteUrl = 'https://interdata.vn';
const pagePath = '/vps-vibe-coding/';
const pageUrl = `${siteUrl}${pagePath}`;
const faviconUrl = `${siteUrl}/assets/favicon.ico`;
const logoUrl = `${siteUrl}/assets/LogoNewSlogan-09.png`;
const ogImageUrl = `${siteUrl}/assets/og-images/interdata-og-image.jpg`;

const title = 'VPS Vibe Coding: Dựng Website Bằng AI | InterData';
const description =
  'Thuê VPS Vibe Coding cài sẵn EzyPlatform tại InterData. Mô tả ý tưởng bằng tiếng Việt, AI hỗ trợ dựng website và ứng dụng trên hạ tầng VPS ổn định 24/7.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | InterData',
  },
  description,
  applicationName: 'InterData',
  keywords: [
    'VPS Vibe Coding',
    'VPS AI',
    'thuê VPS Vibe Coding',
    'VPS cho lập trình',
    'VPS chạy EzyPlatform',
    'dựng website bằng AI',
    'VPS cho developer',
    'VPS NVMe',
    'VPS InterData',
  ],
  authors: [{ name: 'InterData', url: siteUrl }],
  creator: 'InterData',
  publisher: 'Công ty Cổ phần Inter Group',
  category: 'Công nghệ thông tin',
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  alternates: {
    canonical: pagePath,
    languages: {
      'vi-VN': pagePath,
      'x-default': pagePath,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: pagePath,
    siteName: 'InterData',
    title,
    description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'VPS Vibe Coding tại InterData',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImageUrl],
  },
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl,
  },
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1020',
  colorScheme: 'light',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'InterData',
      legalName: 'Công ty Cổ phần Inter Group',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
      image: ogImageUrl,
      taxID: '0316918910',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '211 Đường số 5, Khu đô thị Lakeview City',
        addressLocality: 'Phường Bình Trưng',
        addressRegion: 'Thành phố Hồ Chí Minh',
        addressCountry: 'VN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+84-1900-636-822',
        contactType: 'customer support',
        areaServed: 'VN',
        availableLanguage: ['Vietnamese'],
      },
      sameAs: ['https://www.facebook.com/interdata.com.vn/'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'InterData',
      inLanguage: 'vi-VN',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: 'vi-VN',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${pageUrl}#service`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: ogImageUrl,
      },
      breadcrumb: {
        '@id': `${pageUrl}#breadcrumb`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'VPS Vibe Coding',
      serviceType: 'Dịch vụ VPS cài sẵn nền tảng Vibe Coding',
      url: pageUrl,
      description,
      provider: {
        '@id': `${siteUrl}/#organization`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Việt Nam',
      },
      audience: {
        '@type': 'Audience',
        audienceType: 'Cá nhân, lập trình viên, startup và doanh nghiệp',
      },
      termsOfService: `${siteUrl}/terms-and-condition`,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Trang chủ',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'VPS Vibe Coding',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" dir="ltr">
      <head>
        <link rel="preconnect" href="https://support.interdata.vn" />
        <link rel="dns-prefetch" href="https://support.interdata.vn" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
