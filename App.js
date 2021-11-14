import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState, useMemo } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from './src/context/context';
import { LoginScreenNavigator } from './src/navigation/CustomNavigation';
import TabNavigation from './src/navigation/TabNavigation';


export default function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    const authContext = useMemo(() => ({
        signIn: (username, password) => {

            if (username && password) {
                setUserToken('asd');
                setIsLoading(false);
            }

        },
        signOut: () => {
            setUserToken(null);
            setIsLoading(false);
        }
    }));

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, [])

    if (isLoading) {
        return(
          <View style={styles.loading}>
              <ActivityIndicator size="large"/>
          </View>
        )
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                { userToken ? <TabNavigation/> : <LoginScreenNavigator/> }
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff'
    }
});
