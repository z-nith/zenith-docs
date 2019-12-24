import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../atoms/Button/Button';

export default {
    title: 'Button',
};

export const emoji = () => (
    <Button color={'primary'} variant={'contained'} onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            Keep it 💯
        </span>
    </Button>
);

export const outlined = () => (
    <Button color={'primary'} variant={'outlined'} onClick={action('clicked')}>
        outlined button
    </Button>
);
