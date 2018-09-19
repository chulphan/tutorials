import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  
  id = 0
  state = {
    phonelist: [],
    keyword: ''
  }

  onCreateBook = (data) => {
    const { phonelist } = this.state;
    this.setState({
      phonelist: phonelist.concat({id: this.id++, ...data})
    });
  }

  onRemoveBook = (id) => {
    const { phonelist } = this.state;
    this.setState({
      phonelist: phonelist.filter((list) => list.id !== id)
    });
  }

  onUpdateBook = (id, data) => {
    const { phonelist } = this.state;
    this.setState({
      phonelist: phonelist.map((list) => {
        return list.id === id ? {...list, ...data} : list
      })
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    const { phonelist, keyword } = this.state;
    const filterPhoneList = phonelist.filter((list) => list.name.indexOf(keyword) !== -1)
    return (
      <div>
        <PhoneForm 
          onCreateBook={ this.onCreateBook }
        /> 
        <p>
          <input type="text"
                 value={ keyword }
                 name="keyword"
                 onChange={ this.handleChange }
                 placeholder="이름 검색"
          />
        </p>
        <PhoneInfoList
          list={ filterPhoneList }
          onRemoveBook={ this.onRemoveBook }
          onUpdateBook={ this.onUpdateBook }
        />
      </div>
    );
  }
}

export default App;
