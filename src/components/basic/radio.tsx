// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface RadioProps {

}
interface RadioState {
}

export class Radio extends React.Component<RadioProps, RadioState>{
    refs: any;
    // 初始化列表
    constructor(props: RadioProps) {
        super(props);
        this.state = {

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
    }
    render() {

        return (
            <div className="monkeyRadioWrapper">
                <span>
                    <div className="defaultRadio">
                    </div>
                    <div className="defaultLabel">
                    </div>
                </span>
            </div>
        );
    }
}