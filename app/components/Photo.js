import Icon from "./Icon";
import Img from "./Img";

// Shows a real photo when `src` is set, otherwise a "photo coming soon" tile of the same size.
export default function Photo({ src, alt, className = "", sizes = "(max-width: 900px) 100vw, 50vw" }) {
  if (src) return <Img src={src} alt={alt} className={className || undefined} sizes={sizes} />;
  return (
    <div className={`ph ${className}`} role="img" aria-label={alt}>
      <Icon name="camera" />
      <span>{alt}</span>
    </div>
  );
}
