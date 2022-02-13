import { Product } from "./Product";
import { Operations } from "./Operations";

const item=  new Operations();
let cart: Product[]= [];

item.addToCart(cart, new Product(1,'Pencil',20));
item.addToCart(cart, new Product(2,'Books',50));
item.addToCart(cart, new Product(3,'Painting kit',300));
item.addToCart(cart, new Product(4,'Toys',500));
item.addToCart(cart, new Product(5,'Bag',200));


console.log("The items in cart are::::");
item.printCart(cart);

let remItem:number=3;

console.log("The items in cart after removing the item ==>Toys");
cart= item.removeFromCart(cart,"Toys");
item.printCart(cart);
