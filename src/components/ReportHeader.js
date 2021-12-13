import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Calendar from "react-native-calendar-range-picker";

export default function ReportHeader() {
    const [modalVisible, setModalVisible] = useState(false);
    const RU_LOCALE = {
        monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
        ],
        dayNames: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        today: 'Сегодня',
        year: '', // letter behind year number -> 2020{year}
      }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.text}>Фильтр</Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.text}>CLOSE</Text>
                        </TouchableOpacity>
                        <View>
                            <Calendar 
                                startDate={new Date(Date.now() - 259200000).toISOString().split("T")[0]} // 3 дня назад
                                endDate={new Date().toISOString().split("T")[0]}
                                futureYearRange={1}
                                locale={RU_LOCALE}
                                style={{
                                    selectedDayBackgroundColor: 'blue'
                                }}
                                onChange={({ startDate, endDate }) => console.log({ startDate, endDate })}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    text: {
        // fontWeight: 'bold',
        // fontSize: 15
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35
    },
    modalView: {
        width: '100%',
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "stretch",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});