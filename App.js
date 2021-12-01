import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from "react";
import HomeScreen from "./src/views/HomeScreen";
import MoviesScreen from "./src/views/MoviesScreen";
import ProfileScreen from "./src/views/ProfileScreen";

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="Movies" component={MoviesScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;