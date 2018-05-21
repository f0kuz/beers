export const beers = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_BEERS_SUCCESS':
            return [
                ...action.beers
            ]
        default:
            return state
    }
};
