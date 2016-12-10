// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface CheckboxGroupData {
    label: Monkey.MonkeyText;
    value: Monkey.MonkeyText;
}
interface CheckboxGroupProps {

}
interface CheckboxGroupState {
    checked?: boolean;
}

export class Checkbox extends React.Component<CheckboxGroupProps, CheckboxGroupState>{
    refs: any;
    // 初始化列表
    constructor(props: CheckboxGroupProps) {
        super(props);
        this.state = {
            checked: false
        };
    }
    // 外部调用接口列表
    // 内部调用接口列表
    render() {
        return (
            <div className="monkeyCheckboxGroupWrapper">
            </div>
        );
    }
}