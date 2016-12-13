// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface RadioProps {
    label: Monkey.MonkeyText | React.ReactNode;
    defaultChecked?: boolean;
    onClick?: { (state: boolean, self: any): boolean };//用于radioGroup
    className?: string;//组件样式
    labelStyle?: React.CSSProperties;//文字（label）样式
    radioStyle?: React.CSSProperties;//图标（icon）样式
}
interface RadioState {
    checked?: boolean;
}

export class Radio extends React.Component<RadioProps, RadioState>{
    refs: any;
    // 初始化列表
    constructor(props: RadioProps) {
        super(props);
        this.state = {
            checked: this.props.defaultChecked || false
        };
    }
    // 外部调用接口列表
    getRadioState = (): boolean => {
        return this.state.checked;
    }
    toggleRadioState = (checked: boolean) => {
        this.setState({
            checked: checked
        });
    }
    // 内部调用接口列表
    _onToggleRadioState = () => {
        let state: boolean;
        if (this.props.onClick) {
            state = this.props.onClick(this.state.checked, this);
        }
        this.setState({
            checked: state || !this.state.checked
        });
    }
    render() {
        let className = this.props.className ? this.props.className + ' ' : '';
        return (
            <div className={className + "monkeyRadioWrapper"}>
                <span className={this.state.checked && "active"}>
                    <span className="defaultRadio"
                        style={this.props.radioStyle}
                        onClick={this._onToggleRadioState}>
                        {
                            this.state.checked &&
                            <span className="checked">
                            </span>
                        }
                    </span>
                    <div className="defaultLabel" style={this.props.labelStyle}>
                        {this.props.label}
                    </div>
                </span>
            </div>
        );
    }
}