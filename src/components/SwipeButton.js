import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 50;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

export default function SwipeButton() {
    return(
        <View style={styles.container}>
            {/* <PanGestureHandler></PanGestureHandler> */}
            <View style={styles.swipable}>
                <Text>С начала года</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: BUTTON_HEIGHT,
        width: BUTTON_WIDTH,
        // padding: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: BUTTON_HEIGHT
    },
    swipable: {
        height: SWIPEABLE_DIMENSIONS,
        width: 175,
        borderRadius: SWIPEABLE_DIMENSIONS,
        left: BUTTON_PADDING,
        position: 'absolute',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 