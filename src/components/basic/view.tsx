// view-1 just for layout
// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// components and utils

// modals

interface ViewProps { }
interface ViewState { }

export class View extends React.Component<ViewProps, ViewState>{
    refs: any;
    constructor(props: ViewProps) {
        super(props);
    }

    render() {
        return (
            <div className="view">
                <article className="viewport">
                    {this.props.children}
                </article>
            </div>
        )
    }
}