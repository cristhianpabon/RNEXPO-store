import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  Image
} from "react-native";
import { COLORS } from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";

import { getProfile } from "../store/actions/profile.action";

function ProfileScreen() {
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("getting categories..");
    dispatch(getProfile());
  }, []);
  console.log("PROFILEEEEEEE!!!!")
  console.log(profile)
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <TextInput style={styles.input} onChangeText={handlerTitleChange} /> */}
        <Image
          style={styles.tinyLogo}
          source={{
            uri: `${profile && profile.image ? profile.image : 'https://picsum.photos/200' }`
          }}
        />
        <Text style={styles.label}>Usuario: {profile && profile.user ? profile.user : 'Cris123'}</Text>
        <Text style={styles.label}>Email: {profile && profile.email ? profile.email : 'Cris123@gmail.com'}</Text>
        {/* <Button title="Grabar Direccion" color={COLORS.MAROON} onPress={handlerSave}/> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom:16
  },
});

export default ProfileScreen;
