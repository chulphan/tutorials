import React, { Component } from 'react';

class MyName extends Component {
    // defaultProps: 실수 또는 특정 상황에는 props를 비워야할 때가 있음. 그러한 경우 props의 기본값을 지정해줄 수 있다.
    // 아래와 같이 지정해줄 수도 있고. 클래스 밖에서 지정해줄 수도 있다.
    static defaultProps = {
        name: '기본이름'       
    }
    render() {
        return (
            <div>
                {/* 
                    props 값은 부모 컴포넌트로 부터 받는 값이고, 아래와 같이 받아서 사용할 수 있다.
                    이 props 값은 직접적으로 수정할 수 없다.
                */}
                안녕하세요. 제 이름은 {this.props.name} 입니다.<br/>
                나이는 {this.props.age} 세 입니다.
            </div>
        );
    }
}

// 우선적용순위는 이 놈이 더 높은거 같다.
MyName.defaultProps = {
    name: '기본이름이름'
};

export default MyName;