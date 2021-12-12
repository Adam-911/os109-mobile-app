import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/context';

export default function Login({navigation}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {signIn} = useContext(AuthContext);

    return(
        <View style={styles.container}>
                <View style={styles.content}>
                    <TextInput
                      style={styles.input}
                      onChangeText={setUsername}
                      value={username}
                      placeholder="Логин"
                    />
                    <TextInput
                      style={styles.input}
                      secureTextEntry={true}
                      onChangeText={setPassword}
                      value={password}
                      placeholder="Пароль"
                    />
                    <TouchableOpacity style={styles.buttonIn} onPress={() => signIn(username, password)}>
                        <Text style={styles.textButton}>Войти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonFP} onPress={() => {navigation.navigate('Восстановление пароля')}}>
                        <Text style={styles.textFP}>Забыли свой пароль?</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'space-around'
    },
    input: {
        padding: 12,
        borderWidth: 2,
        borderColor: '#D3D3D3',
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        height: 55,
        fontSize: 17,
        marginBottom: 20
    },
    buttonIn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#1E90FF',
        marginVertical: 20,
        height: 55
    },
    textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    buttonFP: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textFP: {
        fontSize: 16,
        letterSpacing: 0.25,
        color: '#1E90FF'
    }
})