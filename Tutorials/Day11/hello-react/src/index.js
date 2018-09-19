import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Name from './Name';
import Counter from './Counter';
import CounterWithLC from './CounterWithLC';

// 브라우저 상에 리액트 컴포넌트를 보여주기 위해서 ReactDOM.render 메소드를 사용함.
// ReactDOM.render(렌더링 할 결과물, 컴포넌트를 어떤 DOM에 그릴지)
ReactDOM.render(<React.Fragment><App/><Name /><Counter /><CounterWithLC/></React.Fragment>, document.getElementById('root')); // DOM의 id가 root인 곳에 <App />를 렌더링 함.
registerServiceWorker();
