import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productsConstants";

const dummyProducts = [
    {id: 10, name: "iPhone 13", price: 1000},
    {id: 11, name: "Samsung A30", price: 500},
    {id: 12, name: "Mortola M2", price: 300},
    {id: 13, name: "Symphony Wz", price: 200}
  ];

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        const {data} = await axios.get('api/products');
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
            // payload: dummyProducts
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message
            // payload: dummyProducts
        });
    }
}