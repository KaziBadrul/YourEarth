import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { defStyle } from "./styles/styles";

function LoadingScreen() {
  return (
    <View style={defStyle.center}>
      <LinearGradient
        colors={["#43cea2", "#185a9d"]}
        style={defStyle.linearGradient}
      />
      <ActivityIndicator size="large" color="#fff" style={defStyle.center} />
    </View>
  );
}

export default LoadingScreen;
