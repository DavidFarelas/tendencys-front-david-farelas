import { configureStore } from "@reduxjs/toolkit";
import paysTableSlice, { finishLoading, getOrders } from "./features/paysTable/tableSlice";
import { getProducts } from "../paysTable/services/paysTable.services";

const reducer = {
    paysTable: paysTableSlice,
}

export const store = configureStore({
    reducer,
})

getProducts()
      .then((resp) => store.dispatch(getOrders(resp)))
      .finally(() => store.dispatch(finishLoading()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch