import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function TabBarItem({focused, iconSrc, label, iconSize = {}}) {
    return(
        <View style={[
                    styles.container,
                    {
                    width: 60,
                    height: 60,
                    margin: 2,
                    borderRadius: 4,
                    backgroundColor: focused ? '#1E90FF' : 'white',
                    zIndex: -10}]}>
            <Image
                source={iconSrc}
                resizeMode='contain'
                style={{
                    width: iconSize.width ? iconSize.width : 25,
                    height: iconSize.height ? iconSize.height : 25,
                    tintColor: focused ? 'white' : '#808080'
                }}
            />
            <Text
              style={{color: focused ? 'white' : '#808080', fontSize: 12}}
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