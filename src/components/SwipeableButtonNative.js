import React, { useRef } from "react";
import { Animated, Dimensions, PanResponder, StyleSheet, View } from "react-native";

const DEFAULT_WIDTH = Dimensions.get('window').width * 0.9;
const DEFAULT_HEIGHT = 70;
const DEFAULT_COMPLETE_THRESHOLD_PERCENTAGE = 70;

export default function SwipeableButtonNative() {
    const pan = useRef(new Animated.Value(0)).current;

    const scrollDistance = DEFAULT_WIDTH - (DEFAULT_COMPLETE_THRESHOLD_PERCENTAGE / 100) - DEFAULT_HEIGHT

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                console.log("GRANT!");
                pan.setOffset({
                    x: pan.x._value,
                });
            },
            onPanResponderMove: (e, gestureState) => {
                console.log("X:", pan.x);

                // if (gestureState.dx < 0 || gestureState.dx > scrollDistance) {
                //     return Animated.event([{ dx: pan.x }], { useNativeDriver: false })(e, {
                //         ...gestureState,
                //         dx: gestureState.dx < 0 ? 0 : scrollDistance,
                //     });
                // }

                // if (!pan.x > 350) {
                    return Animated.event([null, { dx: pan.x, }])(e, gestureState);
                // }
            },
            onPanResponderRelease: (evt, { dx, dy }) => {
                console.log("RELEASE!", dx);
                pan.flattenOffset();

                if (dx >= 1) {
                    console.log("TRUE!");
                    Animated.spring(pan.x, {
                        toValue: 170,
                        friction: 9,
                    }).start();
                } else {
                    Animated.spring(pan.x, { 
                        toValue: 0, 
                        friction: 9,
                    }).start();
                }

            }
        })
    ).current;

    return(
        <View style={styles.container}>
            <Animated.View 
              style={{
                transform: [{ translateX: pan.x }]
              }}
              {...panResponder.panHandlers}
            >
                <View style={styles.swipeable}/>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 350,
        height: 100,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'grey'
    },
    swipeable: {
        height: 40,
        width: 175,
        backgroundColor: "grey",
        borderRadius: 50
    }
});