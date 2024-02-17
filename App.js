import React from "react";
import { Text, View,ScrollView,Image,StyleSheet,TextInput } from "react-native";
import icon from "./assets/icon.png";

const App = () => {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 40, fontWeight: "bold" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
      </Text>
      <Image source={icon}
       style={{width: 100, height: 100, backgroundColor: "red"}} 
       resizeMode="contain"/>
       <TextInput placeholder ="what's your name"/>
    </View>
    </ScrollView>
  );
};
export default App; 