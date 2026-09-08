type ResponsiveImageProps = {
  base: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  mobileWidth: number;
  standardWidth: number;
  retinaWidth: number;
  priority?: boolean;
};

export default function ResponsiveImage({
  base,
  alt,
  className,
  width,
  height,
  mobileWidth,
  standardWidth,
  retinaWidth,
  priority = false,
}: ResponsiveImageProps) {
  return (
    <picture className="responsive-picture">
      <source
        media="(max-device-width: 1024px)"
        srcSet={`${base}-${mobileWidth}.webp`}
        type="image/webp"
      />
      <source
        srcSet={`${base}-${standardWidth}.webp 1x, ${base}-${retinaWidth}.webp 2x`}
        type="image/webp"
      />
      <img
        className={className}
        src={`${base}-${standardWidth}.webp`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  );
}
