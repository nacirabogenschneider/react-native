import React from "react";
import {
  StyleSheet,
  Image,
  BackHandler,
  Platform,
  View,
  Text,
} from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function NLoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.headline}>Narraflix</Text>
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          placeholder="E-Mail"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          style={{ backgroundColor: "white" }}
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <View style={styles.button}>
          <SubmitButton title="Login" color="petrol" />
          <SubmitButton title="Register" color="blue" />
        </View>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingBottom: Platform.OS === "android" ? 20 : 100,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  button: {
    width: "80%",
    marginTop: 30,
  },
  headline: {
    fontSize: 20,
    marginBottom: 30,
  },
});

export default NLoginScreen;
