// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// components and utils
// models

interface FooterProps { }
interface FooterState { }

export class AppFooter extends React.Component<FooterProps, FooterState>{
    refs: any;
    constructor(props: FooterProps) {
        super(props);
    }

    render() {
        return (
            <div>
                appFooter
            </div>
        )
    }
}
