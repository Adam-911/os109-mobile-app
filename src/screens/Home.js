import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/context';

export default function Home() {

    const {signOut} = useContext(AuthContext);

    return(
        <View>
            <Text>Страница ГЛАВНАЯ</Text>
            <Button title="ВЫЙТИ" onPress={() => signOut()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });