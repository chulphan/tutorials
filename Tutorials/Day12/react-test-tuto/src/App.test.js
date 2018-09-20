import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';



// 해당 컴포넌트가 크래쉬 없이 제대로 렌더링 되었는지 확인해줌.
describe('App', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<App/>);
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
