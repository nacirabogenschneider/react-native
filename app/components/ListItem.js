import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

export function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={colors.lightgrey}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Image resizeMode="cover" style={styles.image} source={image}></Image>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={subTitle}>{subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 10,
  },
  textWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
  },
  subTitle: {
    fontSize: 12,
    color: colors.grey,
    marginVertical: 10,
  },
});

export default ListItem;
