const testimonials = [
  {
    quote: 'Tôi mô tả landing page bằng tiếng Việt, chỉnh vài lượt là có bản demo đủ để chạy thử quảng cáo.',
    name: 'Chủ shop mỹ phẩm',
  },
  {
    quote: 'Điểm tiện nhất là không phải tự cài server. Nhận thông tin xong là vào nền tảng và bắt đầu dựng ý tưởng.',
    name: 'Founder dự án nhỏ',
  },
  {
    quote: 'Team kỹ thuật dùng để dựng MVP nội bộ khá nhanh, nhất là các màn hình dashboard và form quản lý dữ liệu.',
    name: 'Nhóm phát triển SaaS',
  },
  {
    quote: 'Website thử nghiệm chạy ổn, tốc độ truy cập trong nước tốt. Có vấn đề về hạ tầng thì được hỗ trợ khá nhanh.',
    name: 'Doanh nghiệp dịch vụ',
  },
  {
    quote: 'Tôi không rành code nhưng vẫn tự đổi nội dung, thêm mục sản phẩm và xem kết quả ngay sau mỗi lần yêu cầu.',
    name: 'Người bán hàng online',
  },
  {
    quote: 'Phù hợp để kiểm chứng ý tưởng trước khi thuê đội dev làm lớn. Có bản chạy thật nên dễ trình bày với đối tác.',
    name: 'Startup giai đoạn đầu',
  },
  {
    quote: 'Phần bàn giao rõ ràng, có domain và môi trường sẵn. Điều này tiết kiệm nhiều thời gian so với tự cấu hình từ đầu.',
    name: 'Freelancer marketing',
  },
  {
    quote: 'Chúng tôi dùng thử để dựng CRM mini cho sales. Chưa phải hệ thống lớn, nhưng đủ tốt để gom lead và theo dõi đơn.',
    name: 'Đội kinh doanh B2B',
  },
];

export default function SocialProofSection() {
  return (
    <section className="section section-soft">
      <div className="container center">
        <h2 className="section-title">Hạ tầng đã được tin dùng nhiều năm - nay mở đường cho Vibe Coding tại Việt Nam.</h2>
        <div className="stats">
          <span><b>10+</b>năm kinh nghiệm</span><span><b>800+</b>máy chủ vận hành</span><span><b>100.000+</b>khách hàng</span><span><b>6+</b>Datacenter toàn cầu</span>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial" key={item.name}>
              <p>“{item.quote}”</p>
              <div><span /><small>{item.name}</small></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
