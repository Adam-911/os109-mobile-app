import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TaskItem from '../components/TaskItem';
import mockData from '../mock/testAppeals.json'

export default function Tasks({navigation}) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(mockData);
    }, [])
    
    const goTo = (path) => {
        navigation.navigate(path);
    }

    const ListItem = ({item}) => <TaskItem data={item} goTo={goTo}/>

    return(
        <View>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list: {
        padding: 20,
    }
  });