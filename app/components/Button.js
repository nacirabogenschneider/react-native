import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 6,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    textTransform: "capitalize",
    fontWeight: "400",
  },
});

export default AppButton;
