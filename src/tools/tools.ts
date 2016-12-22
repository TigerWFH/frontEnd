import * as Path from 'path';
import * as Fs from 'fs';
export interface DestJsonType {
    key: string;
    value:string;
}
export class Tools {
    private srcJson: string;
    constructor(src: string) {
        this.srcJson = src;
    }
    private _readFileAsync = () => {
        let file = Fs.readFileSync(this.srcJson, 'utf-8');
        if (!file) {
            console.log('读取文件失败!');
        }
        console.log('file--->', file);
        return file;
    }
    json2Json = (dest: DestJsonType) => {
        let file = this._readFileAsync();
        let obj = JSON.parse(file);
        console.log('name--->', obj.name);
        let keyList = Object.keys(obj);
        console.log('keyList--->', keyList);
        let destJsonList = keyList.map((value: string) => {
            let destJson: DestJsonType = {
                key: value,
                value: obj[value]
            };
            return destJson;
        });
        console.log('--->', JSON.stringify(destJsonList));
    }
}