import './globals.css';

export const metadata = {
  title: 'VPS Vibe Coding - InterData',
  description:
    'VPS Vibe Coding cho người muốn biến ý tưởng thành website chạy thật với AI, hạ tầng InterData và EzyPlatform.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
