// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ButtonProps {
    text?: string;
    title?: string;
    className?: string;
    onClick?: { (instance: any): void }
    iconLeft?: string;//图标在左边
    iconRight?: string;//图标在右边
    iconOnly?: string;//仅仅显示图标
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
        let className = this.props.className ?
            this.props.className + ' ' : '';
        let content: React.ReactNode;
        if (this.props.iconOnly) {
            content = <i className={this.props.iconOnly}></i>
        }
        else {
            content = this.props.iconLeft ?
                <span>
                    <i className={this.props.iconLeft}>
                    </i>
                    <span className="text">
                        {this.state.text || this.props.text}
                    </span>
                </span> :
                this.props.iconRight ?
                    <span>
                        <span className="text">
                            {this.state.text || this.props.text}
                        </span>
                        <i className={this.props.iconRight}>
                        </i>
                    </span> :
                    <span className="text">
                        {this.state.text || this.props.text}
                    </span>;
        }
        return (
            <div className='monkeyButtonWrapper'>
                <button className={className + 'defaultButton'}
                    title={this.props.title}
                    onClick={this._onClick}>
                    {
                        content
                    }
                </button>
            </div>
        )
    }
}