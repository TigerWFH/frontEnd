// 说明:使用原声select，可以使用appearance属性改变外形，但是IE9，10都不支持属性，需要替代方案
//      此方案暂时放弃
// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface SelectData {
    label: string | number;
    value: string | number;
}

interface SelectProps {
    data?: Array<SelectData>;
    onChange?: { (text: string, self: any): void };
}
interface SelectState {
    selected?: boolean;
}

export class Select extends React.Component<SelectProps, SelectState>{
    refs: any;
    // 初始化列表
    constructor(props: SelectProps) {
        super(props);
    }
    // 外部调用接口列表
    getSelectedItem = () => {
        let options = this.refs.select.options;
        if (options.length <= 0) {
            return;
        }
        return {
            label: this.refs.select.options[this.refs.select.selectedIndex].text,
            value: this.refs.select.value
        };
    }
    setSelectedItem = (selectedIndex: number) => {
        if (selectedIndex < 0 || selectedIndex >= this.refs.select.options.length) {
            return;
        }

        this.refs.select.selectedIndex = selectedIndex;
    }
    // 内部调用接口列表
    _onChange = () => {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange('abc', this);
        }
    }
    _renderOptions = (data: Array<SelectData>) => {
        let options: Array<React.ReactNode> = [];
        if (data instanceof Array) {
            data.forEach((item: SelectData) => {
                let obj = <option value={item.value}>
                    {item.label}
                </option>;
                options.push(obj);
            })
        }

        return options;
    }
    render() {
        return (
            <div className="monkey-select-wrapper">
                <select ref='select'
                    onChange={this._onChange}>
                    {this._renderOptions(this.props.data)}
                </select>
            </div>
        )
    }
}