import { useState } from "react";
import { makePost } from "../api";
import useAuth from "../useAuth";
import { useNavigate } from "react-router-dom";
export default function NewPostsForm() {
  const { token } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await makePost(
        title,
        description,
        price,
        location,
        willDeliver,
        token
      );

      setTitle("");
      setDescription("");
      setPrice("");
      setLocation("");
      navigate("/");
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
