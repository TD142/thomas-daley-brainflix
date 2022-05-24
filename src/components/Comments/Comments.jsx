import { CommentsItem } from "../Commentsitem/Commentsitem";

export const Comments = (props) => {
  console.log(props.comments[0].comments);
  return props.comments.map((comment) => {
    return (
      <CommentsItem
        name={comment.comments}
        commentEntry={comment.comment}
        time={comment.timestamp}
      />
    );
  });
};
