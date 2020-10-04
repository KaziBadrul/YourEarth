import React from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";

import Header from "./../styles/Header";
import Neomorph from "./../styles/Neomorph";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Steps = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./../../assets/neobackground.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <Header navigation={navigation}>Take Steps!</Header>
      <ScrollView>
        <Text
          style={{
            textAlign: "center",
            marginTop: 15,
            marginBottom: 10,
            fontFamily: "UbuntuBold",
            fontSize: 25,
          }}
        >
          Plant Trees and Earn Badges!
        </Text>

        {/* ANCHOR HELP PLANT  */}
        <TouchableOpacity
          style={{ margin: 10, elevation: 1 }}
          onPress={() => navigation.navigate("HelpPlant")}
        >
          <Neomorph>
            <View style={{ backgroundColor: "#006400", borderRadius: 20 }}>
              <Entypo
                name="tree"
                size={60}
                color="white"
                style={{ position: "absolute", marginVertical: 40, left: 25 }}
              />
              <Text
                style={{
                  padding: 20,
                  marginVertical: 40,
                  fontSize: 25,
                  fontFamily: "Ubuntu",
                  color: "white",
                  left: 90,
                }}
              >
                Help us plant a tree!
              </Text>
            </View>
          </Neomorph>
        </TouchableOpacity>
        <View style={{ top: -40, elevation: 0, margin: 10 }}>
          <Neomorph>
            <View
              style={{
                padding: 20,
                paddingTop: 40,
                backgroundColor: "#e0e5ec",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <Text style={{ textAlign: "center", fontFamily: "UbuntuLight" }}>
                Donate 1$ to plant a tree. Click to proceed.
              </Text>
            </View>
          </Neomorph>
        </View>

        {/* ANCHOR PLANT YOURSELF  */}
        <TouchableOpacity style={{ margin: 10, elevation: 1 }}>
          <Neomorph>
            <View style={{ backgroundColor: "#32CD32", borderRadius: 20 }}>
              <MaterialCommunityIcons
                name="tree-outline"
                size={60}
                color="white"
                style={{ position: "absolute", marginVertical: 40, left: 25 }}
              />
              <Text
                style={{
                  padding: 20,
                  marginVertical: 40,
                  fontSize: 25,
                  fontFamily: "Ubuntu",
                  color: "white",
                  left: 90,
                }}
              >
                Plant yourself!
              </Text>
            </View>
          </Neomorph>
        </TouchableOpacity>
        <View style={{ top: -40, elevation: 0, margin: 10 }}>
          <Neomorph>
            <View
              style={{
                padding: 20,
                paddingTop: 40,
                backgroundColor: "#e0e5ec",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <Text style={{ textAlign: "center", fontFamily: "UbuntuLight" }}>
                See what you need to do it yourself.
              </Text>
            </View>
          </Neomorph>
        </View>

        {/* ANCHOR DONATE NGOS */}
        <TouchableOpacity style={{ margin: 10, elevation: 1 }}>
          <Neomorph>
            <View style={{ backgroundColor: "#008b8b", borderRadius: 20 }}>
              <FontAwesome5
                name="hands-helping"
                size={60}
                color="white"
                style={{ position: "absolute", marginVertical: 40, left: 25 }}
              />
              <Text
                style={{
                  padding: 20,
                  marginVertical: 40,
                  fontSize: 25,
                  fontFamily: "Ubuntu",
                  color: "white",
                  left: 90,
                }}
              >
                Help the volunteers!
              </Text>
            </View>
          </Neomorph>
        </TouchableOpacity>
        <View style={{ top: -40, elevation: 0, margin: 10 }}>
          <Neomorph>
            <View
              style={{
                padding: 20,
                paddingTop: 40,
                backgroundColor: "#e0e5ec",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <Text style={{ textAlign: "center", fontFamily: "UbuntuLight" }}>
                Donate to NGOs. Click to proceed.
              </Text>
            </View>
          </Neomorph>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Steps;
