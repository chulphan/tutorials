import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3

  state = {
    informations: [
      {
        id: 0,
        name: '철환',
        phone: '010-8579-1234'
      },
      {
        id: 1,
        name: '병철',
        phone: '010-5056-1234'
      },
      {
        id: 2,
        name: '빠돼',
        phone: '010-5453-1234'
      }
    ],
    keyword: ''
  }

  handleOnCreate = (data) => {
    const { informations } = this.state;
    this.setState ({
      informations: informations.concat({ id: this.id++, ...data })
    });
  }

  handleOnRemove = (key) => {
    const { informations } = this.state;
    this.setState({
      informations: informations.filter(({id}) => key !== id)
    })
  }

  handleOnUpdate = (id, data) => {
    const { informations } = this.state;
    this.setState({
      informations: informations.map((item) => item.id === id ? {...item, ...data} : item)
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { informations, keyword } = this.state;
    const filteredList = informations.filter((info) => info.name.indexOf(keyword) !== -1)
    return (
      <React.Fragment>
        <PhoneForm 
          onCreate={this.handleOnCreate}
        />
        <p>
          <input type="text"
                 value={this.state.keyword}
                 name="keyword"
                 onChange={this.handleChange}
          />
        </p>
        <PhoneInfoList 
          info={filteredList}
          onRemove={this.handleOnRemove}
          onUpdate={this.handleOnUpdate}
        />
      </React.Fragment>
    );
  }
}

export default App;
