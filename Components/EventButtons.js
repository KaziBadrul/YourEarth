import React from "react";
import Neomorph from "./styles/Neomorph";

import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Weather from "./Weather";

function EventButtons({ navigation, text, children, clickfunc }) {
  function natEvent() {
    navigation.navigate("NaturalEvents");
  }
  function weather() {
    navigation.navigate("Weather");
  }
  function pollution() {
    navigation.navigate("Pollution");
  }
  function profile() {
    navigation.navigate("Profile");
  }

  return (
    <View style={{ marginBottom: 20 }}>
      <Neomorph>
        <TouchableOpacity
          style={{
            width: 170,
            height: 170,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            if (clickfunc == "natEvent") {
              natEvent();
            } else if (clickfunc == "weather") {
              weather();
            } else if (clickfunc == "pollution") {
              pollution();
            } else if (clickfunc == "profile") {
              profile();
            }
          }}
        >
          {children}
          <Text style={{ fontFamily: "Ubuntu", fontSize: 18, top: 25 }}>
            {text}
          </Text>
        </TouchableOpacity>
      </Neomorph>
    </View>
  );
}

export default EventButtons;
