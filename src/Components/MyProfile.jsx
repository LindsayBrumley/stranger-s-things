import React from "react";
import { fetchMe } from "../api";
import NewPostsForm from "./NewPostForm";

export function MyProfile() {
  return (
    <div>
      <h3> My Profile</h3>
      <NewPostsForm />
    </div>
  );
}
