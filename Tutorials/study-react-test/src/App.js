import React, { Component } from 'react';
import Counter from './components/Counter';
import NameForm from'./components/NameForm';
import NameList from './components/NameList';

class App extends Component {

  state = {
    names: ['antil', 'chulhwan', 'boboba']
  }

  onInsert = (name) => {
    const { names } = this.state;
    this.setState({
      names: names.concat(name)
    })
  }

  render() {

    const { names } = this.state;
    const { onInsert } = this;

    return (
      <div>
        <Counter/>
        <hr/>
        <h1>이름목록</h1>
        <NameForm onInsert={onInsert}/>
        <NameList names={names}/>
      </div>
    );
  }
}

export default App;
