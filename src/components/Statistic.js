import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Statistic({content, count, countColor}) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.textTotal}>{content}</Text>
            <View style={styles.wrapperCount}>
                <Text style={[styles.quantityTotal, {color: countColor}]}>{count}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 22,
        paddingVertical: 12,
        paddingLeft: 12,
        borderWidth: 0.2,
        borderColor: '#E3E5E5',
        backgroundColor: '#fff',
        borderRadius: 6,
        height: 70,
        width: 338,
        alignItems: 'center',

        elevation: 2,
    },
    wrapperCount: {
        borderRadius: 50,
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textTotal: {
        fontSize: 18,
        lineHeight: 21,
        // textDecorationLine: 'underline',
        letterSpacing: 0.25,
        color: '#3E4345',
        
    },
    quantityTotal: {
        fontSize: 30,
        // lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})