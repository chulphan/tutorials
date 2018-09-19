/*

  import를 하는 것은 webpack을 사용하기에 가능한 작업.
  나중에 프로젝트를 build하게 됐을때 webpack에서 파일의 확장자에 따라서 다른 작업을 하게 됨.
  CSS파일을 불러오면 프로젝트에서 사용한 프로젝트를 한 파일에 모두 결합해주는 작업을 진행.
  JS파일을 불러오면 모든 코드들이 제대로 로딩되게 순서를 설정하고 하나의 파일로 합쳐줌.
  사전에 따로 설정하지 않은 확장자(e.g, svg)의 경우 파일로서 불러온 다음에 나중에 특정경로에 사본을 만들어주고 해당 사본의 경로를 텍스트로 받아옴.

*/

// 파일에서 JSX를 사용하려면 React를 꼭 import 해주어야 함.
import React, { Component } from 'react';
import './App.css'

/*
  컴포넌트를 만드는 두가지 방법
  1. 클래스를 통해서(아래와 같이)
  2. 함수를 통해서.

  클래스 형태로 만들어진 컴포넌트는 반드시 render함수를 포함해야하고 render함수 내부에는 반드시 JSX를 return 해주어야 함.
  return 문 내에 있는 코드가 JSX형태임.
*/

/*
  div 두개를 감싸려고 div를 의미없이 쓰기 싫으면 Fragment라는 태그로 감싸주면 됨
  React.Fragment 로 사용.
*/

const state = function(value) {
  if(value === 1) return (<div>하나</div>);
  if(value === 2) return (<div>둘</div>);
  if(value === 3) return (<div>셋</div>);
}

class App extends Component {
  
  // 두번째 div와 같이 복잡한 조건을 작성해야 할 때는 JSX 밖에서 로직을 작성하는 것이 좋음.
  // 하지만 꼭 JSX 내부에서 작성해야 한다면 즉시호출함수를 사용해야함.

  // 리액트에서는 style을 지정할 때 객체형태로 작성해주어야 함.

  render() {
    const value = 3;
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    }
    return (
      <React.Fragment>
        <div>
          {
            1 + 1 === 2 ?
            (<div>맞아요!</div>) :
            (<div>틀료요!</div>)
          }
        </div>
        <div>
          {
            (function() {
              if(value === 1) return (<div>하나</div>);
              if(value === 2) return (<div>둘</div>);
              if(value === 3) return (<div>셋</div>);
            })()
          }
        </div>
        <div>
          {
            state(value)
          }
        </div>
        <div>
          {
            (() => {
              if(value === 1) return (<div>하나</div>);
              if(value === 2) return (<div>둘</div>);
              if(value === 3) return (<div>셋</div>);
            })()
          }
        </div>
        <div style={style}>
          STYLE!!
        </div>
        <div className="App">
        {/* 주석은 이렇게 태그 사이에... 그리고 리액트에서 클래스 이름은 className 으로 지정해준다. */}
          REACT!!!
        </div>
      </React.Fragment>
    );
  }
}

// 우리가 작성한 컴포넌트를 다른 곳에서 부를 수 있도록 내보내기를 해주는 것임.
export default App;
