// name: index.tsx
// author: monkey@lwork.com
// date: 10-8-2016
// functions:

// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// components
import Card from './card';
import Panel from './panel';


interface P { }
interface S { }
class App extends React.Component<P, S> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}


let elem: JSX.Element = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="first" component={Card}>
                <Route path="/1" component={Panel}>
                </Route>
                <Route path="2" component={Card}>
                </Route>
            </Route>
            <Route path="second" component={Panel}>
            </Route>
        </Route>
    </Router>
)
ReactDOM.render(elem, document.getElementById('main'));
