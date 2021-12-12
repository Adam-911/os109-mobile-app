import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState, useMemo } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { AuthContext } from './src/context/context';
import { LoginScreenNavigator } from './src/navigation/CustomNavigation';
import TabNavigation from './src/navigation/TabNavigation';
import store from './src/store';


export default function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState("null"); // КАВЫЧКИ СПЕЦИАЛЬНО!

    // TODO: Перенести реализацию из контекста в redux
    // 1) Разбить на action'ы функции signIn и signOut
    // 2) Добавить token и isLoading в store
    // 3) Предусмотреть условия для редюсера
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
        <Provider store={store}>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer>
                    { userToken ? <TabNavigation/> : <LoginScreenNavigator/> }
                </NavigationContainer>
            </AuthContext.Provider>
        </Provider>
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
