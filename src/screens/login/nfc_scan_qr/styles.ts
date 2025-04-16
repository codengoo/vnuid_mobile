import { Color, space } from "@src/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject, // full screen
      justifyContent: 'center',
      alignItems: 'center',
    },
    squareFrame: {
      width: space(250),
      height: space(250),
      borderWidth: space(2),
      borderColor: Color.white,
      borderRadius: space(20),
      boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)',
    },
    instructionText: {
      marginTop: 20,
      color: 'white',
      fontSize: 16,
    },
  });