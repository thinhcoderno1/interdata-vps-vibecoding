export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Nơi Ý Tưởng Thành Hiện Thực</span>
          <h1>VPS Vibe Coding</h1>
          <p>Một chiếc máy chủ VPS đã cài sẵn mọi thứ. Bạn chỉ cần mô tả điều mình muốn bằng tiếng Việt, AI dựng sản phẩm, InterData giữ cho nó chạy ổn định 24/7.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#dangky">Đăng ký ngay</a>
            <a className="btn ghost" href="https://www.facebook.com/interdata.com.vn/" target="_blank" rel="noopener noreferrer">Cần tư vấn?</a>
          </div>
          <div className="ticks"><span>1-click Install</span><span>Có domain dùng ngay</span><span>Hỗ trợ 24/7</span><span>Dễ dàng triển khai</span></div>
        </div>
        <div className="chat-card">
          <div className="window-bar"><i /><i /><i /><span>Vibe Coding - trò chuyện với AI</span></div>
          <div className="chat-body">
            <p className="bubble user">Làm cho tôi trang bán hàng có giỏ hàng và thanh toán<span /></p>
            <p className="bubble ai">Đang dựng giao diện cho bạn...</p>
            <div className="preview"><div /><div /><div /><div /></div>
            <small>[placeholder: video/gif "gõ tiếng Việt -&gt; web thành hình"]</small>
          </div>
        </div>
      </div>
    </section>
  );
}
