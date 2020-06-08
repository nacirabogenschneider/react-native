import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  onPress,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import colors from "../config/colors";
import SListItem from "../components/SListItem";

function Card({ title, subTitle, image, icon, onBookmarkPress, onHeartPress }) {
  return (
    <View style={styles.card}>
      <View style={styles.author}>
        <SListItem image={require("../assets/portrait.jpg")} />
      </View>
      <View style={styles.bookmark}>
        <TouchableWithoutFeedback onPress={onBookmarkPress}>
          <MaterialCommunityIcons
            name="star"
            color={colors.lightBanana}
            size={40}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.icon}>
        <TouchableWithoutFeedback onPress={onHeartPress}>
          <MaterialCommunityIcons
            name="heart"
            color={colors.medium}
            size={24}
          />
        </TouchableWithoutFeedback>
      </View>
      <Image style={styles.image} source={image} />
      <View style={styles.progress}></View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={3}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookmark: {
    position: "absolute",
    zIndex: 100,
    right: 6,
    top: 0,
    opacity: 0.93,
  },
  card: {
    width: 300,
    height: 340,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    shadowColor: colors.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    borderWidth: Platform.OS === "android" ? 0.7 : 0,
    borderColor: "lightgrey",
    marginHorizontal: 12,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: colors.white,
  },
  image: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: "100%",
    height: 180,
  },
  subTitle: {
    color: colors.lightBlue,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
  },
  title: {
    marginBottom: 7,
    color: colors.lightBlue,
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    zIndex: 200,
    right: 10,
    bottom: 10,
  },
  progress: {
    height: 5,
    width: "100%",
    backgroundColor: colors.lightBanana,
  },
  author: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 200,
  },
});

export default Card;
