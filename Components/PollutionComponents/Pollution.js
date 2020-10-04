import React, { useEffect, useState, version } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../styles/Header";

import { globalCityName } from "./../Home";
import LoadingScreen from "./../LoadingScreen";
import Neomorph from "./../styles/Neomorph";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Pollution = ({ navigation }) => {
  const [airData, setAirData] = useState();
  const GetPollution = () => {
    GetAirPollution();
  };
  const GetAirPollution = () => {
    fetch(
      `https://api.waqi.info/feed/${
        globalCityName ? globalCityName : globalCountryDetails.name
      }/?token=c17b3bf69ee7a6056e66626ab2644b73f28864c6`
    )
      .then((data) => data.json())
      .then((data) => setAirData(data.data.aqi))
      .catch((err) => alert(err.message));
  };
  useEffect(GetPollution, []);
  let aqiBackColor;
  let aqiLabel;
  let aqiHealth;
  if (airData < 50) {
    aqiBackColor = "#5af745";
    aqiLabel = "Good";
    aqiHealth =
      "Air quality is considered satisfactory, and air pollution poses little or no risk";
  } else if (airData < 100) {
    aqiBackColor = "#f7f745";
    aqiLabel = "Moderate";
    aqiHealth =
      "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
  } else if (airData < 150) {
    aqiBackColor = "#f7aa45";
    aqiLabel = "Unhealthy";
    aqiHealth =
      "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
  } else if (airData < 200) {
    aqiBackColor = "#f74545";
    aqiLabel = "Unhealthy";
    aqiHealth =
      "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects";
  } else if (airData < 250) {
    aqiBackColor = "#b645f7";
    aqiLabel = "Very Unhealthy";
    aqiHealth =
      "Health warnings of emergency conditions. The entire population is more likely to be affected.";
  } else if (airData < 300) {
    aqiBackColor = "#ba4e4e";
    aqiLabel = "Hazardous";
    aqiHealth =
      "Health alert: everyone may experience more serious health effects";
  }

  const style = StyleSheet.create({
    aqiBack: {
      backgroundColor: aqiBackColor,
      borderRadius: 20,
    },
  });

  return airData == null ? (
    <LoadingScreen />
  ) : (
    <View style={{ backgroundColor: "#e0e5ec", flex: 1 }}>
      <Header navigation={navigation}>Pollution</Header>
      <View style={{ margin: 25, marginHorizontal: 75 }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "UbuntuBold",
            bottom: 10,
            fontSize: 25,
          }}
        >
          Air Quality Index
        </Text>
        <Neomorph>
          <View style={[{ alignItems: "center" }, style.aqiBack]}>
            <Text style={[{ fontFamily: "Ubuntu", fontSize: 75 }]}>
              {airData}
            </Text>
            <Text
              style={{ fontFamily: "UbuntuBold", fontSize: 30, padding: 5 }}
            >
              {aqiLabel}
            </Text>
          </View>
        </Neomorph>
        <View style={{ marginVertical: 15 }}>
          <Neomorph>
            <TouchableOpacity
              style={style.aqiBack}
              onPress={() => navigation.navigate("Steps")}
            >
              <EvilIcons
                name="exclamation"
                size={35}
                color="black"
                style={{ position: "absolute", margin: 8 }}
              />
              <Text
                style={{
                  fontFamily: "Ubuntu",
                  fontSize: 25,
                  padding: 5,
                  textAlign: "center",
                }}
              >
                Take Steps!
              </Text>
            </TouchableOpacity>
          </Neomorph>
        </View>
      </View>
      <Text
        style={{
          fontSize: 25,
          padding: 10,
          textAlign: "center",
          color: "black",
        }}
      >
        {aqiHealth}
      </Text>
      <ScrollView style={{ margin: 15 }}>
        <DonatePlate deed="planted a tree">Ayesha</DonatePlate>
        <DonatePlate deed="planted a tree">Sakib</DonatePlate>
        <DonatePlate deed="earned a badge">Tasnimul Hasan</DonatePlate>
        <DonatePlate deed="planted 3 trees">Tasnimul Hasan</DonatePlate>
        <DonatePlate deed="donated 5$">GamerVague</DonatePlate>
        <DonatePlate deed="planted a tree">Jarif Faisal</DonatePlate>
        <DonatePlate deed="donated 3$">Al-Qayyum</DonatePlate>
        <DonatePlate deed="planted a tree">Arif Hasan</DonatePlate>
        <DonatePlate deed="earned a badge">MrBeastBD</DonatePlate>
        <DonatePlate deed="donated 15$">MrBeastBD</DonatePlate>
      </ScrollView>
    </View>
  );
};

const DonatePlate = ({ children, deed }) => {
  return (
    <View style={{ margin: 5 }}>
      <Neomorph>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Text style={{ fontFamily: "UbuntuBold", fontSize: 20 }}>
            {children}{" "}
          </Text>
          <Text style={{ fontFamily: "Ubuntu", fontSize: 18 }}>{deed}!</Text>
        </View>
      </Neomorph>
    </View>
  );
};

export default Pollution;
