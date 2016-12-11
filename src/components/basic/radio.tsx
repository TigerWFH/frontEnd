// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface RadioProps {
    label: Monkey.MonkeyText | React.ReactNode;
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
            checked: true
        };
    }
    // 外部调用接口列表
    getCheckboxState = (): boolean => {
        return false;
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
        let activedClass = this.state.checked && "active";
        return (
            <div className="monkeyRadioWrapper">
                <span className={activedClass}>
                    <div className="defaultRadio checked"
                        onClick={this._onToggleState}>
                    </div>
                    <div className="defaultLabel">
                        {this.props.label}
                    </div>
                </span>
            </div>
        );
    }
}