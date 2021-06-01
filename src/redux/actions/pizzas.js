import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload,
})

export const setPizzas = items => {
    return {
        type: 'SET_PIZZAS',
        payload: items,
    }
}

export const fetchPizzas = (category, sortBy) => dispatch => {
    dispatch(setLoaded(false));
    console.log(null >= 0)
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`).then(({ data }) => {
        dispatch(setPizzas(data))
    })
}


