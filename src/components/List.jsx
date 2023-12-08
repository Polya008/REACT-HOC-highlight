import React from 'react';
import ComponentWithWrapper from './myWrapper.jsx';

export default function List(props) {
    return props.list.map(item => {
        return <ComponentWithWrapper key={Math.random(100)} {...item} />
    });
};