import React, { useEffect } from "react";
import { ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getUsername } from "./Login";

const Planted = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./../assets/background.png")}
      style={{ width: "100%", height: "100%", justifyContent: "center" }}
    >
      <Text
        style={{
          textAlign: "center",
          fontFamily: "UbuntuBold",
          fontSize: 30,
          color: "white",
        }}
      >
        A tree is being planted!
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "UbuntuBold",
          fontSize: 30,
          color: "white",
        }}
      >
        Thank you {getUsername}!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          margin: 10,
          marginHorizontal: 70,
          borderRadius: 20,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "UbuntuBold",
            fontSize: 30,
            color: "#42b883",
          }}
        >
          Go Back
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Planted;
