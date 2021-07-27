const initialState = {
    depoimentos: [
        { data_hora: new Date('2021-07-26 21:44'), nome: "Esfomeado da Silva", depoimento: "Não vejo a hora! Quero experimentar todos os sabores!" },
        { data_hora: new Date('2021-07-23 04:35'), nome: "Val Conceição", depoimento: "4:30 da manhã ver essas delícias Ai que fome RS . Parabéns pelo excelente trabalho 👏👏👏👏" },
        { data_hora: new Date('2021-06-22 12:03'), nome: "Esfomeado da Silva", depoimento: "Não vejo a hora! Quero experimentar todos os sabores!" },
        { data_hora: new Date('2021-02-13 20:15'), nome: "Esfomeado da Silva", depoimento: "Não vejo a hora! Quero experimentar todos os sabores!" }
    ],
};

const DepoimentoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'PUSH_DEPOIMENTO':
            return {
                ...state, depoimentos: [...state.depoimentos, action.payload.depoimento]
            }
            break;
        default:
            break;
    }

    return state;
}

export default DepoimentoReducer;