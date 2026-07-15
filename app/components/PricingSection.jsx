import { plans } from './data';

export default function PricingSection() {
  return (
    <section id="gia" className="section section-soft">
      <div className="container center">
        <h2 className="section-title">Chọn gói vừa với bạn - nâng cấp bất cứ lúc nào.</h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`price-card ${plan.popular ? 'popular' : ''}`} key={plan.name}>
              {plan.popular && <span className="badge">Phổ biến nhất</span>}
              <h3>{plan.name}</h3>
              <strong>{plan.specs}</strong>
              <p>{plan.fit}</p>
              <div className="price">[InterData điền] <small>/tháng</small></div>
              <a className={`btn ${plan.popular ? 'primary' : 'secondary'}`} href="#dangky">Dùng thử gói này</a>
            </article>
          ))}
        </div>
        <div className="included">
          <strong>Mọi gói đều có</strong>
          <span>Tự cài EzyPlatform</span><span>Domain trỏ sẵn</span><span>IPv4 riêng</span><span>Backup định kỳ</span><span>Anti-DDoS</span><span>Full root access</span><span>Hỗ trợ 24/7</span><span>Dùng thử 7 ngày</span>
        </div>
        <p className="notice"><strong>[InterData điền chính sách giá]</strong> - nên ghi rõ giá niêm yết, giá ưu đãi và giá sau ưu đãi, không phí ẩn.</p>
      </div>
    </section>
  );
}
