import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './components/Counter';
import NameForm from './components/NameForm';
import NameList from './components/NameList';

import { shallow, mount } from 'enzyme';

// configure file to use enzyme
import './setupTests';

/*
  **********App 컴포넌트 테스트 항목***********


  App 컴포넌트 내에 자식요소들이 제대로 랜더링 되는가 O
  App 컴포넌트 내에 있는 onInsert 메소드가 제대로 동작하는가 O
  ...

*/

describe('for App component', () => {

  it('check render correctly contains child components', () => {
    const component = mount(<App/>);
    expect(component.contains(Counter)).toBeTruthy();
    expect(component.contains(NameForm)).toBeTruthy();
    expect(component.contains(NameList)).toBeTruthy();
  });

  it('check onInsert method working correctly', () => {
    const component = shallow(<App />);
    console.log(component.state().names);

    component.instance().onInsert('mockedName');

    expect(component.state().names).toHaveLength(4);
  });
})

