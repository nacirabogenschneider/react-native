import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={30} color={colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color={colors.white}
        />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      ></Image>
    </View>
  );
}
export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 40,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 40,
    right: 30,

    justifyContent: "center",
    alignItems: "center",
  },
});
