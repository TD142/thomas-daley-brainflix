import { AsideItem } from "./asideitem/AsideItem";
import "./Aside.scss";

export const Aside = (props) => {
  return props.videos.map((video) => {
    return (
      <AsideItem
        // on click passes video id to app component to use with filter.
        clickFunction={() => {
          props.changeVideo(video.id);
        }}
        key={video.id}
        channel={video.channel}
        title={video.title}
        image={video.image}
      />
    );
  });
};
