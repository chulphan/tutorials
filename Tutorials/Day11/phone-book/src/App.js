import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김철환',
        phone: '010-8579-5014'
      },
      {
        id: 1,
        name: '문수',
        phone: '010-1234-1234'
      }
    ],
    keyword: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    this.setState({
      [name]: value
    })
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data})
    }) 
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id) 
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) => info.id === id ? ({...info, ...data}) : info)
    })
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    )
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
          data={filteredList} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
        <input type="text"
               name="keyword"
               placeholder="이름을 입력해주세요"
               value={this.state.keyword}
               onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
