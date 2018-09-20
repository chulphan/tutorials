import React, { Component } from 'react';
import Counter from './counter/Counter';
import NameForm from './name/NameForm';
import NameList from './name/NameList';


class App extends Component {
  id = 0
  state = {
    namelist: []
  }

  onCreate = (data) => {
    const { namelist } = this.state;

    this.setState({
      namelist: namelist.concat({id: this.id++, ...data})
    });
  }

  render() {
    return (
      <div>
        <Counter />
        <NameForm
          onCreate={this.onCreate}
        />
        <NameList
          namelist={this.state.namelist}
        />
      </div>
    );
  }
}

export default App;
