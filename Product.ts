export class Product{
    pid:number;
    pName:string;
    price:number;

    constructor (pid:number, pName:string,price:number)
    {
        this.pid=pid;
        this.pName=pName;
        this.price=price;

    }

    displayProduct()
    {
        console.log("The product is :"+this.pName+" the amount is"+this.price);
    }

    

}