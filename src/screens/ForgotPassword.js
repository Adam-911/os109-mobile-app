import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function ForgotPassword({ navigation }) {
    const [phone, setPhone] = useState();

    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.text}>На указанный вами номер будет отправлено SMS c временным паролем</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={setPhone}
              value={phone}
              placeholder="+7 (___) ___ - __ - __"
            />
            <TouchableOpacity style={styles.buttonIn} onPress={() => {}}>
                <Text style={styles.textButton}>Отправить</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    head: {
        padding: 20
    },
    input: {
        padding: 12,
        borderWidth: 2,
        borderColor: '#D3D3D3',
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        height: 55,
        fontSize: 17,
        marginBottom: 16
    },
    text: {
        textAlign: 'center',
        marginBottom: 60,
        fontSize: 18
    },
    buttonIn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#1E90FF',
        height: 55
    },
    textButton: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});