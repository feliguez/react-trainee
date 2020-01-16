import React from 'react';

import style from './UserList.module.scss';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
  return (
    <section className={style.wrapper}>
      {users.map(e => {
        return (
          <article key={e.id}>
            <Link to={`/user/${e.id}`}>
              <img src={e.avatar} alt={e.first_name} />
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default UserList;
