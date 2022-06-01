import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import ProfileScreen from "../../screens/ProfileScreen";
import EditProfileScreen from "../../screens/EditProfileScreen";
import { COLORS } from "../../constants/colors";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? COLORS.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) =>({
          title: "Perfil",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Editar")}>
              <Ionicons
                name="md-add"
                size={24}
                color={Platform.OS === "android" ? "white" : COLORS.DARK_SIENNA}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Editar"
        component={EditProfileScreen}
        options={{ title: "Editar perfil" }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
