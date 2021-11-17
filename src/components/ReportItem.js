import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ReportItem({ data, goTo }) {
    const { 
        adress,
        phone,
        cardNum,
        description,
        regDate
    } = data;

    useEffect(() => {

    }, []);

    const cutDescription = (description) => {
        const result = description.length > 38 ? description.substr(0, 38) + '...' : description;
        return result;
    }

    return(
        <TouchableOpacity onPress={() => { goTo("Подробней") }}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.num}>{cardNum}</Text>
                    <Text>{regDate}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>{cutDescription(description)}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>{adress}</Text>
                </View>
                <View style={styles.borderBottom}></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 13,
    },
    head: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    body: {
        flex: 1,
        padding: 5,
    },
    bodyText: {
        fontSize: 15
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    footerText: {
        color: '#1E90FF'
    },
    num: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    borderBottom: {
        flex: 1,
        borderBottomWidth: 1,
        marginHorizontal: 10,
        borderBottomColor: '#DCDCDC',
        marginVertical: 4
    }
  });