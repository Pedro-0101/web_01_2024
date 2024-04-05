import { Product } from "../../model/Product";

export class ProductRepository{
    productList: Product[] = [];

    insereProduto(product: Product){
        this.productList.push(product);
    }

    filtraProduto(id:number, name: string): Product|undefined{
        if(this.productList.find(product => product.id === id)){
            return this.productList.find(product => product.id === id);
        }
        else{
            return this.productList.find(product => product.name === name);
        }
    }

    filtraTodosProdutos():Product[]{
        return this.productList;
    }

} 