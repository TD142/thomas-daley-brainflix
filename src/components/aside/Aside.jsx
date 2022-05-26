import { AsideItem } from "./asideitem/AsideItem";
import "./Aside.scss";

export const Aside = (props) => {
  const idAdd = props.videos;

  return props.videos.map((video) => {
    return (
      <AsideItem
        // id={id}
        clickFunction={() => {
          props.changeVideo(video.id);
        }}
        channel={video.channel}
        title={video.title}
        image={video.image}
        key={video.title}
      />
    );
  });
};
