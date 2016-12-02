// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ButtonProps {
    text?: string;
    className?: string;
    onClick?: { (instance: any): void }
}
interface ButtonState {
    text?: string;
}

export class Button extends React.Component<ButtonProps, ButtonState>{
    static defaultProps = {
        text: 'BUTTON'
    };
    changeText = (text: string) => {
        this.setState({
            text: text
        });
    }
    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            text: null
        };
    }
    _onClick = () => {
        this.props.onClick && this.props.onClick(this);
    }
    render() {
        let className = this.props.className ? this.props.className + ' ' : '';

        return (
            <div>
                <button className={className + 'monkey-button'}
                    onClick={this._onClick}>
                    {this.state.text || this.props.text}
                </button>
            </div>
        )
    }
}