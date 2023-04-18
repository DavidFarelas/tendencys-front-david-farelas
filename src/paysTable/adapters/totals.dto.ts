import { ITotals } from "../models/totals.model";

export function totalsDto(totals: any): ITotals {
    const totalDto: ITotals = {
        discount: totals.discount,
        shipping: totals.shipping,
        subtotal: totals.subtotal,
        tax: totals.tax,
        total: totals.total,
        weight: totals.wieght,
    }

    return totalDto;
}