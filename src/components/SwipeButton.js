import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { 
    useAnimatedGestureHandler, 
    useAnimatedStyle, 
    useSharedValue, 
    withSpring
} from "react-native-reanimated";

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 50;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;
const SWIPEABLE_HEIGHT = BUTTON_WIDTH / 2;

const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

export default function SwipeButton() {
    const X = useSharedValue(0);
    const animatedGestureHandler = useAnimatedGestureHandler({
        onActive: (e) => {
            X.value = e.translationX;
        },
        onEnd: (e) => {
            if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
                X.value = withSpring(0);
            } else {
                X.value = withSpring(H_SWIPE_RANGE);
            }
        }
    });

    const animatedStyles = {    
        swipeable: useAnimatedStyle(() => {
            return {
                transform: [{translateX: X.value}]
            };
        })
    };

    return(
        <View style={styles.container}>
            <PanGestureHandler onGestureEvent={animatedGestureHandler}>
                <Animated.View style={[styles.swipeable, animatedStyles.swipeable]}>
                    <Text>С начала года</Text>
                </Animated.View>
            </PanGestureHandler>
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
    swipeable: {
        height: SWIPEABLE_DIMENSIONS,
        width: SWIPEABLE_HEIGHT,
        borderRadius: SWIPEABLE_DIMENSIONS,
        left: BUTTON_PADDING,
        position: 'absolute',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 