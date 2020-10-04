import "react-native-gesture-handler";
import React, { useState } from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
// const PropsContext = React.createContext("PropsContext");

import GetLocation from "./Components/GetLocation";
import Home from "./Components/Home";
import NaturalEvents from "./Components/NaturalEvents";
import EventNews from "./Components/NaturalEventProps/EventNews";
import EventIndividualNews from "./Components/NaturalEventProps/EventIndividualNews";
import Weather from "./Components/Weather";
import Pollution from "./Components/PollutionComponents/Pollution";
import Login from "./Components/Login";
import Steps from "./Components/PollutionComponents/Steps";
import Profile from "./Components/Profile";
import HelpPlant from "./Components/HelpPlant";
import Planted from "./Components/Planted";

const App = () => {
  const [fontsLoaded] = useFonts({
    UbuntuBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    Ubuntu: require("./assets/fonts/Ubuntu-Medium.ttf"),
    UbuntuLight: require("./assets/fonts/Ubuntu-Light.ttf"),
  });
  // const { inputLocation, setInputLocation } = useState(null);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      // <PropsContext.Provider value={{ setInputLocation: setInputLocation }}>
      <NavigatorComponent />
      // </PropsContext.Provider>
    );
  }
};

function NavigatorComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetLocation"
          component={GetLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NaturalEvents"
          component={NaturalEvents}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventNews"
          component={EventNews}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventIndividualNews"
          component={EventIndividualNews}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pollution"
          component={Pollution}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Steps"
          component={Steps}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HelpPlant"
          component={HelpPlant}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Planted"
          component={Planted}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
