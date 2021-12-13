import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import OutputWithLabel from "../components/OutputWithLabel";
import PhotoAlbum from "../components/PhotoAlbum";
import mockData from '../mock/testAppeals.json'
import sharePNG from '../../assets/shaare.png';
import downloadPNG from '../../assets/download.png';
import ButtonsBar from "../components/ButtonsBar";

function ReportMoreDetails({photos}) {

    const [appealData, setAppealData] = useState(mockData[0]);

    return(
        <ScrollView style={styles.container}>
            <ButtonsBar/>
            <OutputWithLabel style={styles.contentItem} data={appealData.description} label="Описание"/>
            <OutputWithLabel data={appealData.adress} label="Адрес"/>
            <OutputWithLabel data={"Нет имени"} label="Обратился"/>
            <OutputWithLabel data={appealData.phone} label="Телефон"/>
            <OutputWithLabel data={appealData.operator109} label="Оператор 109"/>
            <OutputWithLabel data={"Нет"} label="Диспетчер"/>
            <OutputWithLabel data={"фывфывфыв фывфыв фывфыв сфыв фывыфв фыввфы фывыфы фыв"} label="Принятые меры"/>
            <PhotoAlbum photos={photos} editable={false}/>
        </ScrollView>
    )
}

const mapStateToProps = ({ photos }) => {
    return { photos }
}

export default connect(mapStateToProps)(ReportMoreDetails);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    buttonImage: {
        width: 40,
        height: 40,
        margin: 5,
        borderRadius: 50,
    }
});