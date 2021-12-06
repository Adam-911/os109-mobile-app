import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';
import { connect } from 'react-redux'
import { addPhoto } from '../redux/actions';

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
        // Сохранить фотографию...
        addPhoto(photo);
        navigation.goBack();
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
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
                            style={[styles.button]}
                            onPress={() => {
                              setType(
                                type === Camera.Constants.Type.back
                                  ? Camera.Constants.Type.front
                                  : Camera.Constants.Type.back
                              );
                            }}>
                              <Text style={styles.text}> Flip </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.button]}
                            onPress={takePicture}>
                            <Text style={styles.text}> БЭМ </Text>
                          </TouchableOpacity>
                      </View>
                </Camera>
              : 
                  <ImageBackground source={{uri: "data:image/jpg;base64," + photo}} style={{flex:1}} resizeMode="cover"> 
                      <TouchableOpacity
                        style={[styles.button, {alignSelf: 'flex-start'}]}
                        onPress={savePhoto}
                      >
                          <Text style={styles.text}> Сохрани </Text>
                      </TouchableOpacity>
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
      // flex: 0.1,
      flex: 1,
      alignItems: 'center',
      borderRadius: 50,
      borderWidth: 1
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
 }); 