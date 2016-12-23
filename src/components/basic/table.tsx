// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface TableColumnsOptions {
    title?: string;//表头显示字段(优先级高于renderHeader属性)
    key: string;//用于React批量产生element时的key值
    dataIndex: string;//指定数据所在列
    renderHeader?: Function;//(优先级低于title属性)
    renderFooterer?: Function;
    width?: Monkey.MonkeyText;
}
interface TableProps {
    data?: Array<any>;//数据
    columns?: Array<TableColumnsOptions>;
}
interface TableState {

}

export class Table extends React.Component<TableProps, TableState>{
    static defaultProps = {//保证了数据的存在
        data: [] as Array<any>,
        columns: [] as Array<TableColumnsOptions>
    };
    constructor(props: TableProps) {
        super(props);
    }
    _createTableHeader = () => {//th
        let columns = this.props.columns;
        let hasHeader = this.props.columns.some(value => !!value.title || !!value.renderHeader);
        console.log('hasHeader', hasHeader);
        let element: React.ReactNode = hasHeader && <thead>
            <tr>
                {columns.map((value: TableColumnsOptions) => {
                    return <th key={'th-' + value.key}>
                        {value.title || value.renderHeader()}
                    </th>
                })}
            </tr>
        </thead>;
        return element;
    }
    _createTableFooter = () => {//td

        let element: React.ReactNode = <thead>
            <tr>

            </tr>
        </thead>;
        return element;
    }
    _createTableBody = () => {//td
        let data = this.props.data;
        let element: React.ReactNode = <tbody>
            <tr>
            </tr>
        </tbody>
        return element;
    }
    render() {
        let width: string;
        let colList = this.props.columns.map((value: TableColumnsOptions) => {
            if (typeof value.width === 'number') {
                width = value.width + 'px';
            }
            else if (typeof value.width === 'string') {

            }
        })
        return <table>

            {this._createTableHeader()}
        </table>
    }
}