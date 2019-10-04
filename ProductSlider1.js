import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableWithoutFeedback
} from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

export default class ProductSlider1 extends React.Component {
  state = { isLoading: false };

  constructor(props) {
    super(props);
  }

  async onPress(i) {
    console.log("clicked " + i);
  }

  componentDidMount() {}

  render() {
    if (this.state.isLoading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      let images = this.props.images;

      var buttonsListArr = [];

      for (let i = 0; i < images.length; i++) {
        // buttonsListArr.push( <View key={i} style={styles.slide}> <Image key={images[i].id} resizeMode='stretch' style={styles.image} source={{ uri: images[i].url }} onPress={console.log('click')} /></View>);
        let uri2 = images[i].uri;

        buttonsListArr.push(
          <TouchableWithoutFeedback
            key={i}
            style={styles.slide}
            onPress={() => this.onPress(i)}
          >
            <Image
              key={i}
              resizeMode="contain"
              style={styles.image}
              source={{ uri: uri2 }}
            />
          </TouchableWithoutFeedback>
        );
      }

      return (
        <Swiper
          style={styles.wrapper}
          /* height={240} */
          showPagination={true}
          autoplay={true}
          loop={true}
          showsButtons={false}
          /* onMomentumScrollEnd={(e, state, context) => console.log('onMomentumScrollEnd index:', state.index)} */
          dot={
            <View
              style={{
                backgroundColor: "rgba(0,0,0,.2)",
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: "#000",
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{ bottom: -23, left: null, right: 10 }}
        >
          {buttonsListArr}
        </Swiper>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: width,
    flex: 1
  },
  wrapper: {
    flex: 1
  },
  banner: {
    marginTop: 1,
    flexGrow: 1
  },
  text: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold"
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  }
});
