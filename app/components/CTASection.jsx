'use client';

import { useState } from 'react';

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', want: '' });
  const updateForm = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  return (
    <section id="dangky" className="section section-dark">
      <div className="container cta-grid">
        <div>
          <h2>Ý tưởng đã có sẵn trong đầu bạn. Bắt đầu dựng ngay hôm nay.</h2>
          <p>Không cần biết code. Không cần cài đặt. Có đội hỗ trợ đi cùng và 7 ngày để bạn tự tay trải nghiệm.</p>
        </div>
        <div className="form-card">
          {submitted ? (
            <div className="success">
              <div>✓</div>
              <h3>Đã nhận thông tin của bạn!</h3>
              <p>InterData sẽ liên hệ tư vấn sớm. Trong lúc chờ, bạn có thể bắt đầu 7 ngày dùng thử ngay.</p>
            </div>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
              <h3>Để lại thông tin - InterData gọi tư vấn</h3>
              <p>Hoặc bắt đầu ngay: 7 ngày dùng thử miễn phí.</p>
              <label>Họ và tên</label>
              <input value={form.name} onChange={updateForm('name')} placeholder="Nguyễn Văn A" />
              <label>Số điện thoại hoặc Email</label>
              <input value={form.contact} onChange={updateForm('contact')} placeholder="09xx xxx xxx / email@..." />
              <label>Bạn muốn dựng gì? <span>(tùy chọn)</span></label>
              <input value={form.want} onChange={updateForm('want')} placeholder="VD: website bán hàng có giỏ hàng" />
              <button className="btn primary" type="submit">Dùng thử 7 ngày miễn phí</button>
              <button className="btn secondary" type="submit">Để lại thông tin - InterData gọi tư vấn</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
