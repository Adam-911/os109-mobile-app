import { Camera } from 'expo-camera';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Camera109 from './Camera109';

export default function Execution() {
    const [execution, setExecution] = useState();
    return(
        <View style={styles.container}>
            <Text style={styles.head}>{"Исполнение"}</Text>
            <Text style={styles.label}>{"Принятые меры"}</Text>
            <TextInput
              style={styles.input}
              onChangeText={setExecution}
              value={execution}
              placeholder="Введите данные"
            />
            {/* <Camera109/> */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Исполнить</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 18,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 8,
    },
    label: {
        paddingLeft: 8
    },
    head: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 40,
        padding: 12
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#1E90FF',
        marginTop: 20
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});