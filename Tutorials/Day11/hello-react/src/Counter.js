import React, { Component } from 'react';

/*
    컴포넌트의 state를 정의할 때는 class field 문법을 사용해서 정의한다.
    만약에 class field를 사용하지 않는다면..

    class Counter extends Component {
        constructor(props) {
            super(props);
            this.state = {
                number: 0
            }
        }
        // do something..
    }

    과 같이 작성해야 할 것이다.

    컴포넌트를 만들게 되면 Component 클래스를 상속 받은 것이고 constructor를 새로 정의하는 것은 기존의 클래스에 있던 constructor를 덮어쓰게 되는 것임.
    그러므로 Component 클래스가 가지고 있던  생성자를 super를 통해 미리 실행하고 그 다음에 우리가 할 작업(여기서는 state 설정)을 해주는 것이다.
*/

class Counter extends Component {

    // class field와 constructor 를 같이 사용하면 class fields가 먼저 실행되고, 그 다음에 constructor 가 실행된다..
    // 즉, constructor 에서 설정한 내용이 반영되어버림
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }

    state = {
        number: 0
    }

    /*
        메소드 작성시 아래와 같이 하면 this가 undefined 되는 일이 없음.
        하지만
        handleIncrease() {
            this.setState({
                // do something
            })
        }
        이런 식으로 해버리면 this가 풀려버릴 일이 생길 수 있음.
        이걸 고치려면 constructor 에서 this.handleIncrease = this.handleIncrease.bind(this) 로 고쳐주면 된다.
    */
    

    // state에 있는 값을 변경하기 위해서는 반드시 this.setState를 거쳐야한다. 이 함수가 호출되면 컴포넌트가 re-rendering 되도록 설계되어있다.
    // setState는 객체로 전달되는 인자만 업데이트를 해준다.
    handleIncrease = () => {
        // this.setState({
        //     number: this.state.number + 1
        // });
        this.setState(
            ({number}) => ({
                number: number + 1
            })
        )
    }

    handleDecrease = () => {
        // this.setState({
        //     number: this.state.number - 1
        // });
        if(this.state.number <= 0) return;

        this.setState(
            ({number}) => ({
                number: number - 1
            })
        )
    }

    render() {
        // 이벤트 이름을 설정할때 Camel Case로 설정해주어야함. onclick => onClick, onmousedown => onMouseDown, onchange => onChange
        // 이벤트에 전달해주는 값은 함수여야 한다.
        // 만약에 onClick={this.handleIncrease()} 이런식으로 하게 된다면 렌더링을 할 때마다 해당 함수가 호출이 된다.
        // 이렇게 하게 되면 렌더링 -> 함수호출 -> setState -> 렌더링 -> 함수호출 -> 무한반복... 이 되어버린다.
        return(
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number} </div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;