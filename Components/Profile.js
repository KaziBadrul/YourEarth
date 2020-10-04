import React from "react";
import { Text, View, ImageBackground, Image } from "react-native";

import Header from "./styles/Header";
import Neomorph from "./styles/Neomorph";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { getUsername } from "./Login";
import { ScrollView } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./../assets/neobackground.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <Header navigation={navigation}>Profile</Header>

      {/* ANCHOR PROFILE HEADER */}
      <ScrollView>
        <View style={{ margin: 10 }}>
          <Neomorph>
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("./../assets/User_Circle.png")}
                style={{ width: 100, height: 100 }}
              />
              <Text
                style={{ fontFamily: "Ubuntu", fontSize: 30, marginLeft: 20 }}
              >
                {getUsername}
              </Text>
              <Text
                style={{ top: 6, marginLeft: 5, fontFamily: "UbuntuLight" }}
              >
                Contributor 🌱
              </Text>
              <AntDesign
                name="edit"
                size={24}
                color="black"
                style={{
                  top: 10,
                  right: 10,
                  position: "absolute",
                  opacity: 0.5,
                }}
              />
              <Text style={{ position: "absolute", bottom: 0, left: 35 }}>
                Rank: 12th
              </Text>
            </View>
          </Neomorph>
        </View>

        {/* ANCHOR ACTIVITIES */}
        <View style={{ margin: 10, elevation: 1 }}>
          <Neomorph>
            <View
              style={{
                padding: 20,
              }}
            >
              <Text style={{ fontFamily: "UbuntuBold", fontSize: 20 }}>
                Activities
              </Text>
              <Ionicons
                name="ios-arrow-down"
                size={24}
                color="black"
                style={{
                  position: "absolute",
                  opacity: 0.5,
                  right: 20,
                  top: 20,
                }}
              />
            </View>
          </Neomorph>
        </View>
        <View style={{ margin: 10, elevation: 0, top: -50 }}>
          <Neomorph>
            <View style={{ padding: 20, height: 220 }}>
              <Text
                style={{
                  fontFamily: "UbuntuLight",
                  fontSize: 20,
                  top: 25,
                  marginBottom: 15,
                }}
              >
                Earned a badge (Contributor 🌱)!
              </Text>
              <Text
                style={{
                  fontFamily: "UbuntuLight",
                  fontSize: 20,
                  top: 25,
                  marginBottom: 15,
                }}
              >
                Planted 2 trees!
              </Text>
              <Text
                style={{
                  fontFamily: "UbuntuLight",
                  fontSize: 20,
                  top: 25,
                  marginBottom: 15,
                }}
              >
                Donated 5$ to "Nibir Foundation"!
              </Text>
              <Text
                style={{
                  fontFamily: "UbuntuLight",
                  fontSize: 20,
                  top: 25,
                  marginBottom: 10,
                }}
              >
                Earned a badge (Donator 💰)!
              </Text>
              <Text
                style={{
                  fontFamily: "UbuntuLight",
                  fontSize: 15,
                  top: 25,
                  opacity: 0.5,
                }}
              >
                See more...
              </Text>
            </View>
          </Neomorph>
        </View>

        {/* ANCHOR BADGES */}
        <View style={{ top: -40 }}>
          <View style={{ margin: 10, elevation: 1 }}>
            <Neomorph>
              <View
                style={{
                  padding: 20,
                }}
              >
                <Text style={{ fontFamily: "UbuntuBold", fontSize: 20 }}>
                  Badges
                </Text>
                <Ionicons
                  name="ios-arrow-down"
                  size={24}
                  color="black"
                  style={{
                    position: "absolute",
                    opacity: 0.5,
                    right: 20,
                    top: 20,
                  }}
                />
              </View>
            </Neomorph>
          </View>
          <View style={{ margin: 10, elevation: 0, top: -50 }}>
            <Neomorph>
              <View style={{ padding: 20, height: 100 }}>
                <View style={{ top: 30, flexDirection: "row" }}>
                  <SimpleLineIcons
                    name="badge"
                    size={30}
                    color="green"
                    style={{ marginRight: 30 }}
                  />
                  <FontAwesome
                    name="money"
                    size={30}
                    color="#4d7902"
                    style={{ marginRight: 30 }}
                  />
                  <FontAwesome5
                    name="hand-holding-usd"
                    size={30}
                    style={{ marginRight: 30 }}
                    color="#ab0a0a"
                  />
                  <FontAwesome5
                    name="hand-holding-heart"
                    size={30}
                    color="#ab0a0a"
                    style={{ marginRight: 30 }}
                  />
                  <MaterialIcons name="fiber-new" size={30} color="#413cab" />
                </View>
              </View>
            </Neomorph>
            <View>
              <View style={{ top: 20 }}>
                <Neomorph>
                  <View
                    style={{
                      padding: 15,
                      backgroundColor: "#3b5998",
                      borderRadius: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Ubuntu",
                        fontSize: 20,
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      Share on Facebook
                    </Text>
                  </View>
                </Neomorph>
              </View>
              <View style={{ top: 30 }}>
                <Neomorph>
                  <View
                    style={{
                      padding: 15,
                      backgroundColor: "#00acee",
                      borderRadius: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Ubuntu",
                        fontSize: 20,
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      Share on Twitter
                    </Text>
                  </View>
                </Neomorph>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
