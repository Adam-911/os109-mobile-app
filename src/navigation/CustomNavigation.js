import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Appeal from "../screens/Appeal";
import Tasks from "../screens/Tasks";

const Stack = createStackNavigator();

const FirstScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
              name="Задачи"
              component={Tasks}
            />
            <Stack.Screen
              name="Обращение"
              component={Appeal}
            />
        </Stack.Navigator>
    )
}

export {FirstScreenNavigator}