import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Header from "./styles/Header";
import LoadingScreen from "./LoadingScreen";
import Neomorph from "./styles/Neomorph";

import { globalCityName, globalCountryDetails } from "./Home";

function Weather({ navigation }) {
  const [weatherData, setWeatherData] = useState();
  function GetWeather() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        globalCityName ? globalCityName : globalCountryDetails.capital
      },${
        globalCountryDetails.name
      }&appid=115de01dbfcd3170d63c6f1a8e6a15a0&units=metric`
    )
      .then((data) => data.json())
      .then((data) => setWeatherData(data))
      .catch((err) => {
        alert(err.message);
      });
  }
  useEffect(GetWeather, []);
  return weatherData == null ? (
    <LoadingScreen />
  ) : (
    <View style={{ backgroundColor: "#e0e5ec", flex: 1 }}>
      <Header navigation={navigation}>Weather</Header>
      <Text
        style={{
          textAlign: "center",
          marginVertical: 15,
          fontSize: 25,
          fontFamily: "UbuntuBold",
        }}
      >
        {globalCityName ? globalCityName : globalCountryDetails.capital},{" "}
        {globalCountryDetails.name}
      </Text>

      <View style={{ marginHorizontal: 70, marginBottom: 20 }}>
        <Neomorph>
          <View style={{ alignItems: "center", padding: 25 }}>
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
                width: 120,
                height: 120,
              }}
            />
            <Text style={{ fontFamily: "UbuntuBold", fontSize: 40 }}>
              {weatherData.weather[0].main}
            </Text>
            <Text style={{ fontFamily: "UbuntuLight", fontSize: 20 }}>
              {weatherData.weather[0].description}
            </Text>
          </View>
        </Neomorph>
      </View>
      <ScrollView>
        <View style={{ margin: 15 }}>
          <Text
            style={{
              marginVertical: 10,
              fontFamily: "UbuntuBold",
              fontSize: 25,
              textAlign: "center",
            }}
          >
            Temperature
          </Text>
          <View style={style.viewTopic}>
            <Neomorph>
              <View style={style.viewTopic}>
                <Text style={style.textTopic}>Current</Text>
                <Text style={style.textDesc}>{weatherData.main.temp}°C</Text>
              </View>
              <View style={style.viewTopic}>
                <Text style={style.textTopic}>Feels Like</Text>
                <Text style={style.textDesc}>
                  {weatherData.main.feels_like}°C
                </Text>
              </View>
              <View style={style.viewTopic}>
                <Text style={style.textTopic}>Minimum Today</Text>
                <Text style={style.textDesc}>
                  {weatherData.main.temp_min}°C
                </Text>
              </View>
              <View style={style.viewTopic}>
                <Text style={style.textTopic}>Maximum Today</Text>
                <Text style={style.textDesc}>
                  {weatherData.main.temp_max}°C
                </Text>
              </View>
            </Neomorph>
          </View>
        </View>
        <View style={{ margin: 15 }}>
          <Text
            style={{
              marginVertical: 10,
              fontFamily: "UbuntuBold",
              fontSize: 25,
              textAlign: "center",
            }}
          >
            Wind
          </Text>
          <View style={style.viewTopic}>
            <Neomorph>
              <View style={style.viewTopic}>
                <Text style={style.textTopic}>Speed</Text>
                <Text style={style.textDesc}>{weatherData.wind.speed}m/s</Text>
              </View>
              <View style={style.viewTopic}>
                <Text style={style.textTopic}>Degree</Text>
                <Text style={style.textDesc}>{weatherData.wind.deg}°</Text>
              </View>
            </Neomorph>
          </View>
        </View>
        <View style={{ margin: 15 }}>
          <Text
            style={{
              marginVertical: 10,
              fontFamily: "UbuntuBold",
              fontSize: 25,
              textAlign: "center",
            }}
          >
            Humidity and Pressure
          </Text>
          <View style={style.viewTopic}>
            <Neomorph>
              <View style={style.viewTopic}>
                <Text style={style.textTopic}>Humidity</Text>
                <Text style={style.textDesc}>{weatherData.main.humidity}%</Text>
              </View>
              <View style={style.viewTopic}>
                <Text style={style.textTopic}>Pressure</Text>
                <Text style={style.textDesc}>
                  {weatherData.main.pressure}hPa
                </Text>
              </View>
              <View style={style.viewTopic}>
                <Text style={style.textTopic}>Visibility</Text>
                <Text style={style.textDesc}>{weatherData.visibility}m</Text>
              </View>
            </Neomorph>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  textTopic: {
    fontFamily: "UbuntuBold",
    fontSize: 20,
    textAlign: "center",
    bottom: 10,
  },
  textDesc: {
    fontFamily: "Ubuntu",
    fontSize: 25,
    textAlign: "center",
  },
  viewTopic: {
    padding: 20,
  },
});

export default Weather;
