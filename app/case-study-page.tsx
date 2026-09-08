/* eslint-disable @next/next/no-html-link-for-pages */
import LazyVideo from './lazy-video';
import ResponsiveImage from './responsive-image';

type CaseVideo = {
  src: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type CaseLink = {
  href: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type CaseStudyPageProps = {
  title: string;
  image: string;
  height: number;
  videos?: CaseVideo[];
  links?: CaseLink[];
};

export default function CaseStudyPage({
  title,
  image,
  height,
  videos = [],
  links = [],
}: CaseStudyPageProps) {
  const imageName = image.split('/').pop()?.replace(/\.png$/, '') ?? '';
  const sectionCount = Math.ceil(height / 1080);

  return (
    <main className="case-study case-study--full-image">
      <h1 className="sr-only">{title}</h1>
      <div className="case-study-canvas" role="region" aria-label={`${title} 프로젝트 상세`}>
        <a className="case-study__home-hit" href="/" aria-label="포트폴리오 홈으로 돌아가기" />
        {Array.from({ length: sectionCount }, (_, index) => {
          const sectionHeight = Math.min(1080, height - (index * 1080));
          const section = String(index + 1).padStart(2, '0');

          return (
            <ResponsiveImage
              key={section}
              base={`/assets/optimized/${imageName}/section-${section}`}
              alt={index === 0 ? `${title} 프로젝트 상세 디자인` : ''}
              className="case-study-slice"
              width={1920}
              height={sectionHeight}
              mobileWidth={1280}
              standardWidth={1920}
              retinaWidth={3840}
              priority={index === 0}
            />
          );
        })}

        {videos.map((video) => (
          <LazyVideo
            className="case-video"
            key={video.src}
            src={video.src}
            title={video.title}
            style={{
              left: `${(video.x / 1920) * 100}%`,
              top: `${(video.y / height) * 100}%`,
              width: `${(video.width / 1920) * 100}%`,
              aspectRatio: `${video.width} / ${video.height}`,
            }}
          />
        ))}

        {links.map((link) => (
          <a
            className="case-study__external-hit"
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            style={{
              left: `${(link.x / 1920) * 100}%`,
              top: `${(link.y / height) * 100}%`,
              width: `${(link.width / 1920) * 100}%`,
              height: `${(link.height / height) * 100}%`,
            }}
          />
        ))}
      </div>
    </main>
  );
}
