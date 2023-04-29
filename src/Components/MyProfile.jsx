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
                <button
                  onClick={async () => {
                    await deletePost(post._id, token);
                    const posts = await fetchAllPosts(token);
                    setPosts(posts.data.posts);
                  }}
                >
                  Delete Post
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <h3>Messages</h3>
        <h4>My messages</h4>
        {user.messages &&
          user.messages
            .filter((message) => {
              return message.fromUser._id === user._id;
            })
            .map((message) => {
              return (
                <div className="my-messages" key={message._id}>
                  <p>To: {message.post.author.username}</p>
                  <p>Message: {message.content}</p>
                  <p>Post: {message.post.title}</p>
                </div>
              );
            })}
        <br />
        <h4>Recieved messages</h4>
        {user.messages &&
          user.messages
            .filter((message) => {
              return message.fromUser._id !== user._id;
            })
            .map((message) => {
              return (
                <div classname="recieved-messages" key={message._id}>
                  <p>From: {message.fromUser.username}</p>
                  <p>Message: {message.content}</p>
                  <p>Post: {message.post.title}</p>
                </div>
              );
            })}
      </div>
      <NewPostsForm />
    </div>
  );
}
