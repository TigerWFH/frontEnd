"use strict";
var tools_1 = require('./tools');
var srcJson = ['./src.json', './src1.json'];
var src = './src.json';
var tools = new tools_1.Tools();
console.log(tools.json2Json(srcJson, ['zh-CN', 'tw-CN']));
