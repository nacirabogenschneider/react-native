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

function SLoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.headline}>Social Learning</Text>
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
          <SubmitButton title="Login with Google" color="banana" />
          <SubmitButton title="Login" color="orange" />
          <SubmitButton title="Register" color="bloodOrange" />
        </View>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 10,
    paddingBottom: Platform.OS === "android" ? 20 : 100,
  },
  logo: {
    width: 160,
    height: 140,
    alignSelf: "center",
    marginTop: 24,
  },
  button: {
    width: "80%",
    marginTop: 28,
  },
  headline: {
    fontSize: 18,
    marginBottom: 24,
    color: colors.lightblue,
  },
});

export default SLoginScreen;
