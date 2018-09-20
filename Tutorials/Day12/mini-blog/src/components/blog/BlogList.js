import React, { Component } from 'react';
import BlogOne from './BlogOne';

class BlogList extends Component {

    state = {
        list: []
    }

    render() {
        const { list, addLikeList } = this.props;
        const collect = list.map((one) => {
            return (
                <BlogOne 
                    key={one.id}
                    info={one}
                    addLikeList={addLikeList}
                />
            )
        })
        return (
            <div>
                <h1>BlogList!!!</h1>
                {collect}
            </div>
        )
    }
}

export default BlogList;