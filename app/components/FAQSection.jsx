'use client';

import { useState } from 'react';
import { faqs } from './data';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);
  const columns = [faqs.slice(0, 8), faqs.slice(8, 16)];

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <header className="faq-heading center">
          <span className="eyebrow on-light">FAQ</span>
          <h2 className="section-title">Câu hỏi thường gặp trước khi thuê VPS</h2>
          <p>Trả lời ngắn gọn các câu hỏi được tìm kiếm nhiều và những điểm cần xác nhận trước khi chọn gói.</p>
        </header>
        <div className="faq-columns">
          {columns.map((column, columnIndex) => (
            <div className="faq-list" key={columnIndex}>
              {column.map((item, itemIndex) => {
                const index = columnIndex * 8 + itemIndex;
                const isOpen = openFaq === index;
                return (
                  <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                      <span>{item.question}</span><b>{isOpen ? '×' : '+'}</b>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                        {item.linkUrl && (
                          <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                            {item.linkLabel}
                            <span aria-hidden="true">→</span>
                          </a>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ))}
        </div>
        <div className="center"><a className="btn primary" href="https://www.facebook.com/interdata.com.vn/" target="_blank" rel="noopener noreferrer">Vẫn còn thắc mắc? Nhận tư vấn miễn phí</a></div>
      </div>
    </section>
  );
}
