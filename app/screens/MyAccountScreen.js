import React from "react";
import { StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import CategoryItem from "../components/CategoryItem";

function MyAccountScreen() {
  return (
    <Screen style={{ backgroundColor: colors.lightgrey }}>
      <View style={styles.profile}>
        <ListItem
          image={require("../assets/portrait.jpg")}
          title="Nacira Bogenschneider"
          subTitle={"mail@nacira.de"}
        />
      </View>

      <CategoryItem
        iconName="format-list-bulleted"
        color={colors.primary}
        background={colors.white}
        title="My Listings"
      />
      <ListItemSeperator />
      <CategoryItem
        iconName="email"
        color={colors.secondary}
        background={colors.white}
        title="My Messages"
      />
      <View style={styles.logout}>
        <CategoryItem
          iconName="logout"
          color={colors.banana}
          background={colors.white}
          title="Log Out"
        />
      </View>
    </Screen>
  );
}

export default MyAccountScreen;

const styles = StyleSheet.create({
  profile: {
    backgroundColor: colors.white,
    marginBottom: 40,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    borderColor: colors.grey,
    borderWidth: 0.5,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  logout: {
    marginTop: 20,
  },
});
