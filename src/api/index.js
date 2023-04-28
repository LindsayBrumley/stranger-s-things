const cohortName = "2301-ftb-et-web-am";
const baseUrl = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export async function fetchAllPosts(token) {
  try {
    const response = await fetch(`${baseUrl}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const posts = await response.json();
    console.log(posts);
    return posts;
  } catch (error) {
    console.error(error);
  }
}
export async function registerUser(username, password) {
  try {
    const response = await fetch(`${baseUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log("result from register user: ", result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMe(token) {
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function makePost(
  title,
  description,
  price,
  location,
  willDeliver,
  token
) {
  try {
    const response = await fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const deletePost = async (id, token) => {
  try {
    const response = await fetch(`${baseUrl}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const editPost = async (
  title,
  description,
  price,
  location,
  willDeliver,
  token
) => {
  try {
    const response = await fetch(`${baseUrl}/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(err);
  }
};

export const sendMessage = async (id, token, content) => {
  try {
    const response = await fetch(`${baseUrl}/posts/${id}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
