import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ReportItem from "../components/ReportItem";
import SwipeButton from "../components/SwipeButton";
import testData from '../mock/testAppeals.json'

export default function Report({ navigation }) {
    const [reports, setReports] = useState();

    useEffect(() => {
        setReports(testData);
    }, []); 

    const goTo = (path) => {
        navigation.navigate(path);
    }

    const ListItem = ({ item }) => <ReportItem data={item} goTo={goTo}/>

    return(
        <View style={styles.container}>
            {/* <SwipeButton/> */}
            <FlatList
              style={styles.list}
              data={reports}
              renderItem={ListItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    }, 
    list: {
        padding: 20,
    },
})