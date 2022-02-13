"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(pid, pName, price) {
        this.pid = pid;
        this.pName = pName;
        this.price = price;
    }
    Product.prototype.displayProduct = function () {
        console.log("The product is :" + this.pName + " the amount is" + this.price);
    };
    return Product;
}());
exports.Product = Product;
