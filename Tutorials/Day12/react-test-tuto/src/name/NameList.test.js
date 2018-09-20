import React from 'react';
import renderer from 'react-test-renderer';
import NameList from './NameList';


describe('NameList', () => {
    let component = null;

    it('renders only', () => {
        component = renderer.create(<NameList namelist={['antil', '김철환']}/>);
    });

    it('matches snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});