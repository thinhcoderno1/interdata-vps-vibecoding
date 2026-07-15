import { ezyIntegrations, ezyModules, ezyPillars } from './data';

const icons = {
  website: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /></>,
  cms: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" /><path d="M14 3v6h6" /><path d="M8 13h8M8 17h5" /></>,
  database: <><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" /><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
  cart: <><circle cx="9.5" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2.5 3h3l2.4 12.1a1.6 1.6 0 0 0 1.6 1.3h8.6a1.6 1.6 0 0 0 1.6-1.3L21 7H6.2" /></>,
  mail: <><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="m3.5 6.5 8.5 6 8.5-6" /></>,
  api: <><path d="m9 7-5 5 5 5" /><path d="m15 7 5 5-5 5" /></>,
  plugin: <><rect x="3" y="3" width="7.5" height="7.5" rx="1.6" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6" /></>,
  ai: <><path d="M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.4l-1.9-5.6L4.5 10.9 10.1 9 12 3.5Z" /><path d="M18.8 3v3M20.3 4.5h-3" /></>,
  flow: <><circle cx="5.5" cy="6" r="2.5" /><circle cx="18.5" cy="18" r="2.5" /><path d="M5.5 8.5v6a3 3 0 0 0 3 3h7.5" /></>,
  plug: <><path d="M9 3v5M15 3v5" /><path d="M6 8h12v3a6 6 0 0 1-12 0V8Z" /><path d="M12 17v4" /></>,
};

export default function EzyPlatformSection() {
  return (
    <section id="ezyplatform" className="section section-dark ezy-section">
      <div className="container">
        <div className="ezy-head">
          <span className="eyebrow ezy-brand">EzyPlatform</span>
          <h2 className="section-title">Nền tảng low-code đã hội tụ sẵn mọi thứ để AI bắt tay vào việc.</h2>
          <p className="lead ezy-lead">Bạn không phải đi ghép nối hàng chục công cụ rời rạc. Website, dữ liệu, bán hàng, email, API - tất cả nằm sẵn trong một nền tảng, nên AI có đất để làm việc còn bạn có nơi triển khai kết quả ngay.</p>
        </div>

        <div className="ezy-bento">
          <article className="ezy-hub">
            <h3>Mọi thứ đã hội tụ sẵn</h3>
            <p>Bảy nhóm chức năng có từ đầu, không phải cài thêm hay tự ghép lại với nhau.</p>
            <ul className="ezy-modules">
              {ezyModules.map((module) => (
                <li className="ezy-module" key={module.label}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">{icons[module.icon]}</svg>
                  {module.label}
                </li>
              ))}
            </ul>
          </article>

          <div className="ezy-pillars">
            {ezyPillars.map((pillar) => (
              <article className="ezy-pillar" key={pillar.title}>
                <h3>
                  <svg viewBox="0 0 24 24" aria-hidden="true">{icons[pillar.icon]}</svg>
                  {pillar.title}
                </h3>
                <p>{pillar.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <ul className="ezy-integrations">
          {ezyIntegrations.map((integration) => (
            <li className="ezy-integration" key={integration.name}>
              <b>{integration.name}</b>
              <span>{integration.services}</span>
            </li>
          ))}
        </ul>

        <a className="text-link ezy-link" href="#lamduoc">Xem sản phẩm bạn có thể tự dựng ↓</a>
      </div>
    </section>
  );
}
