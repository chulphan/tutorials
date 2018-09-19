import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    state = {
        info: []
    }

    
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('nextProps ', nextProps.info);
    //     console.log('this.props.data ', this.props.info);
    //     return nextProps.info !== this.props.info;
    // }


    render() {
        const { info } = this.props;
        const infoList = info.map((list) => {
            return (
                <PhoneInfo 
                   key={list.id}
                   info={list}
                   onRemove={this.props.onRemove}
                   onUpdate={this.props.onUpdate}
                />
            )
        })
        return(
            <React.Fragment>
                {infoList}
            </React.Fragment>
        );
    }
}

PhoneInfoList.defaultProps = {
    info: []
}

export default PhoneInfoList;