import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
import { connect } from 'react-redux'
import { addPhoto } from '../redux/actions';
import flipIcon from '../../assets/flip.png';

function Camera109({ navigation, addPhoto }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState();
    const cam = useRef();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        const options = { quality: 0.5, base64: true, skipProcessing: true };

        if (cam.current) {
            let photo = await cam.current.takePictureAsync(options);
            setPhoto(photo.base64);
        }

    }

    const savePhoto = () => {
        addPhoto(photo);
        navigation.goBack();
    }

    const flip = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
    }

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>Нет доступа к камере</Text>;
    }

    return (
        <View style={styles.container}>
            { !photo ?
                <Camera 
                  style={styles.camera} 
                  type={type}
                  ref={cam}
                >
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={flip}
                        >
                            <Image source={flipIcon} style={styles.flipIcon}/>
                        </TouchableOpacity>
                        <View style={{flex: 1.5, alignItems: 'flex-start'}}>
                            <TouchableOpacity
                                style={styles.buttonShot}
                                onPress={takePicture}>
                                <View style={styles.circleWrapper}>
                                    <View style={styles.circle}></View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Camera>
                : 
                <ImageBackground source={{uri: "data:image/jpg;base64," + photo}} style={{flex:1}} resizeMode="cover"> 
                    <View style={{flex: 1, flexDirection:'row', alignItems: 'flex-end'}}>
                        <TouchableOpacity
                          style={styles.buttoSave}
                          onPress={savePhoto}
                        >
                            <Text style={styles.text}> Сохранить </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            }
        </View>
    );
}

const mapStateToProps = ({ photos }) => {
    return { photos };   
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPhoto: (newPhoto) => {
            dispatch(addPhoto(newPhoto))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Camera109);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        alignItems:'flex-end'
    },
    button: {
        flex: 1,
        alignItems: 'center',
    },
    circleWrapper: {
        borderRadius: 50, 
        borderWidth: 2,  
        borderColor: 'grey', 
        height: 60, 
        width: 60, 
        alignItems:'center', 
        justifyContent: 'center'
    },
    circle: {
        borderRadius: 50,
        backgroundColor: 'grey', 
        height: 50, 
        width: 50,
    },
    buttonShot: {
        borderRadius: 50, 
        borderWidth: 1
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    flipIcon: {
        height: 30,
        width: 30,
        tintColor: 'white'
    }, 
    buttoSave: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 20,
        backgroundColor: '#1E90FF',
        borderRadius: 50,
        height: 50,
    }
 }); 