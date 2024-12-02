import React, { useState } from "react";
import "./blogs.css";
import { Button, TextField } from "@mui/material";
import AddCommentComp from "./components/commentComp";
import { usePost } from "./hooks";

// ブログ全体のコンポーネント
const Blogs = () => {
  const { newPost, setNewPost, posts, setPosts, addPost } = usePost();

  return (
    <div className="Blog">
      <h1>ブログアプリ</h1>
      <div className="creatPostArea">
        <div>
          <TextField
            id="postAuthor"
            label="投稿者名"
            variant="outlined"
            value={newPost.author}
            onChange={(e) =>
              setNewPost({ author: e.target.value, content: newPost.content })
            }
            className="postAuthor"
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
            className="postContent"
            multiline
            rows={2}
          />
        </div>
        <div>
          <Button
            variant="contained"
            onClick={addPost}
            className="postButton"
            disabled={newPost.author === "" || newPost.content === ""}
          >
            投稿
          </Button>
        </div>
      </div>

      <div className="postLitArea">
        {posts.map((post, id) => (
          <div className="postField">
            <Button variant="contained" color="error" className="deleteButton">
              削除
            </Button>
            <div className="postList">
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
