import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://heeji-shin-portfolio.ilikehavingfun7.chatgpt.site'),
  title: 'HeeJi SHiN | Portfolio',
  description: '사용자의 니즈와 페인포인트를 경험으로 설계하는 기획자 신희지의 포트폴리오',
  openGraph: {
    title: 'HeeJi SHiN | Portfolio',
    description: '문제와 니즈를 발견하고, 경험으로 설계해, 가치를 확산합니다.',
    type: 'website',
    locale: 'ko_KR',
    images: [{ url: '/heeji-social-preview.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeeJi SHiN | Portfolio',
    description: '문제와 니즈를 발견하고, 경험으로 설계해, 가치를 확산합니다.',
    images: ['/heeji-social-preview.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
