import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import Header from "./../styles/Header";
import Loading from "./../LoadingScreen";
import LoadingScreen from "./../LoadingScreen";
import Neomorph from "./../styles/Neomorph";
import { TouchableOpacity } from "react-native-gesture-handler";

function EventNews({ route, navigation }) {
  const [disasterData, setDisasterData] = useState();
  let disData;
  const country = route.params.country;
  const category = route.params.category;

  const GetNews = () => {
    const link =
      "https://api.reliefweb.int/v1/reports?appname=apidoc&sort[]=date:desc&sort[]=title:asc&filter[field]=country&filter[value]=" +
      country +
      "&query[value]=" +
      category;
    fetch(link)
      .then((data) => data.json())
      .then((data) => {
        return setDisasterData(data);
      })
      .catch((error) => alert(error.message));
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function EventPress(data, index) {
    navigation.navigate("EventIndividualNews", {
      link: data,
      category: index + 1 + ". " + capitalizeFirstLetter(category),
      categoryRaw: category,
    });
  }

  useEffect(GetNews, []);

  return disasterData == null ? (
    <LoadingScreen />
  ) : (
    <View style={{ backgroundColor: "#e0e5ec", flex: 1 }}>
      <Header navigation={navigation}>{capitalizeFirstLetter(category)}</Header>
      <ScrollView>
        <Text
          style={{
            fontFamily: "UbuntuBold",
            textAlign: "center",
            fontSize: 25,
            padding: 15,
          }}
        >
          News about {capitalizeFirstLetter(category)}s in {country}
        </Text>
        {disasterData.data.map((x, index) => (
          <View style={{ margin: 15 }}>
            <Neomorph>
              <TouchableOpacity onPress={() => EventPress(x.href, index)}>
                <Text
                  style={{ fontSize: 20, padding: 20, fontFamily: "Ubuntu" }}
                >
                  <Text style={{ fontFamily: "UbuntuBold", fontSize: 23 }}>
                    {index + 1}.{" "}
                  </Text>
                  {x.fields.title}
                </Text>
              </TouchableOpacity>
            </Neomorph>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default EventNews;
