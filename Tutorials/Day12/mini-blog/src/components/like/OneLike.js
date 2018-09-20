import React, { Component } from 'react';

class OneLike extends Component {

    state = {
        title: ''
    }

    removeLike = () => {
        this.props.removeLikeList(this.props.like.title);
    }

    render() {
        const { title } = this.props.like;
        return (
            <div>
                {title}<button onClick={this.removeLike}>x</button><br/>
            </div>
        )
    }
}

export default OneLike;