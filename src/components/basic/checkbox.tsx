// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface CheckboxProps {
    label?: Monkey.MonkeyText | React.ReactNode; //显示文字
    defaultChecked?: boolean;
    className?: string;//组件样式
    checkboxStyle?: React.CSSProperties;//图标（icon)样式
    labelStyle?: React.CSSProperties;//文字（label）样式
}
interface CheckboxState {
    checked?: boolean;
}

export class Checkbox extends React.Component<CheckboxProps, CheckboxState>{
    refs: any;
    // 初始化列表
    constructor(props: CheckboxProps) {
        super(props);
        this.state = {
            checked: this.props.defaultChecked || false
        };
    }
    // 外部调用接口列表
    getCheckboxState = (): boolean => {
        return this.state.checked;
    }
    toggleCheckboxState = (checked: boolean) => {
        this.setState({
            checked: checked
        });
    }
    // 内部调用接口列表
    _onToggleCheckboxState = () => {
        this.setState({
            checked: !this.state.checked
        });
    }
    render() {
        let className = this.props.className ? this.props.className + ' ' : '';
        return (
            <div className={className + "monkeyCheckboxWrapper"}>
                <span className={this.state.checked && "checked"}>
                    <div className="defaultCheckbox checkedState"
                        style={this.props.checkboxStyle}
                        onClick={this._onToggleCheckboxState}>
                        {
                            this.state.checked &&
                            <i className={'iconfont icon-gouxuan01'}>
                            </i>
                        }
                    </div>
                    <div className="defaultLabel"
                        style={this.props.labelStyle}>
                        {this.props.label}
                    </div>
                </span>
            </div>
        );
    }
}