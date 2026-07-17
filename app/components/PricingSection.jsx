import { getCloudPlans } from '../lib/cloudPlans';
import PricingTabs from './PricingTabs';

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
        <PricingTabs plans={plans} />
      </div>
    </section>
  );
}
