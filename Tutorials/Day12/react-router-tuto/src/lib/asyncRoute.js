import React from 'react';

export default function asyncComponent(getComponent) {
    return class AsyncComponent extends React.Component {
        static Component = null; // AsyncComponent.Component

        state = {
            Component: AsyncComponent.Component
        };

        componentWillMount() {
            if(!this.state.Component) {
                // 결과값 객체 안에 있는 default를 Component라는 이름으로 할당.. default......
                getComponent().then(({default: Component}) => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }

        render() {
            const { Component } = this.state;
            if (Component) {
                return <Component {...this.props} />
            }

            return null;
        }
    }
}