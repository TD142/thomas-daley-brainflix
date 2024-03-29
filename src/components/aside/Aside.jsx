import { AsideItem } from "../asideitem/AsideItem";
import "./Aside.scss";
import { Redirect } from "react-router-dom";

//** mapping over videos, uses filter to compare paramater idea with videosgroup id returning every video other than the selected one.

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
        key={video.id}
      />
    );
  });
};
