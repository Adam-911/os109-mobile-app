import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Execution from '../components/Execution';
import KeyboardAvoidingViewWrapper from '../components/KeyboardAvoidingViewWrapper';
import OutputWithLabel from '../components/OutputWithLabel';
import mockData from '../mock/testAppeals.json';
import { getStatus } from '../util/util';

export default function Appeal() {

    const [appealData, setAppealData] = useState(mockData[0]);

    return(
        <KeyboardAvoidingViewWrapper>
            <ScrollView style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.status}>{getStatus(appealData.status)}</Text>
                    <Text>{appealData.regDate}</Text>
                </View>
                <View style={styles.content}>
                    <OutputWithLabel style={styles.contentItem} data={appealData.description} label="Описание"/>
                    <OutputWithLabel data={appealData.adress} label="Адрес"/>
                    <OutputWithLabel data={"Нет имени"} label="Обратился"/>
                    <OutputWithLabel data={appealData.phone} label="Телефон"/>
                    <OutputWithLabel data={appealData.operator109} label="Оператор 109"/>
                    <OutputWithLabel data={"Нет"} label="Диспетчер"/>
                    <Execution/>
                </View>
            </ScrollView>
        </KeyboardAvoidingViewWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-between',
        padding: 12
    },
    scroll: {
        flex: 1
    },
    head: {
        flexDirection: 'row',
        color: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    content: {
        flex: 1,
        justifyContent: 'space-between'
    },
    status: {
        fontSize: 30,
        color: '#32CD32'
    },
  });