import { AsideItem } from "./asideitem/AsideItem";

export const Aside = (props) => {
  console.log(props);
  return props.videos.map((video) => {
    return (
      <AsideItem
        channel={video.channel}
        title={video.title}
        image={video.image}
      />
    );
  });
};
