import React, { useState } from "react";
import "./blogs.css";
import { Button, TextField } from "@mui/material";
import { PostfixUnaryExpression } from "typescript";
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

type Comment = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
};

type NewCommetn = {
  author: string;
  content: string;
};

// コメントコンポーネント
const AddCommentComp = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<NewCommetn>({
    author: "",
    content: "",
  });
  const AddComment = () => {
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        author: newComment.author,
        content: newComment.content,
        createdAt: new Date().toLocaleString(),
      },
    ]);
    setNewComment({ author: "", content: "" });
  };
  return (
    <div>
      <TextField
        id="postAuthor"
        label="コメント投稿者名"
        variant="outlined"
        value={newComment.author}
        onChange={(e) =>
          setNewComment({
            author: e.target.value,
            content: newComment.content,
          })
        }
      />
      <br></br>
      <TextField
        id="postContent"
        label="コメント内容"
        variant="outlined"
        value={newComment.content}
        onChange={(e) =>
          setNewComment({
            author: newComment.author,
            content: e.target.value,
          })
        }
      />
      <div className="addComment">
        <Button
          variant="contained"
          onClick={AddComment}
          disabled={newComment.author === "" || newComment.content === ""}
        >
          コメントする
        </Button>
      </div>
      <div className="commnetList">
        <ul>
          {comments.map((comment, id) => (
            <li key={id}>
              {comment.author}:{comment.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ブログ全体のコンポーネント
const Blogs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<NewPost>({ author: "", content: "" });

  const PostSituation = newPost.author !== "" && newPost.content !== "";

  const AddPost = () => {
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

  //   const AddComment = () => {
  //     setComments([
  //       ...comments,
  //       {
  //         id: comments.length + 1,
  //         author: newComment.author,
  //         content: newComment.content,
  //         createdAt: new Date().toLocaleString(),
  //       },
  //     ]);
  //     setNewComment({author:"", content:""})
  //   };

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
          onClick={AddPost}
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
