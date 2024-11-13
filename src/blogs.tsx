import React, { useState } from "react";
import "./blogs.css";
// import ReactDOM  from "react-dom";
// import Button from '@mui/material/Button'

const Blogs = () => {
  const [postNames, setPostNames] = useState<string[]>([]);
  const [newPostName, setNewPostName] = useState("");
  const [postElemets, setPostElemets] = useState<string[]>([]);
  const [newPostElemet, setNewPostElemet] = useState("");

  const addPost = () => {
    setPostNames([...postNames, newPostName]);
    setNewPostName("");
    setPostElemets([...postElemets, newPostElemet]);
    setNewPostElemet("");
  };

  return (
    <div>
      <div>
        <h1>ブログアプリ</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="投稿者名"
          value={newPostName}
          onChange={(event) => setNewPostName(event.target.value)}
          className="postName"
        ></input>
        <div>
          <input
            type="text"
            placeholder="投稿内容"
            value={newPostElemet}
            onChange={(e) => setNewPostElemet(e.target.value)}
            className="postElement"
          ></input>
        </div>

        <div>
          <button className="post" onClick={addPost}>
            投稿
          </button>
        </div>
        <div>
          <div>
            <ul className="postNameList">
              {postNames.map((name, id) => (
                <li>{name}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="postElemetList">
              {postElemets.map((element, id) => (
                <li>{element}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
