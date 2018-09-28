import React, { Component } from 'react';

class NameForm extends Component {

    state = {
        name: ''
    }

    onChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name } = this.state;
        const { onInsert } = this.props;

        onInsert(name);
        this.setState({
            name: ''
        });
    }

    render() {
        const { onSubmit, onChange } = this;
        const { name } = this.state;

        return (
            <form onSubmit={onSubmit}>
                <div>
                    <label>이름</label>
                    <input id="forminput" type="text" name="name" value={name} onChange={onChange} />
                    <button id="submitBtn" type="submit" >등록</button>
                </div>
            </form>
        );
    }
}

NameForm.defaultProps = {
    onInsert: () => console.warn('onInsert is not defined')
};

export default NameForm;