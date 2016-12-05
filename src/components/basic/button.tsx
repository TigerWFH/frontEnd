// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ButtonProps {
    text?: string;
    title?: string;
    className?: string;
    onClick?: { (instance: any): void }
}
interface ButtonState {
    text?: string;
}

export class Button extends React.Component<ButtonProps, ButtonState>{
    refs: any;
    // 初始化列表
    static defaultProps = {
        text: 'BUTTON'
    };
    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            text: null
        };
    }
    // 外部调用接口列表
    changeText = (text: string) => {
        this.setState({
            text: text
        });
    }
    // 内部调用接口列表
    _onClick = () => {
        this.props.onClick && this.props.onClick(this);
    }
    render() {
        let className = this.props.className ? this.props.className + ' ' : '';

        return (
            <div className='monkey-button-wrapper'>
                <button className={className + 'default-button'}
                    title={this.props.title}
                    onClick={this._onClick}>
                    {this.state.text || this.props.text}
                </button>
            </div>
        )
    }
}