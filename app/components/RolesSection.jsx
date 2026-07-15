export default function RolesSection() {
  return (
    <section className="section">
      <div className="container center">
        <h2 className="section-title">Một liên minh, phân vai rõ ràng - bạn không bao giờ bị "đá qua đá lại".</h2>
        <div className="roles-grid">
          <article className="role-dark">
            <span>InterData - Hạ tầng</span>
            <h3>Giữ cho mọi thứ luôn chạy.</h3>
            <p>✓ Máy chủ ổn định, tốc độ cao</p><p>✓ Sao lưu định kỳ</p><p>✓ Chống tấn công Anti-DDoS</p><p>✓ Online 24/7</p><p>✓ Hỗ trợ vận hành</p>
          </article>
          <article className="role-light">
            <span>EzyPlatform - Nền tảng</span>
            <h3>Giữ cho công cụ luôn tốt.</h3>
            <p>✓ Nơi AI làm việc và bạn triển khai</p><p>✓ Xử lý lỗi nền tảng</p><p>✓ Cập nhật tính năng</p><p>✓ Hướng dẫn sử dụng</p>
          </article>
        </div>
        <div className="data-note">
          <h3>Dữ liệu của bạn</h3>
          <p>Toàn bộ dữ liệu sản phẩm, khách hàng, đơn hàng và nội dung nằm trên hạ tầng InterData, được sao lưu định kỳ. Bạn làm chủ dữ liệu của mình.</p>
        </div>
      </div>
    </section>
  );
}
