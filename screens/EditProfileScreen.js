import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import { COLORS } from '../constants/colors';
// import { addPlace } from '../store/places.actions';
import ImageSelector from '../components/ImageSelector';

function ProfileScreen({ navigation }) {
    const dispatch = useDispatch();
    const [ title, setTitle ] = useState('');
    const [ image, setImage ] = useState('');

    const handlerTitleChange = text => setTitle(text);
    const handlerImageChange = img => setImage(img);
    const handlerSave = () => {
        console.log("Add Image");
        // dispatch(addPlace(title, image));
        navigation.navigate('Profile');
    }

  return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.label}>Imagen</Text>
            {/* <TextInput style={styles.input} onChangeText={handlerTitleChange}/> */}
            <ImageSelector onImage={handlerImageChange}/>
            <Button title="Guardar Imagen" color={COLORS.MAROON} onPress={handlerSave}/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 16
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})

export default ProfileScreen;
