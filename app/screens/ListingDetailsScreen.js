import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Red Jacket for sales!</Text>
        <Text style={styles.subTitle}>100$</Text>
      </View>
      <ListItem
        image={require("../assets/portrait.jpg")}
        title="Nacira Bogenschneider"
        subTitle="23 Listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  image: {
    width: "100%",
    height: 300,
  },
  textWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
