import React, { useState, useEffect } from "react";
import { fetchMe } from "../api";
import NewPostsForm from "./NewPostForm";
import useAuth from "../useAuth";

export function MyProfile() {
  const { user } = useAuth();
  const [posts, setPosts] = useState();

  // useEffect(() => {
  //   setPosts(user.posts);
  // });
  console.log(user);
  return (
    <div>
      <h3> My Profile</h3>
      {/* <div>
        {posts.map((post) => {
          return (
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.price}</p>
              <p>{post.location}</p>
              <p>{post.willDeliver}</p>
            </div>
          );
        })}
      </div> */}
      <NewPostsForm />
    </div>
  );
}
