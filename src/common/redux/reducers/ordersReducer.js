import {ordersAPI} from '@apicomponents';

const GET_ORDERS = 'admin/orders/GET_ORDERS';

let initialState = {
    orders: []
};

const OrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.orders
            };
        default:
            return state;
    }
};

export const getOrders = (orders) => ({type: GET_ORDERS, orders});

export const getOrdersAPI = () => async (dispatch) => {
    let response = await ordersAPI.getOrders();
    dispatch(getOrders(response.data));
};

export default OrdersReducer;