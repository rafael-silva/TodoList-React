import React, { useState } from "react";
import { 
    Text, 
    View,
    StyleSheet,
    Linking
} from "react-native"
   
const ProfileScreen = ({ navigation, route }) => {
  const url="https://google.com";
  return(
       <View style={styles.container}>
         <Text>Welcome</Text>
         <Text>My name is {route.params.name}</Text>
         <Text>I am 30 years old</Text>
         <Text>I am iOS developer</Text>
         <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL(url)}>
              Github 
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
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
export default ProfileScreen
  