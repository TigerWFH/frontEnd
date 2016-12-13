// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Radio } from './radio';

export interface RadioGroupData {
    //目前会兼容部分非标准数据
    label: Monkey.MonkeyText;
    value: Monkey.MonkeyText;
}
interface RadioGroupProps {
    data?: Array<RadioGroupData>;
    defaultValue?: Monkey.MonkeyText;
}
interface RadioGroupState {
}

export class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState>{
    refs: any;
    // 初始化列表
    static defaultProps = {
        data: [] as Array<RadioGroupData>//解决类型不匹配报错问题
    };
    constructor(props: RadioGroupProps) {
        super(props);
    }
    // 外部调用接口列表
    getSelectedItem = (): RadioGroupData => {
        let data = this.props.data;
        if (!data || !data.length) {
            return null;
        }
        let selectedData: any;
        data.forEach((item: RadioGroupData, index: number) => {
            if (this.refs[index.toString()].getRadioState()) {
                let obj = {
                    label: item.label || item,
                    value: item.value || item,
                };
                selectedData = obj;
            }
        });

        return selectedData;
    }
    // 内部调用接口列表
    _renderRadioes = (data: Array<RadioGroupData>): any => {
        if (!data || !data.length) {
            return null;
        }
        let elems: Array<React.ReactNode> = data.map((item: RadioGroupData, index: number) => {
            return <Radio ref={index.toString()}
                onClick={this._onToggleRadioGroupState}
                label={item.label || item}
                key={index}
                defaultChecked={(item.value || item) === this.props.defaultValue} />
        });

        return elems;
    }
    _onToggleRadioGroupState = (state: boolean, self: any) => {
        let data = this.props.data;
        if (!data || !data.length) {
            return false;
        }
        if (!state) {
            data.forEach((item: RadioGroupData, index: number) => {
                if (self !== this.refs[index.toString()]) {
                    this.refs[index.toString()].toggleRadioState(state);
                }
            });
        }
        return true
    }
    render() {
        return (
            <div className="monkeyRadioGroupWrapper">
                {this.props.data && this._renderRadioes(this.props.data)}
            </div>
        );
    }
}