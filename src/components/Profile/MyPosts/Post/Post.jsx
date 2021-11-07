import sty from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={sty.item}>
      <img src="https://cspromogame.ru//storage/upload_images/avatars/1299.jpg" />
      <span>{props.message}</span>
      <div>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  );
};

export default Post;
