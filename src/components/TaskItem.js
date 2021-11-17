import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getStatus } from '../util/util';

export default function TaskItem({data, goTo}) {

    const {
        status,
        description,
        adress,
        phone
    } = data;

    const footerText = () => {
        return `${adress}, ${phone}`;
    }

    const getStatusStyle = (status) => {
        switch (status) {
            case 1:
                return stylesStatus.new;
            case 2:
                return stylesStatus.inProgress
        }
    }

    return(
        <TouchableOpacity  onPress={() => goTo("Обращение")}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={getStatusStyle(status)}>{getStatus(status)}</Text>
                    <Text>800 минут назад</Text>
                </View>
                <View style={styles.body}>
                    <Text>{description}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>{footerText()}</Text>
                </View>
                <View style={styles.borderBottom}></View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 13,
    },
    head: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    body: {
        flex: 1,
        padding: 10
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    footerText: {
        color: '#1E90FF'
    },
    status: {
        fontSize: 18,
    },
    borderBottom: {
        flex: 1,
        borderBottomWidth: 1,
        marginHorizontal: 10,
        borderBottomColor: '#DCDCDC',
        marginVertical: 10
    }
  });

  const stylesStatus = StyleSheet.create({
      new: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#32CD32'
      },
      inProgress: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#FFD700'
      },
  });