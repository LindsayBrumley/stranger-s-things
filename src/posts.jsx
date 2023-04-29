import React from "react";
import { fetchAllPosts, deletePost, editPost, sendMessage } from "./api";
import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import SinglePostCard from "./Components/SinglePostCard";

const PostsDiv = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const { token } = useAuth();

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchAllPosts(token);
      setPosts(allPosts.data.posts);
    }
    getPosts();
  }, []);
  console.log("all posts: ", posts);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchParam);
  });
  const postsToDisplay = searchParam ? posts : filteredPosts;
  const allPostsToDisplay = postsToDisplay.map((post) => {
    return <SinglePostCard key={post._id} post={post} token={token} />;
  });
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={(event) => {
            setSearchParam(event.target.value.toLowerCase());
          }}
        />
      </div>
      {searchParam ? filteredPosts : allPostsToDisplay}
    </div>
  );
};
export default PostsDiv;
