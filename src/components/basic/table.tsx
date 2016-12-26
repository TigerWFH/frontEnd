// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface TableColumnsOptions {
    title?: string;//表头显示字段(优先级高于renderHeader属性)
    key: string;//用于React批量产生element时的key值
    dataIndex: string;//指定每列的key值，通过该值获取对应的数据
    renderHeader?: Function;//(优先级低于title属性)
    renderFooter?: Function;
    renderCell?: Function;
    width?: Monkey.MonkeyText;
}
interface TableProps {
    data?: Array<any>;//数据
    defaultData?: Array<any>;
    columns?: Array<TableColumnsOptions>;
}
interface TableState {
    data: Array<any>;
}

export class Table extends React.Component<TableProps, TableState>{
    static defaultProps = {//保证了数据的存在
        data: [] as Array<any>,
        columns: [] as Array<TableColumnsOptions>
    };
    constructor(props: TableProps) {
        super(props);
        this.state = {
            data: this.props.data || this.props.defaultData
        };
    }
    _createTableHeader = (columns: Array<TableColumnsOptions>) => {//th
        let _columns = columns;
        if (!(_columns instanceof Array)) {
            return null;
        }
        let _hasHeader = _columns.some(value => !!value.renderHeader || !!value.title);
        let _element: React.ReactNode = _hasHeader && <thead>
            <tr>
                {
                    _columns.map((value: TableColumnsOptions) => {
                        return <th key={'th-' + value.key}>
                            {(value.renderHeader && value.renderHeader()) || value.title}
                        </th>
                    })
                }
            </tr>
        </thead>;
        return _element;
    }
    _createTableFooter = (columns: Array<TableColumnsOptions>) => {//td
        let _columns = columns;
        if (!(_columns instanceof Array)) {
            return null;
        }
        let hasFooter = _columns.some(value => !!value.renderFooter)
        let element: React.ReactNode = hasFooter && <tfoot>
            <tr>
                {
                    _columns.map((value: TableColumnsOptions) => {
                        return <td>
                            {value.renderFooter && value.renderFooter()}
                        </td>
                    })
                }
            </tr>
        </tfoot>;
        return element;
    }
    _createTableBody = (data: Array<any>, columns: Array<TableColumnsOptions>) => {//td
        console.log('body--->', data);
        let _data = data;
        let _columns = columns;
        if (!(_data instanceof Array)) {
            return null;
        }
        if (!(_columns instanceof Array)) {
            return null;
        }
        let _rowList = _data.map((rowData: any, index: number) => {
            return <tr key={'row-' + index}>
                {this._createTableCells(rowData, index, _columns)}
            </tr>;
        });
        let _element: React.ReactNode = <tbody>
            {
                _rowList
            }
        </tbody>
        return _element;
    }
    _createTableCells = (rowData: any, rowIndex: number, columns: Array<TableColumnsOptions>) => {
        let _rowData = rowData;
        let _rowIndex = rowIndex;//行号
        let _columns = columns;
        if (!(_rowData instanceof Object)) {
            return null;
        }
        if (typeof _rowIndex !== 'number') {
            return null;
        }
        if (!(_columns instanceof Array)) {
            return null;
        }
        return _columns.map((header: TableColumnsOptions, colIndex: number) => {
            let _dataIndex = header.dataIndex;
            let _value = _rowData[_dataIndex];
            let _renderCell = header.renderCell ? header.renderCell(_rowData, _dataIndex, this) : _value;
            return <td key={'cell-' + _rowIndex + '-' + colIndex}>
                {_renderCell}
            </td>;
        });
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
            {this._createTableHeader(this.props.columns)}
            {this._createTableFooter(this.props.columns)}
            {this._createTableBody(this.state.data, this.props.columns)}
        </table>
    }
}