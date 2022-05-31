import { AsideItem } from "./asideitem/AsideItem";
import "./Aside.scss";

// mapping over videos to display all videos for aside.

export const Aside = ({ changeVideo, videosGroup }) => {
  return videosGroup.map((video) => {
    return (
      <AsideItem
        // on click passes video id to app component to use with filter.
        clickFunction={() => {
          changeVideo(video.id);
        }}
        id={video.id}
        channel={video.channel}
        title={video.title}
        image={video.image}
      />
    );
  });
};
