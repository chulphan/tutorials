import React, { Component } from 'react';
import UserList from './UserList';
import { Map, List, Record } from 'immutable';

const User = Record({
  id: null,
  username: null
});

const Data = Record({
  input: '',
  users: List()
});

class App extends Component {
  
  
  id = 3;

  // state = {
  //   input: '',
  //   users: [
  //     {
  //       id: 1,
  //       username: 'velopert'
  //     },
  //     {
  //       id: 2,
  //       username: 'mjkim'
  //     }
  //   ]
  // }

  // state = {
  //   data: Map({
  //     input: '',
  //     users: List([
  //       Map({
  //         id: 1,
  //         username: 'velopert'
  //       }),
  //       Map({
  //         id: 2,
  //         username: 'chulhwan'
  //       })
  //     ])
  //   })
  // }

  state = {
    data: Data({
      users: List([
        User({
          id: 1,
          username: 'antil'
        }),
        User({
          id: 2,
          username: 'chkim'
        })
      ])
    })
  }

  onChange = (e) => {
    const { value } = e.target;
    const { data } = this.state;
    // this.setState({
    //   input: value
    // });
    this.setState({
      data: data.set('input', value)
    });
  }

  onButtonClick = (e) => {
    const { data } = this.state;
    // this.setState(({ users, input }) => ({
    //   data: data.set('input', '')
    //             .update('users', users => users.push(Map({
    //               id: this.id++,
    //               username: data.get('input')
    //             })))
    // }))

    this.setState({
      data: data.set('input', '')
                .update('users', users => users.push(new User({
                  id: this.id++,
                  username: data.get('input')
                })))
    })
  }

  render() {
    const { onChange, onButtonClick } = this;
    const { data: { input, users } } = this.state;

    return (
      <div>
        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

export default App;