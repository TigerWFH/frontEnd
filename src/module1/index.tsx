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
// models

interface P { }
interface S {
}

let data = [
    {
        label: 'monkey1',
        value: 'monkey'
    },
    {
        label: 'monkey2',
        value: 'monkey'
    },
    {
        label: 'monkey3',
        value: 'monkey'
    },
    {
        label: 'monkey4',
        value: 'monkey'
    }
];
export class Module1 extends React.Component<P, S>{
    refs: any;
    constructor(prop: P) {
        super(prop);

    }

    _onClickButton = (self: any) => {
        console.log('home-->', this.refs.home.getInputText());
        this.refs.home.setInputText('set')
        console.log('select-->', this.refs.select.getSelectedItem());
        // this.refs.select.setSelectedItemByIndex(0);
        // this.refs.select.setSelectedItemByLabel('cat');
        this.refs.checkbox.toggleState('123');
        console.log('checkboxgroup--->',
            this.refs.checkboxGroup.getSelectedItem());

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
                        <Checkbox ref="checkbox"
                            label="label2"
                            defaultChecked={true} />
                        <br />
                        <CheckboxGroup ref="checkboxGroup"
                            data={data} />
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