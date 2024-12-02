export type TypeOfComment = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
};

export type TypeOfNewComment = {
  author: string;
  content: string;
};

export type TypeOfPost = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  comments: [];
};

export type TypeOfNewPost = {
  author: string;
  content: string;
};
