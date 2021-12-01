import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from "react";

import { 
  Text, 
  View, 
  Button,
  StyleSheet,
  SafeAreaView,
  useColorScheme
 } from "react-native"

 import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: "Welcome"}}
        />
        <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return(
     <View styles={styles.container}>
       <Text>Navegamos para segunda tela from {route.params.name}</Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return(
    <SafeAreaView>
       <View>
         <Text> Hello word </Text>
         <Button
          title="Go"
          onPress={() =>
            navigation.navigation('Profile', { name: 'Jane' })
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
},  
  topBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
    height: 80,
  backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;