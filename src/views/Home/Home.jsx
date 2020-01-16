import React from 'react';
import Axios from 'axios';
import UserList from '../../components/UserList/UserList';
import logo from '../../logo.svg';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      loading: true
    };
  }

  componentDidMount() {
    Axios.get('https://reqres.in/api/users').then(resp => {
      console.log(resp);
      if (resp.status === 200) {
        const data = resp.data.data;
        this.setState({ users: data, loading: false });
      }
      console.log(this.state.users);
    });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <>
        <h1>Home</h1>
        {!loading ? (
          <UserList users={users} />
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
      </>
    );
  }
}

export default Home;
