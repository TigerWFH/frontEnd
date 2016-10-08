// name: card.tsx
// author: monkey@lwork.com
// date: 10-8-2016
// functions:

// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface P {}
interface S {}

class Card extends React.Component<P, S> {
    constructor(param: P) {
        super(param);
    }

    render () {
        return (
            <div>
                <input type="button" value="BTN" />
            </div>
        );
    }
}


export default Card;