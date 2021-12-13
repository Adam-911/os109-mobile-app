import { Camera } from 'expo-camera';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import cameraIcon from '../../assets/camera-icon.png';
import PhotoAlbum from './PhotoAlbum';
import { connect } from 'react-redux';

function Execution({ navigation, photos }) {
    const [execution, setExecution] = useState();
    
    return(
        <View style={styles.container}>
            <Text style={styles.head}>{"Исполнение"}</Text>
            <Text style={styles.label}>{"Принятые меры"}</Text>
            <TextInput
              style={styles.input}
              onChangeText={setExecution}
              value={execution}
              placeholder="Введите данные"
            />
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20}}>
                {photos && <PhotoAlbum photos={photos}/>}
                <View>
                    <TouchableOpacity style={styles.photoButton} onPress={() => navigation.navigate('Камера')}>
                        <Image source={cameraIcon} style={{height: 40, width: 40}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Исполнить</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = ({ photos }) => {
    return { photos }
}

export default connect(mapStateToProps)(Execution);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 18,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 8,
    },
    label: {
        paddingLeft: 8
    },
    head: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 40,
        padding: 12
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#1E90FF',
        marginTop: 20
    },
    photoButton: {
        alignSelf: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#1E90FF',
        padding: 10,
        margin: 5,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});