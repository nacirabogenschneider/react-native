import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.grey}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    color: colors.grey,
    backgroundColor: colors.lightgrey,
    borderRadius: 25,
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
