import React from "react";
import { fetchAllPosts, deletePost, editPost, sendMessage } from "./api";
import { useState, useEffect } from "react";
import useAuth from "./useAuth";

const PostsDiv = () => {
  const [posts, setPosts] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchAllPosts(token);
      setPosts(allPosts.data.posts);
    }
    getPosts();
  }, []);
  console.log(posts);
  return (
    <div className="single-post">
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.author.username}</p>
            <p>{post.description}</p>
            <p>Price: {post.price}</p>
            <p>Location: {post.location}</p>
            {token && post.isAuthor ? (
              <button
                onClick={async () => {
                  await editPost(post._id, token);
                }}
              >
                Edit Post
              </button>
            ) : null}
            {token && post.isAuthor ? (
              <button
                onClick={async () => {
                  await deletePost(post._id, token);
                  const posts = await fetchAllPosts(token);
                  setPosts(posts.data.posts);
                }}
              >
                Delete Post
              </button>
            ) : null}
            {token && !post.isAuthor ? (
              <form>
                <label>Send a message:</label>
                <input type="text" />
                <button
                  onClick={async (event) => {
                    event.preventDefault;
                    await sendMessage(post._id, token, event.target.value);
                    console.log(result);
                  }}
                >
                  Send
                </button>
              </form>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
export default PostsDiv;
