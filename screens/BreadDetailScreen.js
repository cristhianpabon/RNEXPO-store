import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from 'react-redux';

function BreadDetailScreen() {
  const bread = useSelector(state => state.breads.selected)

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Text>{bread.weight}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
    marginBottom: 10,
  }
});

export default BreadDetailScreen;
