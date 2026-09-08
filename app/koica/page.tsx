/* eslint-disable @next/next/no-html-link-for-pages */
import LazyVideo from '../lazy-video';
import ResponsiveImage from '../responsive-image';

export const dynamic = 'force-static';

const slideDescriptions = [
  'KOICA 홍보실 뉴미디어 인턴 프로젝트 개요와 담당 업무',
  'KOICA 소셜 채널 분석과 콘텐츠 성과',
  'KOICA 해외사무소 및 신규 입사자 영상 콘텐츠',
  'KOICA 숏폼 콘텐츠 기획과 제작 과정',
  'KOICA 국내 홍보 콘텐츠와 숏폼 영상',
  'KOICA 홍보 캠페인 운영 결과와 프로젝트 마무리',
];

const slides = slideDescriptions.map((alt, index) => ({
  src: `/assets/koica-${String(index + 1).padStart(2, '0')}.png`,
  alt,
}));

const videos = [
  {
    src: 'https://www.youtube.com/embed/VP9IW4a3txY?si=YlKIXkcCNkvmqjrQ',
    title: '코이카 해외사무소 YP 영상 1',
    x: 120,
    y: 2675,
    width: 320,
    height: 180,
  },
  {
    src: 'https://www.youtube.com/embed/OKus27RiOK4?si=8A9rFUy-a409mZej',
    title: '코이카 해외사무소 YP 영상 2',
    x: 120,
    y: 2875,
    width: 320,
    height: 180,
  },
  {
    src: 'https://www.youtube.com/embed/bhTR7CYrylo?si=NhL3yWjLI6hs3rJx&controls=1',
    title: '코이카 해외사무소 YP 영상 3',
    x: 470,
    y: 2753,
    width: 400,
    height: 225,
  },
  {
    src: 'https://www.youtube.com/embed/QRKQDi-mkEA?si=dNb68FBU42mFSS-1',
    title: '코이카 신입직원 영상',
    x: 1080,
    y: 2685,
    width: 640,
    height: 360,
  },
  {
    src: 'https://www.youtube.com/embed/QG7d4TUCX9I?si=w08Ik_pQ6J0G_wob',
    title: '코이카 숏폼 콘텐츠',
    x: 780,
    y: 4933,
    width: 480,
    height: 270,
  },
];

export default function KoicaPage() {
  return (
    <main className="case-study case-study--full-image">
      <h1 className="sr-only">KOICA 홍보실 뉴미디어 파트 인턴</h1>

      <div className="case-study-canvas" role="region" aria-label="KOICA 홍보실 뉴미디어 인턴 프로젝트 상세">
        <a className="case-study__home-hit" href="/" aria-label="포트폴리오 홈으로 돌아가기" />
        {slides.map((slide, index) => (
          <ResponsiveImage
            className="case-study-slice"
            base={`/assets/optimized/${slide.src.split('/').pop()?.replace(/\.png$/, '')}/${slide.src.split('/').pop()?.replace(/\.png$/, '')}`}
            alt={slide.alt}
            width={3840}
            height={2160}
            key={slide.src}
            mobileWidth={1280}
            standardWidth={1920}
            retinaWidth={3840}
            priority={index === 0}
          />
        ))}

        {videos.map((video) => (
          <LazyVideo
            className="case-video"
            key={video.src}
            src={video.src}
            title={video.title}
            style={{
              left: `${(video.x / 1920) * 100}%`,
              top: `${(video.y / 6480) * 100}%`,
              width: `${(video.width / 1920) * 100}%`,
              aspectRatio: `${video.width} / ${video.height}`,
            }}
          />
        ))}
      </div>

    </main>
  );
}
