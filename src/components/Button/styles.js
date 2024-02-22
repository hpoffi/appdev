import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        height: 100,
        width: '100%',
        padding: 20,
        marginVertical: 10,
        
        alignItems: 'center',
        alignSelf: "stretch",
        justifyContent: "center",

        borderRadius:5,
        borderBottomWidth:5,
        borderColor: "#57A600"
    },
    disabledContainer:{
        backgroundColor:"lightgray",
        bordercolor: "grey",
    },

    text: {
        fontSize:20,
        color: "white",
        fontWeight: "bold",
        
       
    }
});

export default styles;

