import { useState } from "react";

type Post = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  comments: [];
};

type NewPost = {
  author: string;
  content: string;
};

export const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<NewPost>({ author: "", content: "" });
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
  }
};
