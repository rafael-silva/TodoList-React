import React, { useState } from "react";

import { 
    Text, 
    View, 
    Button,
    SafeAreaView,
    useColorScheme
} from "react-native"
  
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = (props) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return(
      <SafeAreaView>
         <View>
           <Text> Hello word </Text>
           <Button
            title="Profile"
            onPress={() =>
              props.navigation.navigate('Profile', { name: 'Rafael' })
            }
          />
          <Button
            title="Favorite movies"
            onPress={() =>
              props.navigation.navigate('Movies')
            }
          />
        </View>
      </SafeAreaView>
    );
};

export default HomeScreen