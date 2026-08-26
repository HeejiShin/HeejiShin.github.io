/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';

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
    <main className="case-study">
      <h1 className="sr-only">KOICA 홍보실 뉴미디어 파트 인턴</h1>

      <div className="case-study-canvas" role="region" aria-label="KOICA 홍보실 뉴미디어 인턴 프로젝트 상세">
        <a className="case-study__home-hit" href="/" aria-label="포트폴리오 홈으로 돌아가기" />
        {slides.map((slide) => (
          <Image
            className="case-study-slice"
            src={slide.src}
            alt={slide.alt}
            width={3840}
            height={2160}
            sizes="100vw"
            unoptimized
            key={slide.src}
          />
        ))}

        {videos.map((video) => (
          <iframe
            className="case-video"
            key={video.src}
            src={video.src}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              left: `${(video.x / 1920) * 100}%`,
              top: `${(video.y / 6480) * 100}%`,
              width: `${(video.width / 1920) * 100}%`,
              aspectRatio: `${video.width} / ${video.height}`,
            }}
          />
        ))}
      </div>

      <article className="case-study-mobile">
        <a className="case-study-mobile__back" href="/">← HOME</a>
        <Image
          src="/assets/project-koica.png"
          alt="KOICA 홍보실 뉴미디어 파트 인턴"
          width={1920}
          height={1080}
          sizes="calc(100vw - 40px)"
          unoptimized
        />
        <p className="case-study-mobile__eyebrow">2025.07 ~ 2025.12 · 기여도 100%</p>
        <h2>KOICA(한국국제협력단)<br />홍보실 뉴미디어 파트 인턴</h2>
        <section>
          <h3>OUTPUT</h3>
          <p>트렌드 리서치<br />SNS 채널 운영 및 성과 관리<br />콘텐츠 기획 · 촬영 · 편집<br />국제 행사 홍보 캠페인 운영 지원</p>
        </section>
        <section>
          <h3>Performance &amp; Impact</h3>
          <p><strong>Instagram +21% 성장 · 채널 퍼포먼스 최대 15.1배 · 204K+ 콘텐츠 조회</strong></p>
          <p>데이터와 트렌드를 콘텐츠로 연결해 채널의 성장까지 만들었습니다.</p>
        </section>
        <section className="case-study-mobile__videos">
          <h3>SELECTED CONTENTS</h3>
          {videos.map((video, index) => (
            <a
              key={`mobile-${video.src}`}
              href={video.src.replace('https://www.youtube.com/embed/', 'https://www.youtube.com/watch?v=').split('?si=')[0]}
              target="_blank"
              rel="noreferrer"
            >
              {String(index + 1).padStart(2, '0')} · {video.title} ↗
            </a>
          ))}
        </section>
      </article>
    </main>
  );
}
