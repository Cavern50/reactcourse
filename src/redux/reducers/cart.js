const initialState = {
    items: {},
    totalPrice: 228,
    totalCount: 0
}

const cart = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            const pizzasInCart = [].concat(...Object.values(newItems))
            return {
                ...state,
                items: newItems,
                totalCount: pizzasInCart.length,
                totalPrice: pizzasInCart.reduce((sum, obj) => obj.price + sum, 0)
            }
        }

        default:
            return state;
    }
}

export default cart;