import { IOrder } from "../models/order.model";
import { productsDto } from "./products.dto";
import { totalsDto } from "./totals.dto";

export function orderDto(ords: any[]): IOrder[] {
    const orders: IOrder[] = ords.map((order) => {
        return {
            id: order.number,
            totals: totalsDto(order.totals),
            items: productsDto(order.items),
            currency: order.currency
        }
    });

    return orders;
}