import React, { useState } from "react";
import { Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Header from "./styles/Header";
import Neomorph from "./styles/Neomorph";

const HelpPlant = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const TreePlant = () => {
    navigation.navigate("Planted");
  };
  return (
    <View style={{ backgroundColor: "#e0e5ec", flex: 1 }}>
      <Header navigation={navigation}>Help Us Plant!</Header>
      <View style={{ margin: 15, justifyContent: "center" }}>
        <Neomorph>
          <View style={{ padding: 15 }}>
            <View>
              <Text style={{ margin: 5 }}>Card number</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 20,
                  margin: 5,
                  padding: 10,
                }}
              />
            </View>
            <View>
              <Text style={{ margin: 5 }}>Expire date</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 20,
                  margin: 5,
                  padding: 10,
                }}
              />
            </View>
            <View>
              <Text style={{ margin: 5 }}>CVC</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 20,
                  margin: 5,
                  padding: 10,
                }}
              />
            </View>
            <View>
              <Text style={{ margin: 5 }}>Cardholder Name</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 20,
                  margin: 5,
                  padding: 10,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <Text style={{ fontSize: 18 }}>
                Plant a tree in your local area.
              </Text>
            </View>
            <Text style={{ opacity: 0.5, textAlign: "center", fontSize: 15 }}>
              (If any volunteer is not found, we will plant a tree randomly.)
            </Text>
          </View>
        </Neomorph>
        <View style={{ marginTop: 30 }}>
          <Neomorph>
            <TouchableOpacity onPress={() => TreePlant()}>
              <View
                style={{
                  padding: 20,
                  justifyContent: "center",
                  backgroundColor: "#42b883",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "UbuntuBold",
                    fontSize: 20,
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Plant!
                </Text>
              </View>
            </TouchableOpacity>
          </Neomorph>
        </View>
      </View>
    </View>
  );
};

export default HelpPlant;
