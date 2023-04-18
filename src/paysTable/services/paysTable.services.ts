import axios from 'axios';
import { IOrder } from '../models/order.model';
import { orderDto } from '../adapters/order.dto';

export function getProducts(): Promise<IOrder[]> {

    return new Promise((resolve, reject) => {
        axios
            .get(import.meta.env.VITE_API_PATH, {
                headers: {
                    'Authorization': import.meta.env.VITE_API_TOKEN
                }
            })
            .then((resp) => {
                const adpated = orderDto(resp.data.orders);
                resolve(adpated);
            })
            .catch((err) => reject(err));

    });

}