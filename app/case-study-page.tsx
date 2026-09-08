/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';

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
  return (
    <main className="case-study case-study--full-image">
      <h1 className="sr-only">{title}</h1>
      <div className="case-study-canvas" role="region" aria-label={`${title} 프로젝트 상세`}>
        <a className="case-study__home-hit" href="/" aria-label="포트폴리오 홈으로 돌아가기" />
        <Image
          className="case-study-slice"
          src={image}
          alt={`${title} 프로젝트 상세 디자인`}
          width={1920}
          height={height}
          sizes="100vw"
          priority
          unoptimized
        />

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
