import React, { useEffect, useState } from "react";
import { View, Text, Image, Linking } from "react-native";

import Header from "./../styles/Header";
import LoadingScreen from "./../LoadingScreen";
import { ScrollView } from "react-native-gesture-handler";
const spinner = require("./../../assets/spinner.jpg");

function EventIndividualNews({ route, navigation }) {
  const [newsData, setNewsData] = useState();
  const [image, setImage] = useState();
  const link = route.params.link;

  const getSource = () => {
    fetch(link)
      .then((data) => data.json())
      .then((data) => setNewsData(data))
      .then(getImage())
      .catch((error) => alert(error.message));
  };

  const getImage = () => {
    fetch(
      "https://pixabay.com/api/?key=18550741-166822bbc2f58290fa3e9ab01&q=" +
        route.params.categoryRaw
    )
      .then((data) => data.json())
      .then((data) =>
        setImage(data.hits[Math.floor(Math.random() * 5)].largeImageURL)
      )
      .catch((error) => alert(error.message));
  };

  useEffect(getSource, []);

  return newsData == null || image == null ? (
    <LoadingScreen />
  ) : (
    <View>
      <Header navigation={navigation}>{route.params.category}</Header>
      <ScrollView>
        <Image
          source={{ uri: image, width: 600, height: 200 }}
          loadingIndicatorSource={spinner}
        />
        <Text style={{ fontSize: 30, margin: 10, fontWeight: "bold" }}>
          {newsData.data[0].fields.title}
        </Text>
        <Text style={{ marginHorizontal: 10 }}>
          {newsData.data[0].fields.date.original.slice(0, 10)}
        </Text>
        <Text
          style={{ fontSize: 18, marginHorizontal: 10, color: "blue" }}
          onPress={() => Linking.openURL(newsData.data[0].fields.url)}
        >
          Source
        </Text>

        <Text style={{ fontSize: 23, margin: 10 }}>
          {newsData.data[0].fields.body}
        </Text>
      </ScrollView>
    </View>
  );
}

export default EventIndividualNews;
