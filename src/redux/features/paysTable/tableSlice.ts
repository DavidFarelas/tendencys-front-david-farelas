import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { IOrder } from "../../../paysTable/models/order.model";
import { IProduct } from "../../../paysTable/models/products.model";
import { ITotals } from "../../../paysTable/models/totals.model";

interface IPaysTableState {
    isLoading: boolean,
    orders: IOrder[],
}

const initialState: IPaysTableState = {
    isLoading: true,
    orders: [],
}

export const paysTableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        finishLoading: (state) => {
            state.isLoading = false;
        },
        getOrders: (state, payload: PayloadAction<IOrder[]>) => {
            state.orders = payload.payload
        },
        updateOrder: (state, { payload }: PayloadAction<{ order: IProduct, id: string }>) => {
            const beforeOrderIndex = state.orders.findIndex((order) => order.id === payload.id);
            const prevTotals = current(state.orders[beforeOrderIndex].totals);
            const newSubtotal = Number(prevTotals.subtotal) + (payload.order.quantity * payload.order.price);
            const newItems: IProduct[] = [...state.orders[beforeOrderIndex].items, payload.order];
            const newTotals: ITotals = {
                subtotal: newSubtotal,
                total: Number(prevTotals.total) + (payload.order.quantity * payload.order.price),
                discount: Number(prevTotals.discount),
                shipping: Number(prevTotals.shipping),
                tax: Number(prevTotals.tax),
                weight: Number(prevTotals.weight),
            };

            state.orders[beforeOrderIndex].items = newItems;
            state.orders[beforeOrderIndex].totals = newTotals;

        }
    }
});

export const { getOrders, startLoading, finishLoading, updateOrder } = paysTableSlice.actions;

export default paysTableSlice.reducer;