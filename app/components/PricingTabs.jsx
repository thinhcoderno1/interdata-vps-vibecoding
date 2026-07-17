'use client';

import { useState } from 'react';

const SUPPORT_ORIGIN = 'https://support.interdata.vn';
const BILLING_CYCLES = [
  { key: 'monthly', label: '1 tháng' },
  { key: 'quarterly', label: '3 tháng' },
  { key: 'annually', label: '1 năm' },
  { key: 'biennially', label: '2 năm' },
  { key: 'triennially', label: '3 năm' },
];

function getOrderUrl(planId, billingCycle) {
  return `${SUPPORT_ORIGIN}/cart.php?a=add&pid=${encodeURIComponent(planId)}&billingcycle=${billingCycle}`;
}

export default function PricingTabs({ plans }) {
  const [activeCycle, setActiveCycle] = useState('monthly');
  const activeCycleLabel = BILLING_CYCLES.find((cycle) => cycle.key === activeCycle)?.label;

  return (
    <>
      <div className="pricing-tabs" role="tablist" aria-label="Chọn chu kỳ thanh toán">
        {BILLING_CYCLES.map((cycle) => (
          <button
            className={`pricing-tab ${activeCycle === cycle.key ? 'active' : ''}`}
            key={cycle.key}
            type="button"
            role="tab"
            aria-selected={activeCycle === cycle.key}
            onClick={() => setActiveCycle(cycle.key)}
          >
            {cycle.label}
          </button>
        ))}
      </div>

      <div className="pricing-grid" role="tabpanel">
        {plans.map((plan, index) => (
          <article className={`price-card ${index === 1 ? 'popular' : ''}`} key={plan.id}>
            {index === 1 && <span className="badge">Gói phổ biến</span>}
            <h3>{plan.name}</h3>
            <ul className="price-specs">
              {plan.specs.map((spec) => <li key={spec}>{spec}</li>)}
            </ul>
            <div className="price" aria-live="polite">
              <strong>{plan.prices[activeCycle]}</strong>
              <small>/ {activeCycleLabel}</small>
            </div>
            <a
              className={`btn ${index === 1 ? 'primary' : 'secondary'}`}
              href={getOrderUrl(plan.id, activeCycle)}
              target="_blank"
              rel="noreferrer"
            >
              Đăng ký ngay
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
