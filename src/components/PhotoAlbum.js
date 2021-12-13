import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import cancelImage from '../../assets/cancel.png'
import { deletePhoto } from "../redux/actions";

function PhotoAlbum({ photos, deletePhoto, editable = true}) {

    const elements = photos.map((photo) => {
        return(
            <View>
                {editable && <TouchableOpacity style={styles.imageButton} onPress={() => deletePhoto(photo)}>
                    <Image style={{height: 20, width: 20}} source={cancelImage}/>
                </TouchableOpacity>}
                <Image style={styles.image} source={{uri: "data:image/jpg;base64," + photo}}/>
            </View>
        )
    })

    return(
        <View style={styles.container}>
            {elements}
        </View>
    )
}

const mapStateToProps = ({ photos }) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePhoto: (photo) => {
            dispatch(deletePhoto(photo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoAlbum);

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    imageButton: {
        position: 'absolute', 
        zIndex: 1, 
        left: 45
    },
    image: {
        width: 60,
        height: 60,
        margin: 5,
        borderRadius: 50,
    }
});