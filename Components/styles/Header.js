import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function Header(props) {
  function GoBack() {
    props.navigation.pop();
  }
  return (
    <View style={{ backgroundColor: props.color || "#42b883", height: 85 }}>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 38,
          alignItems: "center",
          // justifyContent: "center",
          // top: 40,
          // flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => GoBack()}
          style={{
            position: "absolute",
            left: 15,
            color: "white",
            padding: 4,
          }}
        >
          <Ionicons name="ios-arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text
          style={{ fontFamily: "UbuntuBold", fontSize: 25, color: "#edfaf7" }}
        >
          {props.children}
        </Text>
      </View>
    </View>
  );
}

export default Header;
