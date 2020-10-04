import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { defStyle } from "./styles/styles";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import LoadingScreen from "./LoadingScreen";
import { getUsername } from "./Login";
import { SafeAreaView } from "react-native-safe-area-context";

const GetLocation = ({ navigation }) => {
  const [givenLocation, setGivenLocation] = useState("");
  const [loading, setLoading] = useState(false);

  function SearchHandler() {
    if (givenLocation == "") {
      alert("Please type in a location!");
      return;
    }
    fetch(
      "http://www.mapquestapi.com/geocoding/v1/address?key=tUjvjYvLkMjGMhXUqOlVpd18GgR8ztER&location=" +
        givenLocation
    )
      .then((latLongObj) => {
        setLoading(true);
        return latLongObj.json();
      })
      .then((data) => {
        setLoading(false);
        const city = data.results[0].locations[0].adminArea5;
        const country = data.results[0].locations[0].adminArea1;
        const latLng = data.results[0].locations[0].latLng;
        navigation.navigate("Home", {
          city,
          country,
          latLng,
        });
      })
      .catch((error) => alert(error.message));
  }

  return (
    <View style={style.locationView}>
      {/* <LinearGradient
        colors={["#43cea2", "#185a9d"]}
        style={defStyle.linearGradient}
      /> */}

      {loading ? (
        <LoadingScreen />
      ) : (
        <ImageBackground
          source={require("./../assets/background.png")}
          style={{ width: "100%", height: "100%", justifyContent: "center" }}
        >
          <Text
            style={{
              position: "absolute",
              bottom: 0,
              left: 2,
              fontFamily: "UbuntuLight",
              color: "white",
              fontSize: 15,
            }}
            onPress={() => navigation.goBack()}
          >
            Back
          </Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={style.locationHeader}>Welcome, {getUsername}!</Text>
            <TextInput
              style={[style.locationTextField, defStyle.shadow]}
              onChangeText={(event) => setGivenLocation(event)}
              placeholder="Your Location"
              value={givenLocation}
            />
            <TouchableOpacity
              style={[style.locationButton, defStyle.shadow]}
              onPress={(event) => SearchHandler()}
            >
              <Text style={style.locationButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  locationView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  locationHeader: {
    fontFamily: "UbuntuBold",
    fontSize: 30,
    color: "#fff",
  },
  locationTextField: {
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: "Ubuntu",
    width: 300,
    backgroundColor: "#fff",
    height: 40,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 25,
  },
  locationButton: {
    padding: 7,
    width: 200,
    marginTop: 4,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  locationButtonText: {
    textAlign: "center",
    fontFamily: "Ubuntu",
  },
});

export default GetLocation;
