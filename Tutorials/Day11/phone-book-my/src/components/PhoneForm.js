import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        id: 0,
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

        const { onCreate } = this.props;
        const { name, phone } = this.state;
        onCreate({name, phone});

        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    이름: <input type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /><br/>
                    전화번호: <input type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    /><br/>
                    <button type="submit">등록하기</button>
                </div>
            </form>
        )
    }
}

export default PhoneForm;