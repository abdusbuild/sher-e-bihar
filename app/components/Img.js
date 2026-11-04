import Image from "next/image";
import { imageMeta } from "../data/images";

// Optimised photo: resized per screen, served as AVIF/WebP, blurred preview while loading.
// Size info comes from app/data/images.js (run `python scripts/image-meta.py` after adding photos).
// `data-full` keeps the original path so the lightbox opens the full-size photo.
export default function Img({ src, alt = "", sizes = "100vw", priority = false, quality = 85, ...rest }) {
  const meta = imageMeta[src];
  if (!meta) return <img src={src} alt={alt} loading={priority ? undefined : "lazy"} {...rest} />;
  return (
    <Image
      src={src}
      alt={alt}
      width={meta.width}
      height={meta.height}
      sizes={sizes}
      quality={quality}
      priority={priority}
      placeholder="blur"
      blurDataURL={meta.blur}
      data-full={src}
      {...rest}
    />
  );
}
