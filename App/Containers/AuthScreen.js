import React, { useState, useEffect } from "react";
import { ScrollView, Text, KeyboardAvoidingView } from "react-native";
import {
  Config,
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
  FastImage,
} from "../common";
import CommonAction from "../Redux/CommonRedux";
import AppTitle from "../Components/AppTitle";
import Authbottomcard from "../Components/Authbottomcard";
import { useDispatch, useSelector } from "react-redux";
import YouOnlineHOC from "../HOC/YouOnlineHOC";
import AuthenticationAction from "../Redux/AuthenticationRedux";
//import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthScreen = (props) => {
  const dispatch = useDispatch();
  const { userInfo, userInfoFailure } = useSelector((state) => ({
    userInfo: state.AuthenticationReducer.signInUserInfoPayload,
    userInfoFailure: state.AuthenticationReducer.signInUserInfoPayloadError,
  }));

  useEffect(() => {
    dispatch(AuthenticationAction.signInUserInfo());
  }, []);

  useEffect(() => {
    if (userInfo !== null && userInfo !== undefined) {
      props.onNavigate("BlogScreen");
    } else {
      if (userInfoFailure === "fail") {
        RNBootSplash.hide({ fade: true });
      }
    }
  }, [userInfo, userInfoFailure]);

  // else{
  //   dispatch(AuthenticationAction.signInUserInfo())
  //   RNBootSplash.hide({ fade: true }); //
  // }

  return (
    <Root>
      <Container style={{ backgroundColor: "#00CC33" }}>
        <FastImage
          style={{ flex: 1 }}
          source={require("../Images/splasscreen2.png")}
        >
          <Content
            style={{ flex: 1 }}
            scrollEnabled={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginBottom: scale(100),
                }}
              >
                <AppTitle
                  title={"YouOnline"}
                  titleStyle={{
                    color: "#fff",
                    fontSize: scale(30),
                    fontWeight: "bold",
                  }}
                />
              </View>
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Authbottomcard
                  onNavigate={(screen) => {
                    props.onNavigate(screen);
                  }}
                />
              </View>
            </View>
          </Content>
        </FastImage>
      </Container>
    </Root>
  );
};

export default YouOnlineHOC(AuthScreen);
