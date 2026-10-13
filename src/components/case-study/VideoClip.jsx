import { useEffect, useRef } from "react";

/**
 * Muted, looping clip used in place of GIFs.
 *
 * Videos are `preload="none"` and only play while at least a quarter of the
 * element is visible, so a page with a dozen clips only decodes the ones the
 * reader is actually looking at.
 */
const VideoClip = ({ src, poster, caption, className = "" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rejects if the browser blocks autoplay; the poster stays up.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={caption}
      className={className}
    />
  );
};

export default VideoClip;
