import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CategoryItem({ iconName, color, background, title }) {
  return (
    <View style={[styles.category, { backgroundColor: background }]}>
      <View style={[styles.icon, { backgroundColor: color }]}>
        <MaterialCommunityIcons
          name={iconName}
          color={colors.white}
          size={20}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
});
export default CategoryItem;
