'use client';

import { useEffect, useState } from 'react';

const menuItems = [
  {
    label: 'Cloud Server',
    href: 'https://interdata.vn/cloud-server/',
    children: [
      ['AMD Gen 3 Cloud', 'https://interdata.vn/amd-epyc-gen3-cloud/'],
      ['Intel Platinum Gen 2 Cloud', 'https://interdata.vn/intel-platinum-gen2-cloud/'],
    ],
  },
  {
    label: 'Thuê VPS',
    href: 'https://interdata.vn/thue-vps/',
    children: [
      ['VPS AMD', 'https://interdata.vn/vps-amd/'],
      ['VPS Platinum', 'https://interdata.vn/platinum'],
      ['VPS Gold', 'https://interdata.vn/vps-gold-nvme-u2/'],
      ['VPS Linux', 'https://interdata.vn/vps-linux/'],
      ['VPS Windows', 'https://interdata.vn/vps-windows-enterprise/'],
      ['VPS n8n', 'https://interdata.vn/vps-n8n/'],
      ['VPS Vibe Coding', 'https://interdata.vn/vps-vibe-coding/'],
    ],
  },
  { label: 'Thuê Máy Chủ', href: 'https://interdata.vn/vietnam-dedicated-server/' },
  {
    label: 'Chỗ Đặt Máy Chủ',
    href: '#',
    children: [
      ['Chỗ Đặt Máy Chủ Tại Việt Nam', 'https://interdata.vn/vietnam-co-location/'],
      ['Chỗ Đặt Máy Chủ Tại USA', 'https://interdata.vn/usa-co-location/'],
    ],
  },
  {
    label: 'Hosting',
    href: 'https://interdata.vn/thue-hosting/',
    children: [
      ['Hosting AMD', 'https://interdata.vn/hosting-amd/'],
      ['Hosting NVMe', 'https://interdata.vn/hosting/nvme-cloud-hosting-1gbps/'],
      ['SEO Hosting', 'https://interdata.vn/hosting/seo-hosting/'],
      ['Singapore Hosting', 'https://interdata.vn/hosting/singapore-hosting'],
    ],
  },
  { label: 'Free Hosting', href: 'https://interdata.vn/free-hosting/' },
];

const topBarLinks = [
  ['Gửi ticket', 'https://support.interdata.vn/submitticket.php'],
  ['Giới thiệu', 'https://interdata.vn/about-us'],
  ['Liên hệ', 'https://interdata.vn/contact'],
  ['Đăng nhập', 'https://support.interdata.vn/index.php?rp=/login'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1240px)');
    const closeOnDesktop = () => {
      if (!mq.matches) setMenuOpen(false);
    };

    closeOnDesktop();
    mq.addEventListener('change', closeOnDesktop);
    return () => mq.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="top-bar-inner">
          {topBarLinks.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </div>
      </div>
      <div className="header-inner">
        <a className="brand logo-brand" href="https://interdata.vn/" aria-label="InterData">
          <img src="https://interdata.vn/assets/LogoNewSlogan-09.png" alt="InterData" />
        </a>
        <nav className="desktop-nav">
          {menuItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <a className="nav-link" href={item.href}>
                {item.label}
                {item.children && (
                  <svg className="nav-chevron" aria-hidden="true" viewBox="0 0 16 16" width="14" height="14">
                    <path d="M4.5 6.25 8 9.75l3.5-3.5" />
                  </svg>
                )}
              </a>
              {item.children && (
                <div className="submenu">
                  {item.children.map(([label, href]) => (
                    <a href={href} key={href}>{label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <a className="btn primary small" href="#dangky">Dùng thử 7 ngày</a>
        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => {
            setMenuOpen((open) => !open);
            setOpenMobileGroup(null);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-label="Menu mobile">
        <div className="mobile-menu-inner">
          {menuItems.map((item) => (
            <div className="mobile-menu-group" key={item.label}>
              <div className="mobile-menu-row">
                <a className="mobile-menu-link" href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
                {item.children && (
                  <button
                    className={`mobile-menu-toggle ${openMobileGroup === item.label ? 'is-open' : ''}`}
                    type="button"
                    aria-label={`Mở danh mục ${item.label}`}
                    aria-expanded={openMobileGroup === item.label}
                    onClick={() => setOpenMobileGroup((current) => (current === item.label ? null : item.label))}
                  >
                    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16">
                      <path d="M4.5 6.25 8 9.75l3.5-3.5" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && openMobileGroup === item.label && (
                <div className="mobile-submenu">
                  {item.children.map(([label, href]) => (
                    <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a className="btn primary mobile-menu-cta" href="#dangky" onClick={() => setMenuOpen(false)}>Dùng thử 7 ngày</a>
        </div>
      </nav>
    </header>
  );
}
