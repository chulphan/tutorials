import React, { Component } from 'react';

const Problematic = () => {
    throw (new Error('Bug Occured'));
}

class CounterWithLC extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount.. deprecated');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5의 배수라면 업데이트 하지 않음.
        console.log('shouldComponentUpdate');
        console.log('shouldComponentUpdate ', nextProps);
        console.log('shouldComponentUpdate nextState ', nextState);
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate deprecated');
        console.log('componentWillUpdate, nextProps ', nextProps);
        console.log('componentWillUpdate nextState ', nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log('componentDidUpdate, prevProps ', prevProps);
        console.log('componentDidUpdate prevState ', prevState);
    }

    handleIncrease = () => {
        this.setState(
            ({number}) => (
                {number: number + 1}
            )
        );
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    handleDecrease = () => {
        this.setState(
            ({number}) => (
                {number: number - 1}
            )
        )
    }

    /*
        렌더링 부분에서 오류가 발생하는 것은 사전에 방지해주어야 함.
        주로 에러가 발생하는 이유는 다음과 같다.

        1. 존재하지 않는 함수를 호출하려고 할때.
        2. 배열이나 객체가 올 줄 알았는데, 해당 객체나 배열이 존재하지 않을때.

        이러한 것들은 render 함수에서.. 
        render() {
            if (!this.props.object || !this.props.array || this.props.array.length === 0) return null;
        }

        이렇게 처리하거나

        class Sample extends Component {
            static defaultProps = {
                onIncrement: () => console.warn('onIncrement is not defined'),
                object: {},
                array: []
            }
        }

        defaultProps를 사용하는 것으로 방지할 수 있다.
    */

    render() {
        console.log('render');
        if(this.state.error) return (<h1>에러발생!!!!!</h1>)
        return (
            <React.Fragment>
                <div>
                    <h1>카운터</h1>
                    <div>값: {this.state.number}</div>
                    { this.state.number === 4 && <Problematic/> }
                    <button onClick={this.handleIncrease}>+</button>
                    <button onClick={this.handleDecrease}>-</button>
                </div>
            </React.Fragment>
        );
    }
}

export default CounterWithLC;