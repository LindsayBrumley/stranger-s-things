import React from "react";
import { fetchAllPosts } from "./api";
import { useState, useEffect } from "react";

const PostsDiv = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchAllPosts();
      setPosts(allPosts.data.posts);
    }
    getPosts();
  }, []);

  return (
    <div className="single-post">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Price: {post.price}</p>
            <p>Location: {post.location}</p>
          </div>
        );
      })}
    </div>
  );
};
export default PostsDiv;
