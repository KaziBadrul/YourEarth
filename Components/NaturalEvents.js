import React from "react";

import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Header from "./styles/Header";
import { globalCountryDetails } from "./Home";

import EventCategory from "./NaturalEventProps/EventCatagory";

// NEWS API: 5f42f1408d944c348442f22c926d6e00
// https://api.reliefweb.int/v1/reports?appname=apidoc&filter[field]=country&filter[value]=Bangladesh&query[value]=flood
// Earthquakes
// Extreme Temperature (Heat & Cold)
// Extreme precipitation and flooding
// Famines & Droughts
// Hurricanes, Tornados, and Cyclones
// Landslides
// Lightning
// Volcanoes
// Wildfires

function NaturalEvent({ navigation }) {
  return (
    <View style={{ backgroundColor: "#e0e5ec", flex: 1 }}>
      <Header navigation={navigation}>Natural Events</Header>
      <Text
        style={{
          fontFamily: "Ubuntu",
          fontSize: 25,
          textAlign: "center",
          top: 10,
          backgroundColor: "#e0e5ecs",
          paddingBottom: 10,
        }}
      >
        Recent Natural Events of {globalCountryDetails.name}
      </Text>
      <ScrollView style={{ top: 10 }}>
        <EventCategory
          category="earthquake"
          country={globalCountryDetails.name}
          navigation={navigation}
        >
          Earthquakes
        </EventCategory>
        <EventCategory
          category="flood"
          country={globalCountryDetails.name}
          navigation={navigation}
        >
          Floods
        </EventCategory>
        <EventCategory
          category="drought"
          country={globalCountryDetails.name}
          navigation={navigation}
        >
          Droughts
        </EventCategory>
        <EventCategory
          category="heat"
          country={globalCountryDetails.name}
          navigation={navigation}
        >
          Heat Waves
        </EventCategory>
        <EventCategory
          category="cyclone"
          country={globalCountryDetails.name}
          navigation={navigation}
        >
          Tornado and Cyclones
        </EventCategory>
        <EventCategory
          category="landslide"
          country={globalCountryDetails.name}
          navigation={navigation}
        >
          Landslides
        </EventCategory>
        <EventCategory
          category="lightning"
          country={globalCountryDetails.name}
          navigation={navigation}
        >
          Lightning
        </EventCategory>
        <EventCategory
          category="volcano"
          country={globalCountryDetails.name}
          navigation={navigation}
        >
          Volcanoes
        </EventCategory>
        <EventCategory
          category="wildfire"
          country={globalCountryDetails.name}
          navigation={navigation}
        >
          Wildfires
        </EventCategory>
      </ScrollView>
    </View>
  );
}

export default NaturalEvent;
