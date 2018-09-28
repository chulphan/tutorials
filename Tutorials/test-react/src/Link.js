import React, { Component } from 'react';

class Link extends Component {
    state = {
        class: 'normal'
    }

    _onMouseEnter = () => {
        this.setState({
            class: 'hovered'
        })
    }

    _onMouseLeave = () => {
        this.setState({
            class: 'normal'
        })
    }

    render() {
        return (
            <a
                className={this.state.class}
                href={this.props.page || '#'}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
            >
                {this.props.children}
            </a>
        )
    }
}

export default Link;