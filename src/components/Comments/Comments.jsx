import { CommentsItem } from "../comments-item/CommentsItem";

export const Comments = ({ video }) => {
  return video.map((video) => {
    return (
      <article className="comments">
        <CommentsItem
          name={video.name}
          commentEntry={video.comment}
          time={video.timestamp}
        />
      </article>
    );
  });
};
