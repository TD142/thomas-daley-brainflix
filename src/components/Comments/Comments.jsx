import { CommentsItem } from "../Commentsitem/Commentsitem";

export const Comments = (props) => {
  //   return console.log(props.comments);
  return props.comments.map((comment) => {
    return (
      <CommentsItem
        name={comment.name}
        commentEntry={comment.comment}
        time={comment.timestamp}
      />
    );
  });
};
