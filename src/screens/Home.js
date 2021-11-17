import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { AuthContext } from '../context/context';

export default function Home() {

    const {signOut} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.headText}>i-Komek 109</Text>
                <View style={styles.iconWrapper}>
                    <Image
                      source={require('../../assets/profile-home-icon.png')}
                      resizeMode='contain'
                      style={styles.icon}
                    />
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Какое-то предприятие</Text>
                <Text style={styles.bodyTextUnder}>Текст второстепенный</Text>
                <Button title="ВЫЙТИ" onPress={() => signOut()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
    },
    head: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 12,
        backgroundColor: '#1E90FF'
    },
    body: {
        padding: 12,
        flex: 1,
        alignItems: 'center',
    },
    headText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        marginTop: 30
        // paddingBottom: 100
    },
    bodyText: {
        fontSize: 30,
        marginTop: 40
    },
    bodyTextUnder: {
        marginVertical: 20
    },
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        marginTop: 20,
        width: 160,
        height: 160
    }
  });