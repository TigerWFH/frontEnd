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
}
interface TextState { }

export class TextInput extends React.Component<TextProps, TextState>{
    refs: any;
    constructor(props: TextProps) {
        super(props);
    }
    static defaultProps = {
        type: 'text'
    };
    getInputText = (): any => {
        return this.refs.input.value;
    }

    _onChange = () => {

    }
    render() {
        let className = this.props.className ?
            this.props.className + ' ' : '';
        return (
            <div className="monkey-input-wrapper">
                <input ref="input"
                    defaultValue={this.props.defaultValue}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    className={className + "default-input"}
                    style={this.props.style}
                    onChange={this._onChange} />
            </div>
        )
    }
}