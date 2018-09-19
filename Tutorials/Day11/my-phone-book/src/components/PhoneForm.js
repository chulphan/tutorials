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

        this.props.onCreate(this.state);

        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    <div>{this.state.name} {this.state.phone}</div>
                </div>
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm;