export const steps = [
  {
    title: 'Đăng ký & chọn gói',
    desc: 'Chưa chắc chọn gì? Để lại thông tin, InterData tư vấn giúp bạn.',
  },
  {
    title: 'Chọn đúng OS template',
    desc: 'Lúc khởi tạo máy, chọn template Ubuntu-22.04-EzyPlatform. Hệ thống sẽ tự cài EzyPlatform và cấp domain trỏ sẵn, bạn không phải đụng vào phần kỹ thuật nào khác.',
    template: 'Ubuntu-22.04-EzyPlatform',
    note: 'Đây là bước duy nhất bạn cần để tâm. Chọn template khác thì máy sẽ không có sẵn EzyPlatform.',
  },
  {
    title: 'Nhận email bàn giao',
    desc: 'IP, tài khoản, link hướng dẫn - mở ra là dùng.',
  },
  {
    title: 'Bắt đầu mô tả ý tưởng',
    desc: 'Có 7 ngày dùng thử kèm hỗ trợ.',
  },
];

export const plans = [
  { name: 'Khởi đầu', specs: '2 core - 4GB RAM - 30GB NVMe', fit: 'Thử ý tưởng, sản phẩm cá nhân, landing page, blog.', popular: false },
  { name: 'Kinh doanh', specs: '4 core - 6GB RAM - 30GB NVMe', fit: 'Website bán hàng thật, nhiều khách truy cập.', popular: true },
  { name: 'Tăng trưởng', specs: '4 core - 8GB RAM - 50GB NVMe', fit: 'Cửa hàng lớn hơn, nhiều dữ liệu, quảng cáo mạnh.', popular: false },
];

export const faqs = [
  ['Tôi không biết lập trình, thật sự dùng được không?', 'Được. Bạn mô tả điều mình muốn bằng tiếng Việt như nhắn tin, AI viết code, bạn xem kết quả và chỉnh lại cho vừa ý.'],
  ['Mua xong tôi phải tự cài gì không?', 'Gần như không. Việc duy nhất bạn cần làm là chọn đúng OS template Ubuntu-22.04-EzyPlatform lúc khởi tạo máy. Sau đó hệ thống tự cài EzyPlatform và cấp domain trỏ sẵn, bạn nhận email bàn giao là dùng được ngay.'],
  ['Hết ưu đãi giá có tăng vọt không?', '[InterData điền chính sách giá] - nên ghi rõ giá niêm yết, giá ưu đãi và giá sau ưu đãi, không phí ẩn.'],
  ['Dữ liệu của tôi nằm ở đâu, an toàn không?', 'Dữ liệu nằm trên hạ tầng InterData tại DC FPT/Viettel và được sao lưu định kỳ. Bạn làm chủ dữ liệu của mình.'],
  ['Gặp lỗi thì ai hỗ trợ?', 'InterData hỗ trợ vận hành hạ tầng 24/7; EzyPlatform xử lý lỗi nền tảng và hướng dẫn sử dụng.'],
  ['Có bị ràng buộc cam kết dài hạn không?', '[InterData điền] - bạn có 7 ngày dùng thử để trải nghiệm trước khi quyết định.'],
  ['Gói nào phù hợp với tôi?', 'Khởi đầu cho ý tưởng nhỏ; Kinh doanh cho website bán hàng; Tăng trưởng cho cửa hàng lớn và nhiều dữ liệu.'],
  ['Máy chủ có nhanh và ổn định không?', 'CPU AMD EPYC / Intel Xeon, NVMe U.2 Gen4, DC FPT/Viettel, Network 300Mbps, Anti-DDoS và hỗ trợ 24/7.'],
];

export const infraSpecs = [
  {
    icon: 'cpu',
    label: 'CPU thế hệ mới',
    value: 'AMD EPYC / Intel Xeon',
    desc: 'Vi xử lý máy chủ đời mới, nhiều nhân, xử lý mượt cả khi nhiều khách cùng truy cập một lúc.',
  },
  {
    icon: 'disk',
    label: 'Lưu trữ',
    value: 'NVMe U.2 Gen4',
    desc: 'Ổ NVMe chuẩn doanh nghiệp, đọc ghi nhanh hơn hẳn SSD thường, trang tải gần như tức thì.',
  },
  {
    icon: 'gauge',
    label: 'Network & độ trễ',
    value: '300Mbps · 0-21ms',
    desc: 'Cổng mạng 300Mbps, ping nội địa 0-21ms - khách trong nước vào trang gần như không phải chờ.',
  },
  {
    icon: 'infinity',
    label: 'Băng thông',
    value: 'Không giới hạn',
    desc: 'Lượt truy cập tăng vọt lúc chạy quảng cáo hay khuyến mãi cũng không lo bị bóp băng thông.',
  },
  {
    icon: 'globe',
    label: 'Địa chỉ IP',
    value: 'IPv4 riêng',
    desc: 'Mỗi VPS một địa chỉ IPv4 riêng, không dùng chung, không bị ảnh hưởng bởi website khác.',
  },
  {
    icon: 'rack',
    label: 'Hạ tầng đặt tại',
    value: 'DC FPT/Viettel',
    desc: 'Máy chủ đặt tại Data Center trong nước, đường truyền tới khách hàng Việt Nam ngắn nhất.',
  },
];

