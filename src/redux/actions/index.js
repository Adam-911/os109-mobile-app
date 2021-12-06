const addPhoto = (newPhoto) => {
    return {
        type: 'ADD_PHOTO',
        payload: newPhoto
    };
};

const deletePhoto = (photo) => {
    return {
        type: 'DELETE_PHOTO',
        payload: photo
    }
}

const resetPhotos = () => {
    return {
        type: 'RESET_PHOTOS',
        payload: undefined
    }
}

export {
    addPhoto,
    deletePhoto,
    resetPhotos
};