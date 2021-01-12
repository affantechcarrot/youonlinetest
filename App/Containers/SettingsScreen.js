import React, { useEffect } from "react";
import {
  TextInput,
  Root,
  Container,
} from "../common";
import AppTitle from "../Components/AppTitle";
import YouOnlineHOC from "../HOC/YouOnlineHOC";
import Activityoverlay from "../Components/Activityoverlay";
import BlogAction from "../Redux/BlogRedux";

import { useDispatch, useSelector } from "react-redux";
// Styles
import styles from "./Styles/BlogScreenStyle";

const SettingsScreen = (props) => {
  const dispatch = useDispatch();
  return (
    <Root>
      <Container style={{}}>
      </Container>
    </Root>
  );
};

export default YouOnlineHOC(SettingsScreen);
