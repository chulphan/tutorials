import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';

import Counter from '../Counter';



/*

    ********Counter 컴포넌트 테스트 항목**********

    Counter컴포넌트가 제대로 렌더링 되는지.
    이 컴포넌트의 초기 값이 0으로 설정 되어있는지.
    onIncrease, onDecrease 메소드들이 잘 정의되어있는지
    h1 태그의 text는 카운터 라고 명시되어있어야 함
    + 버튼을 누르면 값이 1이 되어야함(증가)
    - 버튼을 누르면 값이 0이 되어야함(감소)

*/


describe('About Counter components...', () => {
    let component = null;

    it('renders correctly', () => {
        /*
        shallow calls constructor, render, componentDidMount.
        shallow + setProps calls componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate
        shallow + unmount call componentWillUnmount
        */
        // shallow rendering is useful to constrain yourself to testing a component as a unit, 
        // and to ensure that your tests aren't indirectly asserting on behavior of child components
        component = shallow(<Counter />);

    });

    it('check initial value is 0 or not', () => {
        let initialVal = component.state().value;
        expect(initialVal).toBe(0);
    });

    describe('check methods are defined', () => {
        it('check onIncrease defined', () => {
            expect(component.instance().onIncrease).toBeDefined();
        });

        it('check onDecrease defined', () => {
            expect(component.instance().onDecrease).toBeDefined();
        });
    })

    it('h1 of context is 카운터', () => {
        expect(component.find('h1').text()).toBe('카운터');
    })

    describe('methods for this component..', () => {
        it('increased by one', () => {
            component.find('button').at(0).simulate('click');
            expect(component.state('value')).toBe(1); // + 버튼 click 후 number 값이 1이 되길 기대.
        });

        it('decreased by one', () => {
            component.find('button').at(1).simulate('click');
            // toBe(0) 으로 바꿔야 함.
            expect(component.state().value).toBe(0); // - 버튼 click 후 number 값이 -1이 되길 기대.
        });
    });
})