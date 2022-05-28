import { AsideItem } from "./asideitem/AsideItem";
import "./Aside.scss";

export const Aside = (props) => {
  return props.videos.map((video) => {
    return (
      <AsideItem
        // id={id}
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
