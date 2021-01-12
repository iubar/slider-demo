import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import ProductSlider1 from "./src/components/ProductSlider1";

const { width, height } = Dimensions.get("window");

export default function App() {
  let images = [
    {
      title: "a1",
      uri:
        "https://github.com/leecade/react-native-swiper/blob/master/examples/components/Swiper/img/1.jpg?raw=true"
    },
    {
      title: "a2",
      uri:
        "https://github.com/leecade/react-native-swiper/blob/master/examples/components/Swiper/img/2.jpg?raw=true"
    },
    {
      title: "a3",
      uri:
        "https://github.com/leecade/react-native-swiper/blob/master/examples/components/Swiper/img/3.jpg?raw=true"
    }
  ];
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ProductSlider1 images={images} />
      </View>
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  slider: {
    flex: 1,
    padding: 0,
    width: width,
    aspectRatio: 1.33,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 10
  }
});
