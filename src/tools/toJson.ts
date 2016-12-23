import { Tools } from './tools';
// 将所有文件合并到一起
const srcJson = ['./zh.json', './tw.json', './hk.json', './en.json', './ja.json'];
const typeList = ['zh-CN', 'tw-CN', 'hk-CN', 'en-US', 'ja-JP'];
const src = './src.json';
let tools = new Tools();
console.log(tools.json2Json(srcJson, typeList));