import React from "react";
import { View, StyleSheet, Image, onPress } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableHighlight } from "react-native-gesture-handler";

function Card({ title, subTitle, image }) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={colors.lightgrey}
      onPress={onPress}
    >
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    borderColor: colors.lightgrey,
    borderWidth: 0.5,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
