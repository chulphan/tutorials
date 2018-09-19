import React, { Component } from 'react';
import MyName from './MyName';
import MyNameFunc from './MyNameFunc';

class Name extends Component {
    render() {
        return (
            <React.Fragment>
                {/*아래와 같이 name 값에 property를 주어서 자식 컴포넌트에 값을 전달해줄 수 있다.*/}
                <MyName age="29"/>
                <MyNameFunc name="김철환"/>
            </React.Fragment>
        );
    }
}

export default Name;