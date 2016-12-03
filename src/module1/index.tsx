// libs
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// components and utils
import Card from '../components/basic/card'
import { AppHeader } from '../components/appHeader';
import { AppSidebar } from '../components/appSidebar';
import { AppFooter } from '../components/appFooter';
import { AppContent } from '../components/appContent';
import { View } from '../components/basic/view';
import { Button } from '../components/basic/button';
// models

interface P { }
interface S { }
export class Module1 extends React.Component<P, S>{
    constructor(prop: P) {
        super(prop)
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <AppHeader />
                <AppSidebar />
                <AppContent>
                    <View>
                        123123123
                        <Button className='primary' />
                        <AppFooter />
                    </View>
                </AppContent>
            </div>
        )
    }
}