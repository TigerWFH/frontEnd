// libs
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// components and utils
import Card from '../components/basic/card'
import { AppHeader } from '../components/appHeader';
import { AppSidebar } from '../components/appSidebar';
import { AppFooter } from '../components/appFooter';
import { AppContent } from '../components/appContent';
import { View } from '../components/basic/view';
import { Button } from '../components/basic/button';
import { TextInput } from '../components/basic/input';
import { Select } from '../components/basic/select';
import { Checkbox } from '../components/basic/checkbox';
import { CheckboxGroup } from '../components/basic/checkboxGroup';
import { Radio } from '../components/basic/radio';
import { RadioGroup } from '../components/basic/radioGroup';
// models

interface P { }
interface S {
}

let data = [
    {
        label: 'monkey1',
        value: 'monkey1',
    },
    {
        label: 'monkey2',
        value: 'monkey2',
        defaultState: true//用于复选框
    },
    {
        label: 'monkey3',
        value: 'monkey3'
    },
    {
        label: 'monkey4',
        value: 'monkey4'
    }
];

let data1 = [
    'monkey',
    'cat',
    'mouse',
    'elephant'
];
export class Module1 extends React.Component<P, S>{
    refs: any;
    constructor(prop: P) {
        super(prop);

    }

    _onClickButton = (self: any) => {
        // TextInput
        console.log('home-->', this.refs.home.getInputText());
        this.refs.home.setInputText('set')
        // Select
        console.log('select-->', this.refs.select.getSelectedItem());
        // this.refs.select.setSelectedItemByIndex(0);
        // this.refs.select.setSelectedItemByLabel('cat');
        // Checkbox
        let item = this.refs.checkbox.getCheckboxState();
        let item2 = this.refs.checkbox2.getCheckboxState();
        console.log('checkbox--->', item);
        console.log('checkbox2--->', item2);
        // CheckboxGroup
        this.refs.checkbox.toggleCheckboxState(true);
        console.log('checkboxgroup--->',
            this.refs.checkboxGroup.getSelectedItem());
        // Radio
        let radio = this.refs.radio.getRadioState();
        let radio2 = this.refs.radio2.getRadioState();
        console.log('radio--->', radio);
        console.log('radio2--->', radio2);
        // RadioGroup
        let radioGroup = this.refs.radioGroup.getSelectedItem();
        let radioGroup2 = this.refs.radioGroup2.getSelectedItem();
        console.log('radioGroup--->', radioGroup);
        console.log('radioGroup2--->', radioGroup2);
    }
    _onChange = () => {

    }
    _onSelect = () => {
        console.log(event);
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <AppHeader />
                <AppSidebar />
                <AppContent>
                    <View>
                        123123123
                        <Button className="primary ghost"
                            onClick={this._onClickButton} />
                        <Button className="primary ghost"
                            iconLeft="fa fa-plus"
                            onClick={this._onClickButton} />
                        <Button className="primary ghost"
                            iconOnly="fa fa-plus"
                            onClick={this._onClickButton} />
                        <Button className="primary ghost"
                            iconRight="fa fa-plus"
                            onClick={this._onClickButton} />
                        <Button className="primary ghost"
                            iconRight="fa fa-plus"
                            iconLeft="fa fa-times"
                            onClick={this._onClickButton} />
                        <Button className="primary ghost"
                            iconRight="fa fa-plus"
                            iconLeft="fa fa-times"
                            iconOnly="fa fa-music"
                            onClick={this._onClickButton} />
                        <TextInput ref="home"
                            placeholder="123"
                            onChange={this._onChange}
                            />
                        <br />
                        <Select ref="select"
                            data={data} />
                        <br />
                        <Checkbox ref="checkbox"
                            label="label" />
                        <Checkbox ref="checkbox2"
                            label="label2"
                            defaultChecked={true} />
                        <CheckboxGroup ref="checkboxGroup"
                            data={data} />
                        <br />
                        <Radio ref="radio"
                            label="radio"
                            defaultChecked={true} />
                        <Radio ref="radio2"
                            label="radio2" />
                        <RadioGroup ref="radioGroup"
                            defaultValue={data[2].value}
                            data={data} />
                        <RadioGroup ref="radioGroup2"
                            defaultValue={data1[2].value || data1[2]}
                            data={data1} />
                        <br />
                        <span className="iconfont icon-about01"></span>
                        <span className="fa fa-plus-circle"></span>
                        <AppFooter />
                    </View>
                </AppContent>
            </div>
        )
    }
}