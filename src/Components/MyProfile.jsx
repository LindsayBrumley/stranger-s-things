import React, { useState, useEffect } from "react";
import { fetchMe } from "../api";
import NewPostsForm from "./NewPostForm";
import useAuth from "../useAuth";

export function MyProfile() {
  const { token, user, setUser } = useAuth();
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function getMe() {
      const response = await fetchMe(token);
      setUser(response.data);
    }
    getMe();
  }, []);
  console.log("user from profile: ", user);
  return (
    <div>
      <h2>My Profile</h2>
      <h3 id="my-posts">My Posts</h3>
      <div>
        {user.posts &&
          user.posts.map((post) => {
            return (
              <div className="single-post-card" key={post._id}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <p>{post.price}</p>
                <p>{post.location}</p>
                <p>{post.willDeliver}</p>
              </div>
            );
          })}
      </div>
      <NewPostsForm />
    </div>
  );
}
