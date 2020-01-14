import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const Post = props => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      )
      .then(resp => {
        console.log('Resp:', resp);
        if (resp.status === 200) {
          setPost({ ...resp.data });
        }
      });
  }, [props.match.params.id]);

  return (
    <div>
      {post ? (
        <>
          <Link to="/">Volver</Link>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Comments post={post} />
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Post;
