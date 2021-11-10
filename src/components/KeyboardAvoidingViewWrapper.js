import React from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function KeyboardAvoidingViewWrapper({children}) {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    const behavior = Platform.OS === "ios" ? "position" : "";
    return (
        <KeyboardAvoidingView 
          style={{flex: 1}}
          behavior={behavior}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}