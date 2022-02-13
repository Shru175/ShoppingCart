"use strict";
exports.__esModule = true;
exports.Operations = void 0;
var Operations = /** @class */ (function () {
    function Operations() {
        this.arrProds = [];
    }
    Operations.prototype.addToCart = function (arrProds, Products) {
        arrProds.push(Products);
    };
    Operations.prototype.removeFromCart = function (arrProds, delItem) {
        var altArray = [];
        for (var k = 0; k < arrProds.length; k++) {
            var temp = arrProds[k].pName;
            if (arrProds[k].pName.indexOf(delItem) === 0) {
                var index = k;
                console.log("index:" + index);
            }
        }
        arrProds.splice(index, 1);
        return arrProds;
    };
    Operations.prototype.printCart = function (arrProds) {
        for (var i = 0; i < arrProds.length; i++) {
            console.log("The items::" + arrProds[i].pName + "::" + arrProds[i].price);
        }
    };
    return Operations;
}());
exports.Operations = Operations;
