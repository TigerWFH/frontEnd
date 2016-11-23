// libs
import * as React from 'react'
import * as ReactDOM from 'react-dom'
// utils(common)

// components
import Card from '../components/basic/card'

// models

interface P { }
interface S { }
export class Module3 extends React.Component<P, S>{
    constructor(prop: P) {
        super(prop)
    }

    render() {
        return (
            <div>
                third Module1
                {this.props.children}
            </div>
        )
    }
}