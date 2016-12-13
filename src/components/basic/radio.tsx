// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface RadioProps {
    label: Monkey.MonkeyText | React.ReactNode;
    defaultChecked?: boolean;
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
        this.setState({
            checked: !this.state.checked
        });
    }
    render() {
        let activedClass = this.state.checked && "active";
        return (
            <div className="monkeyRadioWrapper">
                <span className={activedClass}>
                    <span className="defaultRadio"
                        onClick={this._onToggleRadioState}>
                        {
                            this.state.checked &&
                            <span className="checked">
                            </span>
                        }
                    </span>
                    <div className="defaultLabel">
                        {this.props.label}
                    </div>
                </span>
            </div>
        );
    }
}