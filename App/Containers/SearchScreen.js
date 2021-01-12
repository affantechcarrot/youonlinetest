import React, { useEffect } from "react";
import {
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
  Icon,
  TouchableWithoutFeedback,
} from "../common";
import AppTitle from "../Components/AppTitle";
import Searchbox from "../Components/Searchbox";
import Blogcontent from "../Components/Blogcontent";
import YouOnlineHOC from "../HOC/YouOnlineHOC";
import Activityoverlay from "../Components/Activityoverlay";
import BlogAction from "../Redux/BlogRedux";

import { useDispatch, useSelector } from "react-redux";
// Styles
import styles from "./Styles/BlogScreenStyle";

const SearchScreen = (props) => {
  const dispatch = useDispatch();
  return (
    <Root>
      <Container style={{}}>
      </Container>
    </Root>
  );
};

export default YouOnlineHOC(SearchScreen);
