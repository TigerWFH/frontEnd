// libs
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// components and utils
import Card from '../components/basic/card'
import { AppHeader } from '../components/appHeader';
import { AppSidebar } from '../components/appSidebar';
import { AppFooter } from '../components/AppFooter';
// models

interface P { }
interface S { }
export class Module1 extends React.Component<P, S>{
    constructor(prop: P) {
        super(prop)
    }

    render() {
        return (
            <div>
                <AppHeader />
                <AppSidebar />
                <div>
                    {this.props.children}
                </div>
                <AppFooter />
            </div>
        )
    }
}