import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import '../../setupTests';

import NameForm from '../NameForm';

/*
    *********NameForm 컴포넌트 테스트 항목************
    NameForm 컴포넌트가 제대로 렌더링 되는지.
    props 에 onInsert가 주어지지 않은 채로 렌더링 되었을때, 컴포넌트에 명시 된 defaultProps 내에 있는 onInsert가 문제없이 작동하는지
    onChange, onSubmit 메소드들이 정의되어있는지
    form 태그와 input 태그가 포함되어 있는지
    submit 버튼의 태그타입이 button 인지
    이벤트 작동:
        1. input에 change 효과를 simulate하면 제대로 동작하는지
        2. submit 버튼을 누르면 ... i) e.preventDefault 메소드의 동작으로(가짜객체 넘겨줌) 페이지 변환이 안일어나는지, ii) props로 받은 onInsert함수 실행 후 state 값이 ''로 변하는지.
        3. 최종적으로 해당 컴포넌트의 state가 우리가 준 값으로 변경되었는지.
    
    
*/

describe('<NameForm />', () => {
    let component = null;

    let changed = null;
    const onInsert = (name) => {
        changed = name
    }


    it('it renders correctly', () => {
        component = shallow(<NameForm onInsert={onInsert} />);
    });

   

    describe('check methods are defined', () => {
        it('onChange method', () => {
           expect(component.instance().onChange).toBeDefined();
        });

        it('onSubmit method', () => {
            expect(component.instance().onSubmit).toBeDefined();
        })
    });

    describe('insert a new text', () => {
        describe('check the tag contains form and input', () => {
            it('check has a form', () => {
                expect(component.find('form').exists()).toBe(true);
                expect(component).toMatchSnapshot();
            });
            it('check has an input', () => {
                expect(component.find('input').exists()).toBe(true);
                expect(component).toMatchSnapshot();
            });

            
        });
        it('the type submit button should be button', () => {
            expect(component.find('#submitBtn').type()).toEqual("button")
        })
    });

    it('check default props working', () => {
        const component = shallow(<NameForm/>);

        const mockedEvent = {
            preventDefault: () => null
        }

        expect(component.find('form').simulate('submit', mockedEvent));
    });

    describe('simulate event for ', () => {

        const mockedEvent = {
            target: {
                value: 'abcde'
            }
        };
        it('change input', () => {
            /*
                shallow.simulate(event, [, ...args]) => Self
                    event: (String): The event name to be simulated.
                    args: (Any [optional]): A mock event object that will get passed through to the event handlers.
                Returns:
                    ShallowWrapper: Returns itself.
            */
           // simulate를 사용할때는 event 에 대한 것도 명시해줘야한다.
            component.find('#forminput').simulate('change', mockedEvent);
            // component 의 state의 name property가 hello가 될 것이라고 예상. ==> false.
            expect(component.state().name).toBe('abcde');
        });

        it('submit', () => {

            // 고쳐

            const mockedEvent = {
                preventDefault: () => null
            };

            // simulate 메소드를 실행할 때 경우에 따라서 이벤트 객체를 전달해야한다.
            // ex) form -> submit 이벤트 발생 시에 발동되는 함수 내부에 preventDefault가 포함되어 있다면 
            // 그 함수를 만들어서 simulate의 두번째 인자로 전달해줘야한다.

            component.find('form').simulate('submit', mockedEvent);
            expect(component.state().name).toBe('');
            expect(changed).toBe('abcde');
        });
    });
})