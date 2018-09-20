import React, { Component } from 'react';
import OneLike from './OneLike';

class LikeList extends Component {

    state = {
        likelist: []
    }

    render() {
        const { likes, removeLikeList } = this.props;
        const collectionLikes = likes.map((like) => {
            return (
                <OneLike
                    key={like.id}
                    like={like}
                    removeLikeList={removeLikeList}
                />
            )
        })
        return (
            <div>
                <h1>LikeList!!</h1>
                {collectionLikes}
            </div>
        )
    }
}

export default LikeList;