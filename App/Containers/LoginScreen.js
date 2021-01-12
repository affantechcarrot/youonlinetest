import React, { useState, useEffect } from "react";
import {
  Alert,
  TextInput,
  Root,
  Container,
  Content,
  View,
  scale,
} from "../common";
import { Text, TouchableWithoutFeedback } from "react-native";
import YouOnlineHOC from "../HOC/YouOnlineHOC";
import AppTitle from "../Components/AppTitle";
import Inputbox from "../Components/Inputbox";
import Authbutton from "../Components/Authbutton";
import Activityoverlay from "../Components/Activityoverlay";
// Styles
import styles from "./Styles/LoginScreenStyle";

const LoginScreen = (props) => {
  const { dispatch, AuthenticationAction, useSelector } = props;
  const [userCredentials, setUserCredentials] = useState({});
  const {
    signInUserInfoLoading,
    signInPayloadError,
    signInLoading,
    signInPayload,
    userInfo,
  } = useSelector((state) => ({
    signInLoading: state.AuthenticationReducer.signInLoading,
    signInUserInfoLoading: state.AuthenticationReducer.signInUserInfoLoading,
    signInPayload: state.AuthenticationReducer.signInPayload,
    signInPayloadError: state.AuthenticationReducer.signInPayloadError,
    userInfo: state.AuthenticationReducer.signInUserInfoPayload,
  }));

  const setUserCredentialsfunc = (key, value) => {
    setUserCredentials((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    dispatch(AuthenticationAction.signInRequest(userCredentials));
  };

  useEffect(() => {
    if (signInPayload !== null) {
      dispatch(AuthenticationAction.signInUserInfo());
    }
    if (signInPayloadError !== null) {
      Alert.alert(signInPayloadError.errors.error_text);
    }
  }, [signInPayload, signInPayloadError]);

  useEffect(() => {
    if (userInfo !== null && userInfo !== undefined) {
      props.onNavigate("BlogScreen");
    }
  }, [userInfo]);

  return (
    <Root>
      <Container style={{}}>
        <Activityoverlay isLoading={signInLoading || signInUserInfoLoading} />
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
              title={"YouOnline"}
              titleStyle={{
                color: "#000",
                fontSize: scale(22),
                fontWeight: "bold",
              }}
            />
            <View style={{ flex: 1, marginTop: scale(75) }}>
              <AppTitle
                title={"Meet new people around the world!"}
                titleStyle={{
                  color: "#000",
                  fontSize: scale(24),
                  width: scale(180),
                  fontWeight: "800",
                  lineHeight: scale(30),
                }}
              />
              <View style={[styles.formwrapper]}>
                <Inputbox
                  inputStyle={styles.inputStyle}
                  placeholder={"User Name"}
                  title={"USER NAME"}
                  titleStyle={styles.titleStyle}
                  onChangeText={(value) => {
                    setUserCredentialsfunc("username", value);
                  }}
                />
                <Inputbox
                  secureTextEntry={true}
                  onChangeText={(value) => {
                    setUserCredentialsfunc("password", value);
                  }}
                  inputStyle={styles.inputStyle}
                  placeholder={"Password"}
                  title={"PASSWORD"}
                  titleStyle={[styles.titleStyle, styles.passwordStyle]}
                />
                <View style={[styles.fgtpasswordStyleWrapper]}>
                  <AppTitle
                    title={"Forgot password?"}
                    titleStyle={[styles.fgtpasswordStyle]}
                  />
                </View>
                <Authbutton
                  buttonStyle={[styles.AuthbuttonStyle]}
                  buttonTextStyle={[styles.buttonTextStyle]}
                  buttonText={"Sign In"}
                  onPressAuth={() => {
                    onSubmit();
                  }}
                />
              </View>
              <View style={[styles.loginbottom]}>
                <View style={[styles.bottomWrap, {}]}>
                  <AppTitle
                    title={"Don’t have an account? "}
                    titleStyle={styles.loginBottomText}
                  />
                  <TouchableWithoutFeedback
                    onPress={() => props.onNavigate("RegisterScreen")}
                  >
                    <View>
                      <AppTitle
                        isNavigate={true}
                        onNavigate={() => {
                          props.onNavigate("RegisterScreen");
                        }}
                        title={"Sign Up"}
                        titleStyle={styles.signUptext}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    </Root>
  );
};

export default YouOnlineHOC(LoginScreen);
