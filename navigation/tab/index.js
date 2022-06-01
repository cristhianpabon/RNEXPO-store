import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ShopNavigator from "../shop";
import CartNavigator from "../cart";
import OrderNavigator from '../order';
import ProfileNavigator from "../profile";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="md-home" size={24} color="black" />
              <Text>Tienda</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="md-cart" size={24} color="black" />
              <Text>Carrito</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="md-list" size={24} color="black" />
              <Text>Ordenes</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="md-cart" size={24} color="black" />
              <Text>Profile</Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    backgroundColor: "#ffffff",
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigator;
