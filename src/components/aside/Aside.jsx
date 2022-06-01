import { AsideItem } from "./asideitem/AsideItem";
import "./Aside.scss";

// mapping over videos to display all videos for aside.

export const Aside = ({ videosGroup, videoId }) => {
  const filteredVideos = videosGroup.filter((videos) => {
    return videos.id !== videoId;
  });
  return filteredVideos.map((video) => {
    return (
      <AsideItem
        id={video.id}
        channel={video.channel}
        title={video.title}
        image={video.image}
      />
    );
  });
};
