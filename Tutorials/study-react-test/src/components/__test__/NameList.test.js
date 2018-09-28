import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';

import NameList from '../NameList';

/*
    *********NameList 컴포넌트 테스트 항목***********
    NameList 컴포넌트가 에러없이 렌더링 되었는지
    가짜 데이터를 바탕으로 잘 렌더링 되었는지.
    renderList 메소드가 제대로 동작하는지.
    
*/

describe('about <NameList>..', () => {
    let component = null;
    it('NameList component render correctly.', () => {
        component = shallow(<NameList/>);
    });

    it('render correctly with mock data', () => {
        const mockData = ['testantil', 'testchul', 'testkim', 'testhwan'];

        component = shallow(<NameList names={mockData}/>);
        
        expect(component).toMatchSnapshot();

        expect(component.find('li')).toHaveLength(mockData.length);

        expect(component.find('li').contains(<li>testchul</li>)).toBe(true);

    });

    it('the renderList function is called correctly', () => {
        component = shallow(<NameList/>);
        component.setProps({names: ['1', '2', '3', '4', '5']});
        const renderList = component.instance().renderList();

        expect(renderList).toMatchSnapshot();
    });
})