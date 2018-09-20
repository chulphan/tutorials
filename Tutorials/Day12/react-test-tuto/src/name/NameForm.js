import React, { Component } from 'react';

class NameForm extends Component {
    state = {
        name: ''
    }

    handleChange = (e) => {        
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state;
        this.props.onCreate(name);
        this.setState({
            name: ''
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
                        placeholder="이름을 입력해주세요"
                    />
                    <button type="submit">등록</button>
                </div>
            </form>
        )
    }
}

export default NameForm;