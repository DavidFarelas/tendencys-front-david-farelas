import { IProduct } from "./products.model";
import { ITotals } from "./totals.model";

export interface IOrder {
    id: string,
    items: IProduct[],
    totals: ITotals,
    currency: string,
}