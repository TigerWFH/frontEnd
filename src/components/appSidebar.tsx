// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// components and utils
// models

interface SidebarProps { }
interface SidebarState { }

export class AppSidebar extends React.Component<SidebarProps, SidebarState>{
    refs: any;
    constructor(props: SidebarProps) {
        super(props);
    }

    render() {
        return (
            <div className="appSidebar">
                appSidebar
            </div>
        )
    }
}
