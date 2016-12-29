"use strict";
var tools_1 = require('./tools');
// 将所有文件合并到一起
var srcJson = ['./zh.json', './en.json'];
var typeList = ['zh-CN', 'en-US',];
var tools = new tools_1.Tools();
tools.json2Json(srcJson, typeList);
