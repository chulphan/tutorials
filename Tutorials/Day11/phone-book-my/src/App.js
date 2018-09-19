import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0
  state = {
    information: [],
    keyword: ''
  }

  onCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }

  onRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id)
    })
  }

  onUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) => info.id === id ? {...info, ...data} : info)
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
 
    const { information, keyword } = this.state;
    const filterList = information.filter((info) => info.name.indexOf(keyword) !== -1)
    return (
      <div>
        <PhoneForm 
          onCreate={ this.onCreate }
        />
        <p>
          <input type="text"
                 value={ keyword }
                 onChange={ this.handleChange }
                 placeholder="이름 검색"
                 name="keyword"
          />     
        </p>
        <PhoneInfoList 
          data={ filterList }
          onRemove={this.onRemove}
          onUpdate={this.onUpdate}
        />
      </div>
    );
  }
}

export default App;
