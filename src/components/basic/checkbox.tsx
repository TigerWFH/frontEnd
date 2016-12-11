// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface CheckboxProps {
    label?: Monkey.MonkeyText; //显示文字
    defaultChecked?: boolean;
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
    toggleState = (checked: boolean) => {
        this.setState({
            checked: checked
        });
    }
    // 内部调用接口列表
    _onToggleState = () => {
        this.setState({
            checked: !this.state.checked
        });
    }
    render() {
        let checkedIcon = this.state.checked ? 'iconfont icon-gouxuan01' : '';
        return (
            <div className="monkeyCheckboxWrapper">
                <span className={this.state.checked && "checked"}>
                    <div className="defaultState checkedState" onClick={this._onToggleState}>
                        {
                            checkedIcon &&
                            <i className={checkedIcon}>
                            </i>
                        }
                    </div>
                    <div className="defaultLabel">
                        {this.props.label}
                    </div>
                </span>
            </div>
        );
    }
}