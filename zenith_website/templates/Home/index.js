import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'atoms';

const index = (props) => {
    return (
        <div>
            <Button title={'Hello World from the atoms folder!'} />
        </div>
    );
};

index.propTypes = {};

export default index;
