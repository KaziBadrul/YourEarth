import React, { useState } from "react";
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
let getUsername;
export { getUsername };

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  function SearchHandler() {
    if (user == "") {
      alert("Please type in a username!");
      return;
    }
    getUsername = user;
    navigation.navigate("GetLocation");
  }

  return (
    <View style={style.locationView}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ImageBackground
          source={require("./../assets/userbackground.png")}
          style={{ width: "100%", height: "100%", justifyContent: "center" }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={style.locationHeader}>Username</Text>
            <TextInput
              style={[style.locationTextField, defStyle.shadow]}
              onChangeText={(event) => setUser(event)}
              placeholder="Felix Kjellberg"
              value={user}
            />
            <TouchableOpacity
              style={[style.locationButton, defStyle.shadow]}
              onPress={(event) => SearchHandler()}
            >
              <Text style={style.locationButtonText}>Login</Text>
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

export default Login;
