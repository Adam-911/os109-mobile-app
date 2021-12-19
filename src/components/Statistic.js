import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Statistic({content, count, countColor}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textTotal}>{content}</Text>
            <View style={[styles.wrapperCount, {backgroundColor: countColor}]}>
                <Text style={styles.quantityTotal}>{count}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        // flex: 1,
        // alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 12,
        paddingLeft: 12,
        // borderWidth: 2,
        // borderColor: '#D3D3D3',
        // backgroundColor: '#DCDCDC',
        // borderRadius: 50,
        height: 55,
        width: 338,
        alignItems: 'center'
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
        // fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    quantityTotal: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
})