export const whyInterData = [
  { icon: 'support', title: 'Support 24/7', note: 'Có người trực máy chủ suốt ngày đêm.' },
  { icon: 'backup', title: 'Backup định kỳ', note: 'Sao lưu tự động, cần là khôi phục lại được.' },
  { icon: 'shield', title: 'Anti-DDoS', note: 'Chặn tấn công trước khi chạm tới máy của bạn.' },
  { icon: 'key', title: 'Full root access', note: 'Toàn quyền, muốn cài gì hay đổi gì cũng được.' },
  { icon: 'bolt', title: 'Khởi tạo nhanh chóng', note: 'Vài phút là có máy để bắt đầu làm việc.' },
  { icon: 'tag', title: 'Thường xuyên có ưu đãi', note: 'Giá tốt theo từng đợt khuyến mãi.' },
];

export const ezyModules = [
  { icon: 'website', label: 'Website' },
  { icon: 'cms', label: 'Quản trị nội dung' },
  { icon: 'database', label: 'Cơ sở dữ liệu' },
  { icon: 'cart', label: 'Đăng & bán hàng' },
  { icon: 'mail', label: 'Gửi email' },
  { icon: 'api', label: 'API & MCP Server' },
  { icon: 'plugin', label: 'Marketplace plugin' },
];

export const ezyPillars = [
  {
    icon: 'ai',
    title: 'AI-ready + MCP Server',
    desc: 'MCP Server nối AI thẳng vào dữ liệu thật, nên AI ghép được API cho từng màn hình: danh sách sản phẩm, giỏ hàng, thanh toán, tra cứu đơn.',
  },
  {
    icon: 'flow',
    title: 'Tự động hóa & marketing',
    desc: 'Email tự gửi theo trạng thái đơn hàng. EzyMarketing lo chiến dịch, nhóm đối tượng và lịch chạy bằng cron.',
  },
  {
    icon: 'plug',
    title: 'Tích hợp dịch vụ ngoài',
    desc: 'Đăng nhập, email, thanh toán, vận chuyển và Webhook đều có sẵn, bạn không phải tự viết lại từ đầu.',
  },
];

export const ezyIntegrations = [
  { name: 'EzyLogin', services: 'Google, Facebook' },
  { name: 'EzyMail', services: 'Gửi & nhận email' },
  { name: 'EzyPayment', services: 'VNPay, PayPal, Chuyển khoản' },
  { name: 'EzyDelivery', services: 'GHTK, Viettel Post' },
  { name: 'Webhook', services: 'Nối sang hệ thống khác' },
];

export const noCodeUseCases = [
  {
    title: 'Website bán hàng',
    desc: 'Sản phẩm, giỏ hàng, thanh toán VNPay/chuyển khoản, giao hàng GHTK/Viettel Post.',
    image: '/images/mockup-ecommerce.png',
    alt: 'Mockup website bán hàng có giỏ hàng và thanh toán',
    icon: 'store',
    tint: '124 58 237',
  },
  {
    title: 'Landing page thu khách',
    desc: 'Trang + form + tự gửi email khi có khách.',
    image: '/images/mockup-landing-page.png',
    alt: 'Mockup landing page thu khách với form đăng ký',
    icon: 'magnet',
    tint: '37 99 235',
  },
  {
    title: 'Blog / Website doanh nghiệp',
    desc: 'Đăng bài, quản lý nội dung, làm SEO.',
    image: '/images/mockup-business-blog.png',
    alt: 'Mockup blog và website doanh nghiệp',
    icon: 'news',
    tint: '217 119 6',
  },
  {
    title: 'CRM mini / Công cụ nội bộ',
    desc: 'Quản lý khách, đơn, quy trình nhỏ.',
    image: '/images/mockup-mini-crm.png',
    alt: 'Mockup dashboard CRM mini và công cụ nội bộ',
    icon: 'users',
    tint: '5 150 105',
  },
];

export const techUseCases = [
  {
    title: 'Ra MVP trong ngày',
    desc: 'Bỏ qua setup máy chủ, nhận brief sáng demo chiều.',
    image: '/images/mockup-mvp.png',
    alt: 'Lập trình viên dựng MVP với AI, từ ý tưởng tới bản chạy thật',
    icon: 'rocket',
    tint: '225 29 72',
  },
  {
    title: 'Ghép API cho từng màn hình bằng AI',
    desc: 'MCP Server kết nối AI với dữ liệu thật.',
    image: '/images/mockup-ai-api.png',
    alt: 'AI ghép các màn hình với endpoint API và nguồn dữ liệu thật',
    icon: 'screens',
    tint: '79 70 229',
  },
  {
    title: 'Tự động hóa & marketing',
    desc: 'Email tự động theo trạng thái đơn, chiến dịch chạy theo lịch.',
    image: '/images/mockup-automation.png',
    alt: 'Luồng tự động hóa email, SMS và chiến dịch marketing',
    icon: 'megaphone',
    tint: '8 145 178',
  },
];
