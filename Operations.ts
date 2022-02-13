import { Product } from "./Product";

export class Operations{

   
    arrProds:String[] = [];
     Products: Product[] ;
        
     
     addToCart(arrProds:Product[],Products:Product)
        {
            arrProds.push(Products);
        }

        removeFromCart(arrProds:Product[],delItem:string):Product[]
        {

            
            let altArray:Product[]=[];
            for (var k=0;k<arrProds.length;k++)
            {
                var temp = arrProds[k].pName;
                
                if(arrProds[k].pName.indexOf(delItem)===0)
                {
                   var index=k;
                   console.log("index:"+index);
                   
                }
                
               
            }

            arrProds.splice(index,1);
            return arrProds;
 
        }
        printCart(arrProds:Product[])
        {
            for(var i=0;i<arrProds.length;i++)
            {
            console.log("The items::"+arrProds[i].pName+"::"+arrProds[i].price);
            }
        }
}

