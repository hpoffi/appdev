import React from "react";
import styles from "./styles";
import {
  View,
  Image,
  Text,Pressable,onpress
} from "react-native";
import PropTypes from 'prop-types';


const ImageOption = ({image, text,isSelected,onpress}) => {

  return (
    <Pressable
     onPress={() => console.warn(text)}
     style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}>
      <Image source={{ uri: image }}
        resizeMode="contain"
        style={styles.optionImage} />
      <Text styles={isSelected? styles.optionText.optionText : styles.selectedText}>{text.toUpperCase()}</Text>
    
    </Pressable>
  );
};
  ImageOption.prototype={
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onpress: PropTypes.func,
  };
  ImageOption.defaultProps ={
    text: "Default",
    isSelected: false,
    onpress:() => {}

  }


export default ImageOption;