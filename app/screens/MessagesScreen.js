import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const initalMessages = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 4,
    title: "Title 4",
    description: "Description 4",
    image: require("../assets/portrait.jpg"),
  },
];
function MessagesScreen() {
  const [messages, setMessages] = useState(initalMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) =>
    setMessages(messages.filter((m) => m.id !== message.id));

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("Tapp", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 5,
              title: "Title 5",
              description: "Description 5",
              image: require("../assets/portrait.jpg"),
            },
          ]);
        }}
        style={styles.container}
      ></FlatList>
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightgrey,
  },
});
