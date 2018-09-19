import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    state = {
        list: []
    }

    render() {
        const { list, onRemoveBook, onUpdateBook } = this.props;
        const listComps = list.map((one) => {
            return (
                <PhoneInfo
                    key={ one.id }
                    info={ one }
                    onRemoveBook={ onRemoveBook }
                    onUpdateBook={ onUpdateBook }
                />
            );
        })
        return (
            <div>
                { listComps }
            </div>
        );
    }
}

export default PhoneInfoList;