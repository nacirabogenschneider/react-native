import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import image from "../assets/background.jpg";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      source={image}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            position: "absolute",
            top: 100,
            justifyContent: "flex-start",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Image
            style={styles.tinyLogo}
            source={require("../assets/logo-red.png")}
          ></Image>
          <Text style={styles.tagLine}>Sell what you don't need.</Text>
        </View>
        <AppButton
          color={colors.primary}
          title="login"
          onPress={() => console.log("Button 1 pressed")}
        />
        <AppButton
          color={colors.secondary}
          title="register"
          onPress={() => console.log("Button 2 pressed")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  firstButton: {
    width: "100%",
    alignItems: "center",
  },
  secondButton: {
    width: "100%",
    alignItems: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  tagLine: {
    marginTop: 20,
    fontSize: 18,
  },
});
export default WelcomeScreen;
