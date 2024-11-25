import { Button, TextField } from "@mui/material";
import { useState } from "react";

type Comment = {
    id: number;
    author: string;
    content: string;
    createdAt: string;
  };
  
  type NewCommet = {
    author: string;
    content: string;
  };

const AddCommentComp = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<NewCommet>({
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

  export default AddCommentComp;