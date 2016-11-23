// name: card.tsx
// author: monkey@lwork.com
// date: 10-8-2016
// functions:

// libs
import * as React from 'react';
// import * as ReactDOM from 'react-dom';

interface P { }
interface S { }

class Card extends React.Component<P, S> {
    constructor(props: P) {
        super(props);
    }

    componentWillMount() {

    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                {this.props.children}
                <input type="button" value="BTNinCard" />
                <input type="text" value="monkey" />
            </div>
        );
    }
}


export default Card;