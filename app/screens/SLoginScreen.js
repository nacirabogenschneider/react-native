import React from "react";
import {
  StyleSheet,
  Image,
  BackHandler,
  Platform,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
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
    <TouchableWithoutFeedback
      style={{ backgroundColor: colors.banana }}
      onPress={() => console.log("dismissed")}
    >
      <Screen style={styles.container}>
        <View
          style={{
            width: "100%",
            height: "110%",
            backgroundColor: colors.white,
            borderBottomRightRadius: 200,
            borderBottomLeftRadius: 200,
            elevation: 12,
            shadowColor: colors.medium,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.46,
            shadowRadius: 11.14,
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              borderBottomRightRadius: 200,
              borderBottomLeftRadius: 200,
              backgroundColor: colors.blight,
              paddingBottom: 20,
              elevation: 12,
              shadowColor: colors.medium,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.46,
              shadowRadius: 11.14,
            }}
          >
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.headline}>Social Learning</Text>
          </View>
          <Form
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <View
              style={{
                paddingTop: 10,
                paddingHorizontal: 30,
                width: "100%",
              }}
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
            </View>
            <View style={styles.button}>
              <SubmitButton title="Login with Google" color="banana" />
              <SubmitButton title="Login" color="orange" />
              <SubmitButton title="Register" color="bloodOrange" />
            </View>
          </Form>
        </View>
      </Screen>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 20 : 100,
    backgroundColor: colors.blight,
  },
  logo: {
    width: Platform.OS === "android" ? 240 : 340,
    height: Platform.OS === "android" ? 220 : 320,
    alignSelf: "center",
  },
  button: {
    paddingTop: 20,
    width: "100%",
    height: "100%",
    paddingHorizontal: 50,
  },
  headline: {
    fontSize: 18,
    marginBottom: 24,
    color: colors.lightblue,
  },
});

export default SLoginScreen;
