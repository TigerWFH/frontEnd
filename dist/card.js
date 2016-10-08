// name: card.tsx
// author: monkey@lwork.com
// date: 10-8-2016
// functions:
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// libs
var React = require('react');
var Card = (function (_super) {
    __extends(Card, _super);
    function Card(param) {
        _super.call(this, param);
    }
    Card.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("input", {type: "button", value: "BTN"})
        ));
    };
    return Card;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
//# sourceMappingURL=card.js.map