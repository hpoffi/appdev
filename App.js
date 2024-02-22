import React, { useState } from "react";
import {Text,View} from "react-native";
import ImageOption from "./src/components/ImageOption/ImageOption";
import icon from "./assets/icon.png";
import styles from "./App.styles";
import BaseButton from "./src/components/BaseButton";
import question from "./assets/data/oneQuestionWithOption";


const App = () => {
  //const [value, setvalue] = useState();
  const [selected, setSelected] = useState(null);
  //const origin=[0,1,2,3];
  //const doubled = origin.map((value) => value*2);
  //console.log(doubled);
  const onButtonPress = () =>{
    console.warn("Pressed");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>
        {question.question}
      </Text>

      <View style={styles.optionsContainer}>
        {question.options.map((option) =>(
         <ImageOption
          key={option.id} 
          image={option.image} 
          text={option.text}
          isSelected={selected?.id === option.id}
          onPress={() =>setSelected(option)}
          />
          ))}

      </View>
      <BaseButton title="Continue" onPress={onButtonPress} disabled={!selected}/>
    </View>

  );
};
export default App; 