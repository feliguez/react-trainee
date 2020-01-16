import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import logo from '../../logo.svg';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      loading: true
    };
  }

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    Axios.get(`https://reqres.in/api/users/${id}`).then(resp => {
      if (resp.status === 200) {
        const data = resp.data.data;
        this.setState({ user: data, loading: false });
      }
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <article>
        <Link to="/">volver a listado</Link>
        {!loading ? (
          <>
            <h1>
              {user.first_name} {user.last_name}
            </h1>
            <img src={user.avatar} alt={user.first_name} />
            <ul>
              <li>ID: {user.id}</li>
              <li>e-mail: {user.email}</li>
            </ul>
          </>
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
      </article>
    );
  }
}

export default UserDetail;
