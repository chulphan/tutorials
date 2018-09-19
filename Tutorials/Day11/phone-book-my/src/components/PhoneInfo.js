import React, { Component } from 'react';

class PhoneInfo extends Component {
    state = {
        id: 0,
        name: '',
        phone: '',
        editing: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(!nextState.editing && !this.state.editing && nextProps.info === this.props.info){
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log("didUpdate is called");
        console.log("prevProps ", prevProps);
        console.log("prevState ", prevState);
        console.log("this.props", this.props);
        console.log("this.state ", this.state);
        const { info, onUpdate } = this.props;

        if (!prevState.editing && this.state.editing) {
            this.setState({
                id: info.id,
                name: info.name,
                phone: info.phone
            })
        }

        if (prevState.editing && !this.state.editing) {
            const { id, name, phone } = this.state;
            onUpdate(id, { name, phone });
        }
    }

    handleRemove = () => {
        const { id } = this.props.info;

        this.props.onRemove(id);
    }

    handleToggle = () => {
        const { editing } = this.state;
        this.setState({
            editing: !editing
        })
    }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        console.log(this.props.info.id);
        const style = {
            border: '1px solid gray',
            width: '500px',
            margin: '10px',
            padding: '10px'
        }

        const { editing } = this.state;

        if (editing) {
            const { id, name, phone } = this.state;
            return (
                <div style={style}>
                    {id}<br/>
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    /><br/>
                    <input type="text"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange}
                    /><br/>
                    <button onClick={this.handleToggle}>수정완료</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        const { name, phone } = this.props.info;
        return (
            <div style={style}>
                이름: {name} <br />
                번호: {phone} <br />
                <button onClick={this.handleToggle}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;