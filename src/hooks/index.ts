import { useState } from "react";
import { TypeOfPost, TypeOfNewPost } from "../types/blogType";

export const usePost = () => {
  const [posts, setPosts] = useState<TypeOfPost[]>([]);
  const [newPost, setNewPost] = useState<TypeOfNewPost>({
    author: "",
    content: "",
  });
  const PostSituation = newPost.author !== "" && newPost.content !== "";

  const addPost = () => {
    if (!PostSituation) {
      return;
    }
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        author: newPost.author,
        content: newPost.content,
        createdAt: new Date().toLocaleString(),
        comments: [],
      },
    ]);
    setNewPost({ author: "", content: "" });
  };

  return {
    newPost,
    setNewPost,
    addPost,
    posts,
    setPosts,
  };
};
