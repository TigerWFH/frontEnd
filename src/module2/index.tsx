// libs
import * as React from 'react'
import * as ReactDOM from 'react-dom'
// utils(common)

// components
import Card from '../components/card'

// models

interface P { }
interface S { }
export class Module2 extends React.Component<P, S>{
    constructor(prop: P) {
        super(prop)
    }

    render() {
        return (
            <div>
                second Module1
                {this.props.children}
            </div>
        )
    }
}