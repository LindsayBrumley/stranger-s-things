import React, { useState, useEffect } from "react";
import { fetchMe, fetchAllPosts, deletePost, editPost } from "../api";
import NewPostsForm from "./NewPostForm";
import useAuth from "../useAuth";
import EditPostForm from "./EditPostForm";

export function MyProfile() {
  const { token, user, setUser } = useAuth();
  const [posts, setPosts] = useState();
  const [newEdit, setNewEdit] = useState();

  useEffect(() => {
    async function getMe() {
      const response = await fetchMe(token);
      setUser(response.data);
    }
    getMe();
  }, []);

  useEffect(() => {
    async function revisedPost() {
      const response = await fetchAllPosts(token);
      setPosts(response.data);
    }
    revisedPost();
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
                  onClick={() => {
                    setNewEdit(post);
                  }}
                >
                  Edit
                </button>

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
      {newEdit && (
        <EditPostForm
          post={newEdit}
          onSubmit={async (editedPost) => {
            await editPost(newEdit._id, token, editedPost);
            const posts = await fetchAllPosts(token);
            setPosts(posts.data.posts);
            setNewEdit(null);
          }}
        />
      )}
      <div>
        <h3>New Post</h3>
        {user.posts &&
          user.posts.map((post) => {
            return (
              <div key={post._id}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <p>{post.price}</p>
                <p>{post.location}</p>
                <p>{post.willDeliver}</p>
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
                <div className="recieved-messages" key={message._id}>
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
