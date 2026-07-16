const footerColumns = [
  {
    title: 'Dịch vụ',
    links: [
      ['Thuê chỗ đặt máy chủ', 'https://interdata.vn/vietnam-co-location'],
      ['Thuê máy chủ', 'https://interdata.vn/vietnam-dedicated-server'],
      ['Thuê Cloud Server', 'https://interdata.vn/cloud-server/'],
      ['Thuê VPS', 'https://interdata.vn/thue-vps/'],
      ['Thuê Hosting', 'https://interdata.vn/thue-hosting/'],
      ['Đăng ký tên miền', 'https://support.interdata.vn/cart.php?a=add&domain=register'],
    ],
  },
  {
    title: 'Thông tin',
    links: [
      ['Blog', 'https://interdata.vn/blog/'],
      ['Giới thiệu', 'https://interdata.vn/about-us'],
      ['Liên hệ', 'https://interdata.vn/contact'],
      ['Khuyến mãi', 'https://interdata.vn/blog/khuyen-mai/'],
      ['Sự kiện', 'https://interdata.vn/blog/su-kien/'],
    ],
  },
  {
    title: 'Quy định và Chính sách',
    links: [
      ['Chính sách bảo hành', 'https://interdata.vn/chinh-sach-bao-hanh', false],
      ['Chính sách bảo mật', 'https://interdata.vn/privacy-policy'],
      ['Chính sách xử lý khiếu nại', 'https://interdata.vn/chinh-sach-xu-ly-khieu-nai'],
      ['Cam kết dịch vụ', 'https://interdata.vn/service-level-agreement'],
      ['Điều khoản sử dụng dịch vụ', 'https://interdata.vn/terms-and-condition'],
      ['GDPR', 'https://interdata.vn/gdpr', false],
      ['Hình thức thanh toán', 'https://interdata.vn/hinh-thuc-thanh-toan'],
      ['Hướng dẫn thanh toán trên VNPAY', 'https://interdata.vn/huong-dan-thanh-toan-vnpay'],
      ['Quy định đổi trả và hoàn trả tiền', 'https://interdata.vn/refund-policy'],
      ['Quy định sử dụng tên miền', 'https://interdata.vn/quy-dinh-su-dung-ten-mien'],
    ],
  },
  {
    title: 'Câu hỏi thường gặp',
    links: [
      ['Hướng dẫn gửi Tickets hỗ trợ', 'https://interdata.vn/blog/huong-dan-gui-yeu-cau-ho-tro-tai-interdata/'],
      ['Hướng dẫn thay đổi thông tin tài khoản quản lý dịch vụ', 'https://interdata.vn/blog/thay-doi-thong-tin-quan-tri-interdata/'],
      ['Hướng dẫn đăng ký Domain', 'https://interdata.vn/blog/huong-dan-dang-ky-ten-mien-tai-interdata/'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container footer-grid">
        <div className="footer-company">
          <a className="footer-logo" href="https://interdata.vn/" aria-label="InterData">
            <img src="https://interdata.vn/assets/LogoNewSlogan-09.png" alt="InterData" />
          </a>
          <h3>CÔNG TY CỔ PHẦN INTER GROUP</h3>
          <p className="footer-address">
            <strong>VPGD:</strong>{' '}
            <a href="https://maps.app.goo.gl/JdnrU5N9xWYKShqt5">211 Đường số 5, P. Bình Trưng, TP. Hồ Chí Minh</a>
          </p>
          <p><strong>MST:</strong> 0316918910</p>
        </div>

        {footerColumns.map((column) => (
          <nav className="footer-column" key={column.title} aria-label={column.title}>
            <h3>{column.title}</h3>
            {column.links.map(([label, href, isVisible = true]) => (
              isVisible && <a href={href} key={href}>{label}</a>
            ))}
          </nav>
        ))}
      </div>
      <div className="footer-container copyright">© 2026 Công ty Cổ phần Inter Group. All rights reserved.</div>
    </footer>
  );
}
