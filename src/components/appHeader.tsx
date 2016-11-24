// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// components and utils
// models

interface HeaderProps {
    title?: string | JSX.Element;
    className?: string;
    style?: { [name: string]: string | boolean | number };
    logoStyle?: { [name: string]: string | boolean | number };
}
interface HeaderState {
    title?: string | JSX.Element;
}

export class AppHeader extends React.Component<HeaderProps, HeaderState>{
    refs: any;
    static defaultProps = {
        title: 'Monkey的家'
    };
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            title: null
        };
    }
    setHeaderTitle = (title: string | JSX.Element) => {
        this.setState({
            title: title
        });
    }
    render() {
        let newClass = this.props.className ? 'appHeader' + this.props.className : 'appHeader';
        return (
            <div className={newClass} style={this.props.style}>
                {/*logo */}
                <div className="logo">
                    <img style={this.props.logoStyle} src="" alt="logo" />
                </div>
                {/* title or menu */}
                <div className="title">
                    <span>
                        {this.state.title || this.props.title}
                    </span>
                </div>
                {/* info */}
            </div>
        )
    }
}
