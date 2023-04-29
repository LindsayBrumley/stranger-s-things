const SinglePostCard = ({ post }, token) => {
  return (
    <div className="single-post-card">
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
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            await sendMessage(post._id, token, content);
            console.log("message sent");
          }}
        >
          <label>Send a message:</label>
          <input
            type="text"
            onChange={(event) => setContent(event.target.value)}
          />
          <button>Send</button>
        </form>
      ) : null}
    </div>
  );
};
export default SinglePostCard;
