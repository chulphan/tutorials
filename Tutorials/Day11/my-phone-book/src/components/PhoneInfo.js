import React, { Component } from 'react';

class PhoneInfo extends Component {
    state = {
        id: 0,
        name: '',
        phone: '',
        editing: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
            return false;
        }

        return true;
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
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

    componentDidUpdate(prevProps, prevState) {
        // compnentDidUpdate는 업데이트가 발생한 즉시 호출된다. 
        // 업데이트가 완료되었을때 DOM을 가동시키는 것에 사용해라.
        
        //console.log(prevState);

        const { info, onUpdate } = this.props;
        
        if(!prevState.editing && this.state.editing) {
            this.setState({
                id: info.id,
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.editing && !this.state.editing) {
            const { name, phone } = this.state;
            onUpdate(info.id, {name, phone});
        }
    }

    render() {
        console.log("!!!!!!!!RENDERED");
        const style = {
            border: '1px solid gray',
            margin: '5px',
            padding: '5px',
            width: '500px'
        }

   
        const { editing } = this.state;

        if(editing) {
            const {id, name, phone} = this.state;
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
                    <button onClick={this.handleRemove}>삭제</button>
                    <button onClick={this.handleToggle}>적용</button>
                </div>
            )
        }
        const {id, name, phone} = this.props.info;
        return (
            <div style={style}>
                {id}
                <b>{name}</b><br/>
                {phone}<br/>
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggle}>수정</button>
            </div>
        )
    }
}

PhoneInfo.defaultProps = {
    id: 0,
    name: '',
    phone: ''
}

export default PhoneInfo;