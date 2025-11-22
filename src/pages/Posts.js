import { useDispatch, useSelector } from "react-redux";
import LikeCounter from "../components/LikeCounter/LikeCounter";
import { useEffect } from "react";
import { fetchPosts } from "../store/postsSlice";

function Posts() {
  const dispatch = useDispatch();
  const { posts, error, status } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <>
      <h1>LATEST POSTS</h1>
      {status == "loading" && <p>Ładowanie...</p>}
      {status == "failed" && <p>Błąd: {error}</p>}
      {status == "succeeded" &&
        posts.map((post) => (
          <LikeCounter
            key={post.id}
            title={post.title}
            description={post.body}
            count="5"
            color=""
          ></LikeCounter>
        ))}
      <article>
        <div className="posts">
          <LikeCounter
            title="Pierwszy post"
            description="Opis naszego artykułu"
            count="5"
            color="red"
          ></LikeCounter>
          <LikeCounter
            title="2 post"
            description="Opis naszego artykułu"
            count="16"
            color="green"
          ></LikeCounter>
          <LikeCounter
            title="3 post"
            description="Opis naszego artykułu"
            count="3"
            color="brown"
          ></LikeCounter>
          <LikeCounter></LikeCounter>
        </div>
      </article>
    </>
  );
}

export default Posts;
