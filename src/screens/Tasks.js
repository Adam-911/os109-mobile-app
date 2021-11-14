import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import TaskItem from '../components/TaskItem';
import mockData from '../mock/testAppeals.json'

export default function Tasks({navigation}) {

    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState();

    useEffect(() => {
        setTasks(mockData);
    }, [])
    
    const goTo = (path) => {
        navigation.navigate(path);
    }

    const ListItem = ({item}) => <TaskItem data={item} goTo={goTo}/>

    return(
        <View style={styles.container}>
            <TextInput
              style={styles.search}
              onChangeText={setSearch}
              value={search}
              placeholder="Поиск"
            />
            <FlatList 
              style={styles.list}
              data={tasks}
              renderItem={ListItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
        padding: 20,
    },
    search: {
        padding: 12,
        borderWidth: 2,
        borderColor: '#D3D3D3',
        backgroundColor: '#DCDCDC',
        borderRadius: 30,
        height: 55,
        fontSize: 17,
        margin: 15
    },
  });