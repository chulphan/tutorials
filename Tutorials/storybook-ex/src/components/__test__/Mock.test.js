import React from 'react';
import Mock from '../Mock';

import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('renders correctly', () => {
    it('<Mock/>', () => {
        const component = shallow(<Mock/>);

        expect(component).toMatchSnapshot();
    });

    it('contains div', () => {
        const component = shallow(<Mock/>);

        expect(component.find('div')).toHaveLength(1);
    })
});