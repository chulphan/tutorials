import React, { Component } from 'react';

class PhoneInfo extends Component {
    state = {
        id: 0,
        name: '',
        phone: '',
        editing: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(!nextState.editing && !this.state.editing && nextState.id === this.state.id) {
            return false;
        }

        return true;
    }

    componentDidUpdate(prevProps, prevState) {

        if (!prevState.editing && this.state.editing) {
            const { id, name, phone } = this.props.info;
            this.setState({
                id: id,
                name: name,
                phone: phone
            });
        }

        if (prevState.editing && !this.state.editing) {
            const { id, name, phone } = this.state;
            const { onUpdateBook } = this.props;

            onUpdateBook(id, { name, phone });
        }
    }

    handleRemove = () => {
        const { info, onRemoveBook } = this.props;

        onRemoveBook(info.id);
    }

    handleToggle = () => {
        const { editing } = this.state;
        this.setState({
            editing: !editing
        });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { editing } = this.state;
        if (editing) {
            return (
                <div>
                    <input type="text"
                           value={ this.state.name }
                           onChange={ this.handleChange }
                           name="name"
                    /><br />
                    <input type="text" 
                           value={ this.state.phone }
                           onChange={ this.handleChange }
                           name="phone"
                    /><br />
                    <button onClick={this.handleToggle}>수정완료</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        const { name, phone } = this.props.info;
        return (
            <div>
                {name}<br />
                {phone}<br />
                <button onClick={this.handleToggle}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;