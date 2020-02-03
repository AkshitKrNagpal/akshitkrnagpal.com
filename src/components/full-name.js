import React from 'react';

import { Text } from '../styled';

const FullName = ({ name: { firstname, lastname } }) => (
    <div className='row'>
        <Text as='h1' size='xl'>
            <span>{firstname} </span>
            <span className='grey'>{lastname}</span>
        </Text>
    </div>
);

export default FullName;
