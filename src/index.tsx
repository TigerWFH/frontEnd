// name: index.tsx
// author: monkey@lwork.com
// date: 10-8-2016
// functions:

// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// components
import Card from './card';
let elem: JSX.Element = <div>
    <Card />
</div>;
ReactDOM.render(elem, document.getElementById('main'));
