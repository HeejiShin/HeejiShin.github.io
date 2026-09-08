'use client';

import { useState, type CSSProperties } from 'react';

type LazyVideoProps = {
  src: string;
  title: string;
  className?: string;
  style?: CSSProperties;
};

function getVideoId(src: string) {
  return src.split('/embed/')[1]?.split('?')[0] ?? '';
}

export default function LazyVideo({ src, title, className, style }: LazyVideoProps) {
  const [active, setActive] = useState(false);
  const [thumbnailQuality, setThumbnailQuality] = useState<'maxresdefault' | 'hqdefault'>('maxresdefault');
  const videoId = getVideoId(src);

  if (active) {
    const separator = src.includes('?') ? '&' : '?';
    return (
      <iframe
        className={className}
        src={`${src}${separator}autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={style}
      />
    );
  }

  return (
    <button
      className={`${className ?? ''} video-facade`}
      type="button"
      aria-label={`${title} 재생`}
      style={style}
      onClick={() => setActive(true)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/${thumbnailQuality}.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => setThumbnailQuality('hqdefault')}
      />
      <span aria-hidden="true" className="video-facade__play" />
    </button>
  );
}
