import { CommentsItem } from "../Commentsitem/Commentsitem";

export const Comments = (props) => {
  return props.video.map((video) => {
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
