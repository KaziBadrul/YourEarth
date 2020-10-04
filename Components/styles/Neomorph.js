import React from "react";
import { View, StyleSheet } from "react-native";

function Neomorph(props) {
  return (
    <View
      style={{
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowColor: "#a3b1c6",
        shadowRadius: 20,
        borderRadius: 20,
        backgroundColor: "#e0e5ec",
        elevation: 10,
      }}
    >
      {props.children}
    </View>
  );
}

export default Neomorph;
