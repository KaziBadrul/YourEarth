import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { defStyle } from "./styles/styles";

import Neomorph from "./styles/Neomorph";
import Header from "./styles/Header";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import LoadingScreen from "./LoadingScreen";
import EventButtons from "./EventButtons";
import { useLinkProps } from "@react-navigation/native";

var globalCountryDetails;
var globalCityName;
var globalLatLng;
function Home({ route, navigation }) {
  const [countryDetail, setCountryDetail] = useState(null);
  const mapUrl =
    "https://www.countryflags.io/" + route.params.country + "/flat/64.png";

  const GetCountryDetail = () => {
    fetch("https://restcountries.eu/rest/v2/alpha/" + route.params.country)
      .then((data) => data.json())
      .then((data) => {
        globalCountryDetails = data;
        globalLatLng = route.params.latLng;
        globalCityName = route.params.city;
        return setCountryDetail(data);
      })
      .catch((error) => alert(error.message));
  };

  function populationFormatter(num) {
    var units = ["M", "B", "T", "Q"];
    var unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
    var r = unit % 3;
    var x = Math.abs(Number(num)) / Number("1.0e+" + (unit - r)).toFixed(2);
    return x.toFixed(2) + " " + units[Math.floor(unit / 3) - 2];
  }

  useEffect(GetCountryDetail, []);

  return (
    <>
      {countryDetail == null ? (
        <LoadingScreen />
      ) : (
        <ImageBackground
          source={require("./../assets/neobackground.png")}
          style={{ width: "100%", height: "100%", justifyContent: "center" }}
        >
          <View style={{ flex: 10 }}>
            <Header navigation={navigation}>YourEarth</Header>
            <ScrollView style={{ flex: 1, top: 20 }}>
              {/* ANCHOR COUNTRY DETAILS VIEW */}
              <Neomorph>
                <View style={[style.mapView, defStyle.shadow]}>
                  <Image
                    source={{
                      uri: mapUrl,
                    }}
                    style={style.map}
                  />
                  <View style={style.mapTextView}>
                    <Text style={style.mapText}>
                      {route.params.city
                        ? route.params.city
                        : countryDetail.capital}
                    </Text>
                    <Text style={style.mapTextBold}>{countryDetail.name}</Text>
                  </View>
                </View>
              </Neomorph>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Neomorph>
                  <View
                    style={{
                      paddingHorizontal: 15,
                      flexDirection: "row",
                      alignItems: "center",
                      width: 180,
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons
                      name="ios-people"
                      size={40}
                      color="black"
                      style={{ opacity: 0.25 }}
                    />
                    <Text style={style.countryDetailPopulation}>
                      {populationFormatter(countryDetail.population)}
                    </Text>
                  </View>
                </Neomorph>
                <Neomorph>
                  <View
                    style={{
                      paddingHorizontal: 15,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 180,
                    }}
                  >
                    <MaterialIcons
                      name="map"
                      size={36}
                      color="black"
                      style={{ opacity: 0.25 }}
                    />
                    <Text style={style.countryDetailPopulation}>
                      {countryDetail.area}km
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: "UbuntuLight",
                        lineHeight: 18,
                      }}
                    >
                      2
                    </Text>
                  </View>
                </Neomorph>
              </View>
              {/*ANCHOR EVENT BUTTON VIEW  */}
              <View
                style={{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  marginVertical: 25,
                  marginHorizontal: 7,
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                {/* #1  */}
                <EventButtons
                  text="Natural Events"
                  clickfunc="natEvent"
                  navigation={navigation}
                >
                  <AntDesign
                    name="exclamationcircleo"
                    size={60}
                    color="black"
                  />
                </EventButtons>

                {/* #2  */}
                <EventButtons
                  text="Weather"
                  clickfunc="weather"
                  navigation={navigation}
                >
                  <MaterialCommunityIcons
                    name="weather-cloudy"
                    size={60}
                    color="black"
                  />
                </EventButtons>

                {/* #3 */}
                <EventButtons
                  text="Pollution"
                  clickfunc="pollution"
                  navigation={navigation}
                >
                  <Entypo name="air" size={60} color="black" />
                </EventButtons>

                {/* #4 */}
                <EventButtons
                  text="Profile"
                  clickfunc="profile"
                  navigation={navigation}
                >
                  <AntDesign
                    name="user"
                    size={60}
                    color="black"
                    navigation={navigation}
                  />
                </EventButtons>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      )}
    </>
  );
}

const style = StyleSheet.create({
  mapView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 6,
    alignItems: "center",
    margin: 7,
  },
  map: {
    width: 100,
    height: 100,
  },
  mapText: {
    fontSize: 20,
    fontFamily: "Ubuntu",
  },
  mapTextBold: {
    fontSize: 25,
    fontFamily: "UbuntuBold",
  },
  countryDetailPopulation: {
    fontSize: 20,
    fontFamily: "Ubuntu",
  },
  mapTextView: {
    left: 10,
  },
  eventButtonStyle: {
    fontFamily: "Ubuntu",
    fontSize: 18,
    top: 20,
  },
});

export default Home;
export { globalCountryDetails };
export { globalLatLng };
export { globalCityName };
