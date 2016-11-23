// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// components and utils
// models

interface HeaderProps { }
interface HeaderState { }

export class AppHeader extends React.Component<HeaderProps, HeaderState>{
    refs: any;
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return (
            <div>
                appHeader
            </div>
        )
    }
}
