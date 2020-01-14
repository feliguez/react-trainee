import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = ({ post }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then(resp => {
        console.log('Resp', resp.data);
        if (resp.status === 200) {
          setComments([...resp.data]);
        }
      });
  }, [post.id]);
  return (
    <section>
      <h2>Comentarios</h2>
      {comments.map(e => (
        <article key={e.id}>
          <small>
            por <strong>{e.email}</strong>
          </small>
          <p>{e.body}</p>
        </article>
      ))}
    </section>
  );
};

export default Comments;
