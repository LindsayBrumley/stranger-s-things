import React, { useState } from "react";
import { editPost } from "../api";

function EditPostForm({ post, token, setPosts }) {
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [price, setPrice] = useState(post.price);
  const [location, setLocation] = useState(post.location);
  const [willDeliver, setWillDeliver] = useState(post.willDeliver);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await editPost(
        post._id,
        token,
        title,
        description,
        price,
        location,
        willDeliver
      );
      console.log(response.data);
      const newPosts = await response.data.post;
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post._id === newPosts._id) {
            return newPosts;
          } else {
            return post;
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="willDeliver">Will Deliver:</label>
        <input
          type="checkbox"
          id="willDeliver"
          name="willDeliver"
          checked={willDeliver}
          onChange={(event) => setWillDeliver(event.target.checked)}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditPostForm;
