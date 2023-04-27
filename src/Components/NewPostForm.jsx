import { useState } from "react";
import { makePost } from "../api";
export default function NewPostsForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //getting error message unauthorized
      const token = localStorage.getItem("token");
      const result = await makePost(
        token,
        title,
        description,
        price,
        location,
        willDeliver
      );
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h4>Create new post</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            name="price"
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="willDeliver">Will Deliver:</label>
          <input
            type="checkbox"
            value={willDeliver}
            onChange={(event) => setWillDeliver(!willDeliver)}
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
