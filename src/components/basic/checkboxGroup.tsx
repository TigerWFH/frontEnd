// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Checkbox } from './checkbox';

export interface CheckboxGroupData {
    label: Monkey.MonkeyText;
    value: Monkey.MonkeyText;
}
interface CheckboxGroupProps {
    data?: Array<CheckboxGroupData>;
}
interface CheckboxGroupState {
}

export class CheckboxGroup extends React.Component<CheckboxGroupProps, CheckboxGroupState>{
    refs: any;
    // 初始化列表
    static defaultProps = {
        data: [] as Array<CheckboxGroupData>//解决类型不匹配报错问题
    };
    constructor(props: CheckboxGroupProps) {
        super(props);
    }
    // 外部调用接口列表
    // 内部调用接口列表
    _renderCheckboxes = (data: Array<CheckboxGroupData>): any => {
        if (!data || !data.length) {
            return null;
        }
        let elems: Array<React.ReactNode> = data.map((item: CheckboxGroupData, index: number) => {
            return <Checkbox label={item.label} key={index} />
        });

        console.log('--->', elems);
        return elems;
    }
    render() {
        return (
            <div className="monkeyCheckboxGroupWrapper">
                {this.props.data && this._renderCheckboxes(this.props.data)}
            </div>
        );
    }
}