import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import sharePNG from '../../assets/shaare.png';
import downloadPNG from '../../assets/download.png';

export default function ButtonsBar({size = 'small'}) {
    const sizeStyle = styles[size];
    
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={[styles.buttonImage, sizeStyle]} source={sharePNG}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={[styles.buttonImage, sizeStyle]} source={downloadPNG}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    buttonImage: {
        margin: 5,
        borderRadius: 50,
    },
    small: {
        width: 40,
        height: 40,
    },
    large: {
        width: 60,
        height: 60,
    }
});