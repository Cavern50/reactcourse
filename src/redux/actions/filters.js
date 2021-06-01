
export const setSortBy = type => {
    return {
        type: 'SET_SORT_BY',
        payload: type
    }
}

export const setCategory = categoryIndex => {
    return {
        type: 'SET_CATEGORY',
        payload: categoryIndex
    }
}

