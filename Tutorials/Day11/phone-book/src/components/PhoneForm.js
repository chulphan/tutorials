import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {

        // 이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소한다.. (여기서는 onSubmit이 취소되는건가??) 그래서 submit버튼을 눌러도 페이지가 리로딩 되지 않는다.
        // submit이 발생하면 페이지 리로딩이 이루어지고 우리가 가지고 있던 정보를 잃어버리기 때문.
        e.preventDefault();

        // 상태값을 onCreate 메소드를 통하여 부모에게 전달한다.
        this.props.onCreate(this.state);

        //  상태 초기화.
        this.setState(
            (state) => ({
                name: '',
                phone: ''
            })
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input 
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <div>{this.state.name}</div>
                <div>{this.state.phone}</div>
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm;