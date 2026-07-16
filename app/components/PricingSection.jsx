import { getCloudPlans } from '../lib/cloudPlans';

export default async function PricingSection() {
  const { plans } = await getCloudPlans();

  return (
    <section id="gia" className="section section-soft pricing-section">
      <div className="container center">
        <span className="eyebrow on-light">PRICE TABLE</span>
        <h2 className="section-title">Bảng Giá VPS Vibe Coding</h2>
        <p className="pricing-lead">
         Cấu hình được lựa chọn tối ưu cho nhu cầu vibe coding
        </p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <article className={`price-card ${index === 1 ? 'popular' : ''}`} key={plan.id}>
              {index === 1 && <span className="badge">Cấu hình cân bằng</span>}
              <h3>{plan.name}</h3>
              <ul className="price-specs">
                {plan.specs.map((spec) => <li key={spec}>{spec}</li>)}
              </ul>
              <div className="price">
                <strong>{plan.price}</strong>
                <small>/ {plan.billingCycle}</small>
              </div>
              <a
                className={`btn ${index === 1 ? 'primary' : 'secondary'}`}
                href={plan.orderUrl}
                target="_blank"
                rel="noreferrer"
              >
                Đăng ký ngay
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
