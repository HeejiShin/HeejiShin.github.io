/* eslint-disable @next/next/no-html-link-for-pages */
import ResponsiveImage from '../responsive-image';

export const dynamic = 'force-static';

const slides = [
  { name: 'library-01', alt: '국립중앙도서관 웹페이지 사용성 개선 프로젝트 개요', height: 1080 },
  { name: 'library-02', alt: '국립중앙도서관 사용자 리서치', height: 1080 },
  { name: 'library-03', alt: '국립중앙도서관 서비스 문제 정의', height: 1080 },
  { name: 'library-04', alt: '국립중앙도서관 UX 분석', height: 1080 },
  { name: 'library-05', alt: '국립중앙도서관 정보 구조 개선', height: 1080 },
  { name: 'library-06', alt: '국립중앙도서관 사용성 테스트 및 데이터 분석', height: 2160 },
  { name: 'library-07', alt: '국립중앙도서관 개선안 설계', height: 1200 },
  { name: 'library-08', alt: '국립중앙도서관 최종 프로토타입', height: 1080 },
  { name: 'library-09', alt: '국립중앙도서관 프로젝트 결과', height: 1080 },
];

export default function LibraryPage() {
  return (
    <main className="case-study case-study--full-image">
      <h1 className="sr-only">국립중앙도서관 웹페이지 사용성 개선 프로젝트</h1>

      <div className="case-study-canvas" role="region" aria-label="국립중앙도서관 웹페이지 사용성 개선 프로젝트 상세">
        <a className="case-study__home-hit" href="/" aria-label="포트폴리오 홈으로 돌아가기" />
        {slides.map((slide, index) => (
          <ResponsiveImage
            className="case-study-slice"
            base={`/assets/optimized/${slide.name}/${slide.name}`}
            alt={slide.alt}
            width={1920}
            height={slide.height}
            key={slide.name}
            mobileWidth={1280}
            standardWidth={1920}
            retinaWidth={3840}
            priority={index === 0}
          />
        ))}
      </div>
    </main>
  );
}
