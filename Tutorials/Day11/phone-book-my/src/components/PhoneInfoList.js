import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    state = {
        data: []
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;
        const style={
            margin: 'auto'
        }
        const renderList = data.map((one) => {
            return (
                <PhoneInfo
                    key={ one.id }
                    info={ one }
                    onRemove={ onRemove }
                    onUpdate={ onUpdate }
                />
            )
        })
        return (
            <div style={style}>
                {renderList}
            </div>
        )
    }
}

export default PhoneInfoList;