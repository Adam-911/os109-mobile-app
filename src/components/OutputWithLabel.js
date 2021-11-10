import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OutputWithLabel({data, label}) {
    return(
        <View>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.data}>{data}</Text>
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
    }
})