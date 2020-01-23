const initialState = {palabra:"New word"}

export default (state = initialState, action)=>{
    if (action.type === 'UPDATE_WORD') {
        return{
            ...state,
            word: action.payload
        }
    }
    return state;
};

export const selecteActiveWord = state => state.wordReducer.word;
