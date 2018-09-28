import React, { Component } from 'react';

class CheckboxWithLabel extends Component {
    state = {
        isChecked: false
    }

    onChange = () => {
        const { isChecked } = this.state;
        this.setState({
             isChecked: !isChecked 
        });
    }

    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
            </label>
        );
    }
}

export default CheckboxWithLabel;