// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// components and utils
// models

interface ContentProps { }
interface ContentState { }

export class AppContent extends React.Component<ContentProps, ContentState>{
    refs: any;
    constructor(props: ContentProps) {
        super(props);
    }

    render() {
        return (
            <div className="appContent">
                {this.props.children}
            </div>
        )
    }
}
