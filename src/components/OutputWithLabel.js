import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OutputWithLabel({data, label, styleType}) {

    const getStyle = () => (
        styleType === 'underline' ? [{}, styles.underlineData] : [styles.label, styles.data]
    );

    const [labelStyle, dataStyle] = getStyle();

    return(
        <View>
            <Text style={labelStyle}>{label}</Text>
            <Text style={dataStyle}>{data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    label: {
        paddingLeft: 8
    },
    data: {
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 8,
        fontSize: 16
    }, 
    underlineData: {
        overflow: 'hidden',
        // padding: 8,
        fontSize: 16,
        borderBottomWidth: 1,
        paddingVertical: 7,
        fontWeight: 'bold',
    }
})