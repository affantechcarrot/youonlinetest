import React, { Component } from "react";
import {
  Icon,
  TextInput,
  Root,
  Container,
  Content,
  Header,
  Title,
  Body,
  ActivityIndicator,
  Toast,
  View,
  RNBootSplash,
  scale,
} from "../common";
import { Text, TouchableWithoutFeedback } from "react-native";
import YouOnlineHOC from "../HOC/YouOnlineHOC";
import AppTitle from "../Components/AppTitle";
import Inputbox from "../Components/Inputbox";
import Authbutton from "../Components/Authbutton";
import Social from "../Components/Social";
// Styles
import styles from "./Styles/LoginScreenStyle";

const RegisterScreen = (props) => {
  return (
    <Root>
      <Container style={{}}>
        <Content
          style={{
            flex: 1,
            paddingHorizontal: scale(25),
            marginTop: scale(20),
          }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{ flex: 1 }}>
            <AppTitle
              title={"Signup"}
              titleStyle={{
                color: "#000",
                fontSize: scale(22),
                fontWeight: "bold",
              }}
            />
            <View style={{ flex: 1 }}>
              <View style={[styles.formwrapper]}>
                <Inputbox
                  inputStyle={styles.inputStyle}
                  placeholder={"Full Name"}
                  title={"FULL NAME"}
                  titleStyle={styles.titleStyle}
                />
                <Inputbox
                  inputStyle={styles.inputStyle}
                  placeholder={"Email"}
                  title={"EMAIL"}
                  titleStyle={[styles.titleStyle, { marginTop: scale(25) }]}
                />
                <Inputbox
                  inputStyle={styles.inputStyle}
                  placeholder={"Password"}
                  title={"PASSWORD"}
                  titleStyle={[styles.titleStyle, { marginTop: scale(25) }]}
                  secureTextEntry={true}
                  placeholderTextColor={"#000"}
                />
                <View style={{ marginTop: scale(15) }}>
                  <AppTitle title={"GENDER"} titleStyle={styles.titleStyle} />
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View style={[styles.genderRound, {}]}></View>
                      <AppTitle
                        title={"Female"}
                        titleStyle={[
                          styles.titleStyle,
                          styles.genderspace,
                          styles.size,
                        ]}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: scale(25),
                      }}
                    >
                      <View style={[styles.genderRound, {}]}></View>
                      <AppTitle
                        title={"Male"}
                        titleStyle={[
                          styles.titleStyle,
                          styles.genderspace,
                          styles.size,
                        ]}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: scale(20),
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View style={[styles.checkRound, {}]}></View>
                      <View style={[styles.ppWrap]}>
                        <Text style={[styles.pp]}>
                          By creating your account, you agree to our{" "}
                          <Text style={[styles.tc]}>
                            Terms of Use & Privacy Policy
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={[styles.orcondition]}>
                    <View style={styles.lineStyle}></View>
                    <Text style={[styles.orstyle]}>OR</Text>
                    <View style={styles.lineStyle}></View>
                  </View>
                  <Social />
                </View>
                <Authbutton
                  buttonStyle={[styles.AuthbuttonStyle]}
                  buttonTextStyle={[styles.buttonTextStyle]}
                  buttonText={"Create Account"}
                  onPressAuth={() => {
                   console.log("register")
                  }}
                />
              </View>
            </View>
          </View>
        </Content>
      </Container>
    </Root>
  );
};

export default YouOnlineHOC(RegisterScreen);
