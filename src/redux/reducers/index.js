const initialState = {
    photos: []
}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'ADD_PHOTO':
            return {
                photos: [...state.photos, action.payload]
            };
        case 'DELETE_PHOTO':
            return {
                photos: state.photos.filter(item => item !== action.payload),
            } 
        case 'RESET_PHOTOS':
            return initialState;
                  
        default:
            return state;
    }

}

export default reducer;