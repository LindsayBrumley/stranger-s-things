const cohortName = "2301-ftb-et-web-am";
const baseUrl = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export async function fetchAllPosts() {
  try {
    const response = await fetch(`${baseUrl}/posts`);
    const posts = await response.json();
    console.log(posts);
    return posts;
  } catch (error) {
    console.error(error);
  }
}
