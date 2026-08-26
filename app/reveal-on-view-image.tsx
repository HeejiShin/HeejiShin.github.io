'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

type RevealOnViewImageProps = {
  className: string;
  src: string;
  width: number;
  height: number;
};

export default function RevealOnViewImage({
  className,
  src,
  width,
  height,
}: RevealOnViewImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    if (!('IntersectionObserver' in window)) {
      image.classList.add('is-revealed');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        image.classList.toggle('is-revealed', entry.isIntersecting);
      },
      { threshold: 0.01 },
    );

    observer.observe(image);
    return () => observer.disconnect();
  }, []);

  return (
    <Image
      ref={imageRef}
      className={`${className} reveal-on-view`}
      src={src}
      alt=""
      width={width}
      height={height}
      unoptimized
    />
  );
}
