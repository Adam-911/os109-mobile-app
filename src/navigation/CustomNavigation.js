import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Appeal from "../screens/Appeal";
import Tasks from "../screens/Tasks";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import Report from "../screens/Report";
import ReportMoreDetails from "../screens/ReportMoreDetails";
import Camera109 from '../components/Camera109'
import ReportHeader from "../components/ReportHeader";

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
            <Stack.Screen
              name="Камера"
              component={Camera109}
            />
        </Stack.Navigator>
    )
}

export {FirstScreenNavigator}

const LoginScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
              name="Вход"
              component={Login}
            />
            <Stack.Screen
              name="Восстановление пароля"
              component={ForgotPassword}
            />
        </Stack.Navigator>
    )
}

export {LoginScreenNavigator}

const ReportScreenNavigator = () => {
    return(
      <Stack.Navigator>
            <Stack.Screen
              name="Отчет"
              component={Report}
              options={{
                headerRight: () => <ReportHeader/>
              }}
            />
            <Stack.Screen
              name="Подробней"
              component={ReportMoreDetails}
            />
      </Stack.Navigator>
    )
}

export {ReportScreenNavigator}