import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove is not defined')
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.data !== nextProps.data) return true;
        else return false;
    }

    // key는 링랙트에서 배열을 랜더링 할 때 꼭 필요한 값.
    // 배열을 렌더링 할 때 값을 통하여 업데이트 성능을 최적화 함.
    // 우리가 데이터를 추가할 때마다 고정적인 고유 값을 부여해주면, 리액트가 변화를 감지해내고 업데이트를 할 때 더 똑똑하게 처리할 수 있게 됨.
    render() {
        console.log('render phoneinfolist');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (<PhoneInfo 
                key={info.id} 
                info={info} 
                onRemove={onRemove}
                onUpdate={onUpdate}
            />)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;