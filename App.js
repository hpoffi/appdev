import React, { useState } from "react";
import {Alert, Text,View} from "react-native";
import ImageOption from "./src/components/ImageOption/ImageOption";
import styles from "./App.styles";
//import question from "./assets/data/oneQuestionWithOption";
import Button from "./src/components/Button";
import question from "./assets/data/imageMulatipleChoiceQuestions"



const App = () => {
  const [selected, setSelected] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(question[0]);
  const onButtonPress = () =>{
    if(selected.correct){
      Alert.alert("Correct!");}
      else{
        Alert.alert("Wroooong");
      }
    };
  

  return (
    <View style={styles.root}>
      <Text style={styles.title}>
        {question.question}
      </Text>

      <View style={styles.optionsContainer}>
        {selectedQuestion.options.map((option) =>(
         <ImageOption
          key={option.id} 
          image={option.image} 
          text={option.text}
          isSelected={selected?.id === option.id}
          onpress={() =>setSelected(option)}
          />
          ))}

      </View>
      <Button text="click me" onPress={onButtonPress} disabled={!selected}/>
    </View>

  );
};
export default App; 