import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function TabBarItem({focused, iconSrc, label, iconSize = {}}) {
    return(
        <View style={styles.container}>
            <Image
                source={iconSrc}
                resizeMode='contain'
                style={{
                width: iconSize.width ? iconSize.width : 25,
                height: iconSize.height ? iconSize.height : 25,
                tintColor: focused ? '#0000FF' : '#808080'
                }}
            />
            <Text
              style={{color: focused ? '#0000FF' : '#808080', fontSize: 12}}
            >
                {label}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // top: 10
    }
});