import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import styles from "./styles";
import PropTypes from "prop-types";

const BaseButton = ({ onPress, text = "Submit", disabled}) => {
    return (
        <Pressable 
        style={[styles.container, disabled ? styles.disabledContainer : {}]} 
        onPress={onPress}
        disabled={disabled}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    );
};

Button.propTypes ={
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
};
Button.defaultProps = {
    onPress: () => {},
    disabled: false,
};

export default Button