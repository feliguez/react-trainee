import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [listPost, setlistPost] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      if (response.status === 200) {
        const data = response.data;
        setlistPost([...data]);
      }
    });
  }, []);

  return (
    <div>
      <h1>Blog List {new Date().getFullYear()}</h1>
      {listPost.map(e => (
        <article key={e.id}>
          <h3>{e.title}</h3>
          <p>{e.body}</p>
          <p>
            <Link to={`posts/${e.id}`}>ver más</Link>
          </p>
        </article>
      ))}
    </div>
  );
};

export default Blog;
