import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "stretch",
    paddingTop: 48,
  },

  optionsContainer: {
    width: "100%",
    flex: 1,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",


  },
});

export default styles;