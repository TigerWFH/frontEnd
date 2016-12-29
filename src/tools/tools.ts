import * as Path from 'path';
import * as Fs from 'fs';
export interface DestJsonType {
    key: any
}
export class Tools {
    constructor() {
    }
    private _readFileAsync = (src: string) => {
        let file = Fs.readFileSync(src, 'utf8');//返回的是字符串
        if (!file) {
            console.log('读取文件失败!');
        }
        return file;
    }
    private _produceObject = (param: Array<string>) => {//根据文件生成对应的结构
        let obj: any = {};
        if (!param || !(param instanceof Array)) {
            return null;
        }
        param.forEach((value: string) => {
            let tmp = {
                "zh-CN": "",
                "tw-CN": "",
                "hk-CN": "",
                "en-US": "",
                "ja-JP": ""
            };
            obj[value] = tmp;
        });
        return obj;
    }
    json2Json = (param: string | Array<string>, type: string | Array<string>) => {
        let _type = type;
        let _files: any;
        // 读取原始JSON数据
        if (param && typeof param === 'string') {
            _files = JSON.parse(this._readFileAsync(param));
        }
        else if (param && param instanceof Array) {
            _files = param.map((value: string) => {
                return JSON.parse(this._readFileAsync(value));
            });
        }
        else {
            _files = null;
        }

        if (!_files) {
            return null;
        }
        // 转换数据
        if (_files && _files instanceof Array) {
            let _length = _files.length;
            if (!_length) {
                return null;
            }
            // 生成对应的文件结构
            let destObj = this._produceObject(Object.keys(_files[0]));
            let keysOfDest = Object.keys(destObj);
            if (_type && _type instanceof Array) {
                _files.forEach((value: any, index: number) => {
                    let keyList = Object.keys(value);
                    keyList.forEach((item: string) => {
                        if (!destObj[item]) {
                            console.log('第' + index + '个文件的，key为' + item + '的项没有添加到目的文件中');
                        }
                        else {
                            destObj[item][_type[index]] = value[item]
                        }
                    });
                    if (keyList.length < keysOfDest.length) {
                        console.log('转换文件项少于目标文件项');
                    }
                });
            }
            else if (_type && typeof _type === 'string') {
                _files.forEach((value: any, index: number) => {
                    let keyList = Object.keys(value);
                    keyList.forEach((item: string) => {
                        destObj[item][_type as string] = value[item]
                    });
                });
            }
            else {
                _files.forEach((value: any, index: number) => {
                    let keyList = Object.keys(value);
                    keyList.forEach((item: string) => {
                        destObj[item]["zh-CN"] = value[item];
                    });
                });
            }
            Fs.writeFileSync('./newJson.json', JSON.stringify(destObj), 'utf8');
            return destObj;
        }
        else {
            let keyList = Object.keys(_files);
            let destObj = this._produceObject(keyList);
            if (_type && typeof _type === 'string') {
                keyList.forEach((item: string) => {
                    destObj[item][_type as string] = _files[item];
                });
            }
            Fs.writeFile('./newJson.json', JSON.stringify(destObj), 'utf8');
            return destObj;
        }
    }
}