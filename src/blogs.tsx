import React, { useState } from "react";
import "./blogs.css";
import { Button, TextField } from "@mui/material";
import { PostfixUnaryExpression } from "typescript";
import AddCommentComp from "./comment";
import { usePost } from "./hooks";
// import ReactDOM  from "react-dom";
// import Button from '@mui/material/Button'

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


// ブログ全体のコンポーネント
const Blogs = () => {
  const {newPost, setNewPost,posts, setPosts, addPost} = usePost()

  return (
    <div>
      <h1>ブログアプリ</h1>
      <div>
        <TextField
          id="postAuthor"
          label="投稿者名"
          variant="outlined"
          value={newPost.author}
          onChange={(e) =>
            setNewPost({ author: e.target.value, content: newPost.content })
          }
        />
      </div>
      <div>
        <TextField
          id="postContent"
          label="投稿内容"
          variant="outlined"
          value={newPost.content}
          onChange={(e) =>
            setNewPost({ author: newPost.author, content: e.target.value })
          }
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={addPost}
          disabled={newPost.author === "" || newPost.content === ""}
        >
          投稿
        </Button>
      </div>
      <div>
        {posts.map((post, id) => (
          <div>
            <button>削除</button>
            <div className="postlist">
              <h2>{post.author}</h2>
              <p>{post.content}</p>
            </div>
            <div className="commentField">
              <h2>コメント</h2>
              <AddCommentComp />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
