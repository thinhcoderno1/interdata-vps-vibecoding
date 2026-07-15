'use client';

import { useState } from 'react';
import { faqs } from './data';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container narrow">
        <h2 className="section-title">Câu hỏi thường gặp</h2>
        <div className="faq-list">
          {faqs.map(([q, a], index) => (
            <article className="faq-item" key={q}>
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                <span>{q}</span><b>{openFaq === index ? '×' : '+'}</b>
              </button>
              {openFaq === index && <p>{a}</p>}
            </article>
          ))}
        </div>
        <div className="center"><a className="btn primary" href="#dangky">Vẫn còn thắc mắc? Nhận tư vấn miễn phí</a></div>
      </div>
    </section>
  );
}
