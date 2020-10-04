import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Neomorph from "./../styles/Neomorph";

function EventCatagory({ children, country, category, navigation }) {
  function EventPressed() {
    navigation.navigate("EventNews", { country: country, category: category });
  }

  return (
    <View style={{ margin: 15, top: 10 }}>
      <Neomorph>
        <TouchableOpacity onPress={() => EventPressed()}>
          <Text
            style={{
              padding: 15,
              fontSize: 20,
              fontFamily: "Ubuntu",
              textAlign: "center",
            }}
          >
            {children}
          </Text>
        </TouchableOpacity>
      </Neomorph>
    </View>
  );
}

export default EventCatagory;
