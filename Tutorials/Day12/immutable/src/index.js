import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import {Map, List} from 'immutable';

// 객체는 Map.
// const obj = Map({
//     foo: 1,
//     inner: Map({
//         bar: 10
//     })
// });

// console.log(obj.toJS());


// // 배열은 List
// const arr = List([
//     Map({ foo: 1 }),
//     Map({ bar: 2 })
// ]);

// console.log(arr.toJS());

// // 설정할땐 set
// let nextObj = obj.set('foo', 5);
// console.log(nextObj.toJS());
// console.log(nextObj !== obj);


// // 값을 읽을땐 get
// console.log(obj.get('foo'));
// console.log(arr.get(0));

// // 읽은 다음에 설정할때는 update
// // 두번째 파라미터로 updater함수가 들어감
// nextObj = nextObj.update('foo', value => value + 1);
// console.log(nextObj.toJS());

// nextObj = obj.setIn(['inner', 'bar'], 20);
// console.log(nextObj.getIn(['inner', 'bar']));

// let nextArr = arr.setIn([0, 'foo'], 1111);
// console.log(nextArr.getIn([0, 'foo']));

// nextArr = arr.push(Map({ qaz: 3 }));
// console.log(nextArr.toJS());
// console.log(nextArr !== arr);

// nextArr = arr.filter(item => item.get('foo') === 1);
// console.log(nextArr.toJS());

// // delete로 key를 지울 수 있음
// nextObj = nextObj.delete('foo');
// console.log(nextObj.toJS());

// console.log(nextArr.toJS());
// nextArr = nextArr.delete(0);
// console.log(nextArr.toJS());

// nextObj.set('kkk', 10);
// console.log(nextObj.toJS());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
