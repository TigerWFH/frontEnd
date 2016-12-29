import { Tools } from './tools';
// 将所有文件合并到一起
const srcJson = ['./zh.json', './en.json'];
const typeList = ['zh-CN', 'en-US',];
let tools = new Tools();
tools.json2Json(srcJson, typeList);