import VideoClip from "./VideoClip";

/** Captioned image or video, chosen by `item.type`. */
const MediaFigure = ({ item, aspect = "aspect-[16/10]" }) => {
  const mediaClass = `w-full object-cover ${aspect}`;

  return (
    <figure className="border border-line bg-bg">
      {item.type === "video" ? (
        <VideoClip {...item} className={mediaClass} />
      ) : (
        <img src={item.src} alt={item.caption} loading="lazy" className={mediaClass} />
      )}
      <figcaption className="hud-label border-t border-line p-3 text-faint">
        {item.caption}
      </figcaption>
    </figure>
  );
};

export default MediaFigure;
