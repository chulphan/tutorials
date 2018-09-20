import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

describe('Counter', () => {
    let component = null;

    it('renders correctly', () => {
        component = renderer.create(<Counter />);
    });

    it('matches snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('increase correctly', () => {
        component.getInstance().handleIncrease();
        expect(component.getInstance().state.number).toBe(1);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('decrease correctly', () => {
        component.getInstance().handleDecrease();
        expect(component.getInstance().state.number).toBe(0);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});