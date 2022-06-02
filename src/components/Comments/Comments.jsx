import { CommentsItem } from "../comments-item/CommentsItem";

export const Comments = ({ comments }) => {
  const commentsClone = comments.slice();
  const commentsReverse = commentsClone.reverse();

  return commentsReverse.map((comment) => {
    return (
      <article className="comments">
        <CommentsItem
          name={comment.name}
          commentEntry={comment.comment}
          time={comment.timestamp}
        />
      </article>
    );
  });
};
