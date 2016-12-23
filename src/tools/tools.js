"use strict";
var Fs = require('fs');
var Tools = (function () {
    function Tools() {
        var _this = this;
        this._readFileAsync = function (src) {
            var file = Fs.readFileSync(src, 'utf8'); //返回的是字符串
            if (!file) {
                console.log('读取文件失败!');
            }
            return file;
        };
        this._produceObject = function (param) {
            var obj = {};
            if (!param || !(param instanceof Array)) {
                return null;
            }
            param.forEach(function (value) {
                var tmp = {
                    "zh-CN": "",
                    "tw-CN": "",
                    "hk-CN": "",
                    "en-US": "",
                    "ja-JP": ""
                };
                obj[value] = tmp;
            });
            return obj;
        };
        this.json2Json = function (param, type) {
            var _type = type;
            var _files;
            // 读取原始JSON数据
            if (param && typeof param === 'string') {
                _files = JSON.parse(_this._readFileAsync(param));
            }
            else if (param && param instanceof Array) {
                _files = param.map(function (value) {
                    return JSON.parse(_this._readFileAsync(value));
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
                var _length = _files.length;
                if (!_length) {
                    return null;
                }
                // 生成对应的文件结构
                var destObj_1 = _this._produceObject(Object.keys(_files[0]));
                if (_type && _type instanceof Array) {
                    _files.forEach(function (value, index) {
                        var keyList = Object.keys(value);
                        keyList.forEach(function (item) {
                            destObj_1[item][_type[index]] = value[item];
                        });
                    });
                }
                else if (_type && typeof _type === 'string') {
                    _files.forEach(function (value, index) {
                        var keyList = Object.keys(value);
                        keyList.forEach(function (item) {
                            destObj_1[item][_type] = value[item];
                        });
                    });
                }
                else {
                    _files.forEach(function (value, index) {
                        var keyList = Object.keys(value);
                        keyList.forEach(function (item) {
                            destObj_1[item]["zh-CN"] = value[item];
                        });
                    });
                }
                Fs.writeFileSync('./newJson.json', JSON.stringify(destObj_1), 'utf8');
                return destObj_1;
            }
            else {
                var keyList = Object.keys(_files);
                var destObj_2 = _this._produceObject(keyList);
                if (_type && typeof _type === 'string') {
                    keyList.forEach(function (item) {
                        destObj_2[item][_type] = _files[item];
                    });
                }
                Fs.writeFile('./newJson.json', JSON.stringify(destObj_2), 'utf8');
                return destObj_2;
            }
        };
    }
    return Tools;
}());
exports.Tools = Tools;
