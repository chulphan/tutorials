import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import results from '../.jest-test-results.json';
import { withTests } from 'storybook-addon-jest';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('test App', module)
  .addDecorator(withTests({ results }))
  .add(
    'This story shows test results from App.test.js',
    () => <div>Jest result in storybook</div>,
    {
      jest: ['../App.test.js']
    }
  )
