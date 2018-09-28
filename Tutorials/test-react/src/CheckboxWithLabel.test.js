import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheckboxWithLabel from './CheckboxWithLabel';

Enzyme.configure({adapter: new Adapter()});

it('render the component completely', () => {
    const checkbox = shallow(<CheckboxWithLabel />);

    checkbox
});

test('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);

    expect(checkbox.text()).toEqual('Off');

    expect(checkbox).toMatchSnapshot();

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('On');

    expect(checkbox).toMatchSnapshot();
});

