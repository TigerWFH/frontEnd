// name: card.tsx
// author: monkey@lwork.com
// date: 10-8-2016
// functions:

// libs
import * as React from 'react';
// import * as ReactDOM from 'react-dom';

interface P {}
interface S {}

class Card extends React.Component<P, S> {
    constructor(props: P) {
        super(props);
    }

    render () {
        return (
            <div>
                <div>for gulp watch test</div>
                <input type="button" value="BTNinCard" />
            </div>
        );
    }
}


export default Card;