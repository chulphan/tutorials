import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { onCreateBook } = this.props;
        const { name, phone } = this.state;
        onCreateBook({name, phone});

        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        const { name, phone } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        placeholder="이름"
                    /><br/>
                    <input type="text"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange}
                        placeholder="전화번호"
                    /><br/>
                    <button type="submit">저장하기</button>
                </div>
            </form>
        )
    }
}

export default PhoneForm;