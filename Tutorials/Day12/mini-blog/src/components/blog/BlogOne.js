import React, { Component } from 'react';

class BlogOne extends Component {

    state = {
        id: 0,
        title: '',
        sub: '',
        link: ''
    }

    handleAddLike = () => {
        const { title } = this.state;
        this.props.addLikeList(title);
    }

    componentDidMount() {
        const { id, title, sub, link } = this.props.info;
        this.setState({
            id, title, sub, link
        })
    }

    render() {
        const { title, link } = this.props.info;
        return (
            <div>
                <a href={link}>{title}</a>
                <button onClick={this.handleAddLike}>찜하기</button>
            </div>
        )
    }
}

export default BlogOne;