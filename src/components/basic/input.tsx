// libs
import * as React from 'react';
import * as REactDOM from 'react-dom';

interface TextProps {
    className?: string;
    style?: { [name: string]: string };
    type?: string;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    maxLength?: number;
    onChange?: { (text: string, self: any): void };
}
interface TextState {
    value?: string | number;
}

export class TextInput extends React.Component<TextProps, TextState>{
    refs: any;
    // 初始化列表
    static defaultProps = {
        type: 'text'
    };
    constructor(props: TextProps) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }
    // 外部调用接口列表
    getInputText = (): any => {
        return this.refs.input.value;
    }
    setInputText = (inputText: string | number) => {
        this.setState({
            value: inputText
        });
    }
    // 内部调用接口列表
    _onChange = () => {
        this.setState({
            value: this.refs.input.value
        });
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(this.refs.input.value, this);
        }
    }
    render() {
        let className = this.props.className ?
            this.props.className + ' ' : '';
        return (
            <div className="monkeyInputWrapper">
                <input ref="input"
                    defaultValue={this.props.defaultValue}
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    className={className + "defaultInput"}
                    style={this.props.style}
                    maxLength={this.props.maxLength}
                    onChange={this._onChange} />
            </div>
        )
    }
}