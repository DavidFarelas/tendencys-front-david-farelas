import { IProduct } from "../models/products.model";

export function productsDto(prods: any[]): IProduct[] {
    const products: IProduct[] = prods.map((product) => {
        return {
            price: product.price,
            name: product.name,
            quantity: product.quantity,
            sku: product.sku,
        }
    });

    return products;
}