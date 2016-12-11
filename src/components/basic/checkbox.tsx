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
            checked: this.props.checked || false
        };
    }
    // 外部调用接口列表
    getCheckboxState = (): boolean => {
        return this.state.checked;
    }
    toggleState = (checked: boolean) => {
        if (checked) {
            this.refs.active.className = "checked";
        }
        else {
            this.refs.active.className = "";
        }
        this.setState({
            checked: checked
        });
    }
    // 内部调用接口列表
    _onToggleState = () => {
        if (this.state.checked) {
            this.refs.active.className = "";
        }
        else {
            this.refs.active.className = "checked";
        }
        this.setState({
            checked: !this.state.checked
        });
    }
    render() {
        let checkedIcon = this.state.checked ? 'iconfont icon-gouxuan01' : '';
        return (
            <div className="monkeyCheckboxWrapper">
                <span ref="active">
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