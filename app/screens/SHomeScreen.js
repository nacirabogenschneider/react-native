import React from "react";
import { StyleSheet, FlatList, Platform } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const cards = [
  {
    id: 1,
    title: "Titel der Karte Nummer Eins",
    subTitle: "Lorem und so weiter",
    image: require("../assets/jacket.jpg"),
    likes: 1,
    isBookmarked: false,
  },
  {
    id: 2,
    title: "Titel der Karte Nummer Zwei",
    subTitle: "Lorem und so weiter",
    image: require("../assets/couch.jpg"),
    likes: 1,
    isBookmarked: false,
  },
  {
    id: 3,
    title: "Titel der Karte Nummer Drei",
    subTitle: "Lorem und so weiter",
    image: require("../assets/jacket.jpg"),
    likes: 1,
    isBookmarked: false,
  },
];
function SHomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={cards}
        keyExtractor={(card) => card.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            icon="heart"
            onBookmarkPress={() => console.log("Bookmarked Pressed")}
            onHeartPress={() => console.log("Heart")}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.light,
    overflow: "visible",
  },
  list: {
    width: "100%",
    height: "100%",
    padding: 20,
    paddingTop: 30,
    overflow: "visible",
  },
});

export default SHomeScreen;
