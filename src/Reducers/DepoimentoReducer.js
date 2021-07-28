const initialState = {
    depoimentos: [],
};

const DepoimentoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'PUSH_DEPOIMENTO':
            return {
                ...state, depoimentos: [action.payload.depoimento, ...state.depoimentos]
            }
            break;
        default:
            break;
    }

    return state;
}

export default DepoimentoReducer;