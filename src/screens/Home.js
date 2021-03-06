import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import Statistic from '../components/Statistic';
import profileBG from '../../assets/profileBG.png';
import { AuthContext } from '../context/context';

export default function Home() {

    const {signOut} = useContext(AuthContext);

    return(
        <View style={styles.container}>

            <ImageBackground style={styles.head} source={profileBG}>
                <Text style={styles.headText}>iKomek 109</Text>
                <View style={styles.iconWrapper}>
                    <Image
                      source={require('../../assets/profile-home-icon.png')}
                      resizeMode='contain'
                      style={styles.icon}
                    />
                </View>
            </ImageBackground>
{/* 
            <View style={styles.head}>
                <Text style={styles.headText}>iKomek 109</Text>
                <View style={styles.iconWrapper}>
                    <Image
                      source={require('../../assets/profile-home-icon.png')}
                      resizeMode='contain'
                      style={styles.icon}
                    />
                </View>
            </View> */}
            <View style={styles.body}>
                <View style={styles.content}>
                    <Text style={styles.bodyText}>Алматинские Тепловые Сети</Text>
                    <Text style={styles.bodyTextUnder}>Ахметов Ахмет</Text>
                    <Statistic content={"Новые заявки"} count={"6"} countColor={"#00FF00"}/>
                    <Statistic content={"Завки в работе"} count={"3"} countColor={"#F3A72E"}/>
                    <Statistic content={"Выполнено с начала месяца"} count={"28"} countColor={"#1E90FF"}/>
                </View>
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
        backgroundColor: '#1E90FF',
    },
    body: {
        // padding: 12,
        flex: 1,
        alignItems: 'center',
        zIndex: -10,
        backgroundColor: '#1E90FF',
    },
    content: {
        padding: 12,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        // borderTopLeftRadius: 16,
        // borderTopRightRadius: 16,
        // marginHorizontal: 12,
        // marginTop: 12,
    },
    headText: {
        fontFamily: 'Roboto',
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        marginTop: 30
        // paddingBottom: 100
    },
    bodyText: {
        fontSize: 30,
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: 20
    },
    bodyTextUnder: {
        fontSize: 18,
        fontFamily: 'Roboto',
        marginVertical: 20,
        textAlign: 'center',
    },
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        marginTop: 40,
        width: 160,
        height: 160,

    }
  });