import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

// test (also under the alias 'it'.)
// : All you need in a test file is test method which runs a test.
// test(name, fn, timeout) 
// name: test name..(description), fn: contains the expectations to test. timeout: specifying how long to wait before aborting. (default: 5seconds.)

it('renders correctly', () => {
    const tree = renderer.create(<Link page="https://ekhub.co.kr">ekhub</Link>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders no page is set', () => {
    const tree = renderer.create(<Link>ekhub</Link>);

    expect(tree).toMatchSnapshot();
});

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="https://ekhub.co.kr">EKHUB</Link>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    //manually trigger the callback
    tree.props.onMouseEnter();
    //re-rendereing
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    //manually trigger the callback
    tree.props.onMouseLeave();
    //re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});