import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Platform,
  Modal,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import {
  TouchableWithoutFeedback,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from "react-native-gesture-handler";

const cards = [
  {
    id: 1,
    title: "Titel der Karte Nummer Eins",
    subTitle:
      "Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter",
    image: require("../assets/jacket.jpg"),
    likes: 1,
    isBookmarked: false,
  },
  {
    id: 2,
    title: "Titel der Karte Nummer Zwei",
    subTitle:
      "Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter",
    image: require("../assets/couch.jpg"),
    likes: 1,
    isBookmarked: false,
  },
  {
    id: 3,
    title: "Titel der Karte Nummer Drei",
    subTitle:
      "Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter",
    image: require("../assets/jacket.jpg"),
    likes: 1,
    isBookmarked: false,
  },
  {
    id: 4,
    title: "Titel der Karte Nummer Eins",
    subTitle:
      "Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter",
    image: require("../assets/jacket.jpg"),
    likes: 1,
    isBookmarked: false,
  },
  {
    id: 5,
    title: "Titel der Karte Nummer Zwei",
    subTitle:
      "Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter",
    image: require("../assets/couch.jpg"),
    likes: 1,
    isBookmarked: false,
  },
  {
    id: 6,
    title: "Titel der Karte Nummer Drei",
    subTitle:
      "Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter und so weiter Lorem und so weiter Lorem und so weiter",
    image: require("../assets/jacket.jpg"),
    likes: 1,
    isBookmarked: false,
  },
];
const hashTags = [
  { id: 1, tagName: "CSS" },
  { id: 2, tagName: "PHP" },
  { id: 3, tagName: "GIT" },
  { id: 4, tagName: "JavaScript" },
  { id: 5, tagName: "Bootstrap" },
  { id: 6, tagName: "HTML" },
  { id: 7, tagName: "Mathe" },
  { id: 8, tagName: "Deutsch" },
  { id: 9, tagName: "Kunst" },
  { id: 10, tagName: "Musik" },
];
function SHomeScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
      <Screen style={styles.container}>
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            width: 300,
            borderRadius: 12,
            backgroundColor: colors.white,
            borderWidth: 0.5,
            borderColor: colors.medium,
          }}
        >
          <TextInput
            style={{
              height: 36,
              color: colors.lightBlue,
              fontSize: 16,
              paddingLeft: 20,
            }}
            placeholder="Suche eintragen"
          />
        </View>
        <View style={{ width: "100%" }} showsHorizontalScrollIndicator={false}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{
              width: "100%",
            }}
            horizontal
            data={hashTags}
            keyExtractor={(tag) => tag.id.toString()}
            renderItem={({ item }) => (
              <TouchableHighlight
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                  backgroundColor: colors.lightBanana,
                  paddingVertical: 8,
                  paddingHorizontal: 8,
                  marginHorizontal: 10,
                  marginVertical: 20,
                }}
                underlayColor={colors.orange}
                onPress={() => console.log("HashTags", item.tagName)}
              >
                <Text style={{ color: colors.medium, fontSize: 12 }}>
                  {item.tagName}
                </Text>
              </TouchableHighlight>
            )}
          />
        </View>

        <Text style={styles.text}>Die neuesten Kurse</Text>
        <View style={{ height: 400, width: "100%", paddingRight: 20 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            horizontal
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
        </View>
        <Text style={styles.text}>Kurse deiner Community</Text>
        <View style={{ height: 400, width: "100%", paddingRight: 20 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            horizontal
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
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 20,
    backgroundColor: colors.blight,
    overflow: "visible",
  },
  list: {
    width: "100%",
    height: "100%",
    padding: 20,
    marginBottom: 20,
    overflow: "visible",
    marginRight: 30,
  },
  heading: {
    fontSize: 28,
    padding: 15,
    color: colors.medium,
    fontWeight: "600",
    width: "100%",
    textAlign: "center",
  },
  head: {
    backgroundColor: colors.lightBanana,
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  modal: {
    flex: 1,
  },
  modalButton: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.medium,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    opacity: 0.8,
  },
  text: {
    fontSize: 24,
    paddingHorizontal: 26,
    paddingTop: 30,
  },
});

export default SHomeScreen;
