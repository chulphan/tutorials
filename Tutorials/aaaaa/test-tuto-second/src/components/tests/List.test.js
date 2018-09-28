import React from 'react';
import { shallow, mount, render } from 'enzyme';

import '../../setupEzm';

import List from '../List';
import ListItem from '../ListItem';

describe('List tests', () => {

    it('renders list-items', () => {
        const items = ['one', 'two', 'three'];
        //const wrapper = shallow(<List items={items} />);

        const wrapper = render(<List items={items} />);

        wrapper.addClass('foo');

        expect(wrapper.find('.list-items')).toBeDefined();
        expect(wrapper.find('.item')).toHaveLength(items.length);
    });

    it('renders a list item', () => {
        const items = ['Thor', 'Loki'];
        const wrapper = mount(<List items={items} />);

        expect(wrapper.contains(<li key='Thor' className="item">Thor</li>)).toBeTruthy();
    });

    it('renders correct text in item', () => {
        const items = ['John', 'James', 'Luke'];
        const wrapper = mount(<List items={items} />);

        expect(wrapper.find('.item').get(0).props.children).toEqual('John');
    });

    it('renders no item', () => {
        const items = [];
        const wrapper = mount(<List items={items} />);

        expect(wrapper.contains(<span className="empty-message">No items in list</span>)).toBeTruthy();
    });

    it('matches snapshot', () => {

        const items = ['one', 'two', 'three'];

        const wrapper = render(<List items={items} />);

        expect(wrapper).toMatchSnapshot();
    });
})