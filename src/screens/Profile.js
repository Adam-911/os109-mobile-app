import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, Button, ImageBackground, TouchableOpacity } from "react-native";
import profileBG from '../../assets/profileBG.png'
import OutputWithLabel from '../components/OutputWithLabel'
import { AuthContext } from "../context/context";

export default function Profile() {

    const {signOut} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <ImageBackground style={styles.head} source={profileBG}>
                <Text style={styles.headText}>Профиль</Text>
                {/* <Image source={profileBG} style={{width: '100%', height: '100%'}}/> */}
                <View style={styles.iconWrapper}>
                    <Image
                      source={require('../../assets/profile-home-icon.png')}
                      resizeMode='contain'
                      style={styles.icon}
                    />
                </View>
            </ImageBackground>
            <View style={styles.body}>
                <OutputWithLabel data={"+7 777 555 66 22"} label={"Аккаунт"} styleType="underline"/>
                <OutputWithLabel data={"Иванов Иван"} label={"Имя"} styleType="underline"/>
                <OutputWithLabel data={"Кокшетау Су Арнасы"} label={"Организация"} styleType="underline"/>
                <OutputWithLabel data={"Русский"} label={"Язык"} styleType="underline"/>

                <TouchableOpacity style={styles.buttonOut} onPress={() => signOut()}>
                        <Text style={styles.textButtonout}>ВЫЙТИ</Text>
                </TouchableOpacity>

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
        padding: 25,
        flex: 1,
        alignItems: 'stretch',
        marginTop: 20,
    },
    headText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        marginTop: 30
        // paddingBottom: 100
    },
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        marginTop: 20,
        width: 160,
        height: 160,

    },
    buttonOut: {
        position: 'absolute',
        marginTop: 400,
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
      textButtonout: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }
});