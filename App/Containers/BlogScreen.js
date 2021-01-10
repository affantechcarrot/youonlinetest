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

const BlogScreen = (props) => {
  const dispatch = useDispatch();

  const { blogReducer, blogFetching, blogPayload } = useSelector((state) => ({
    blogReducer: state.blogReducer,
    blogFetching: state.blogReducer.blogFetching,
    blogPayload: state.blogReducer.payload,
  }));

  useEffect(() => {
    dispatch(BlogAction.blogRequest({}));
  }, []);

  useEffect(() => {
    if (blogFetching === false) {
      RNBootSplash.hide({ fade: true }); //
    }
  }, [blogFetching]);

  return (
    <Root>
      <Container style={{}}>
        <Activityoverlay isLoading={blogFetching} />
        <Content
          style={[styles.blogcontent, {}]}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{ paddingHorizontal: scale(25) }}>
            <View style={[styles.blogHeader]}>
              <AppTitle
                title={"Blog"}
                titleStyle={{
                  color: "#000",
                  fontSize: scale(22),
                  fontWeight: "bold",
                }}
              />
              <TouchableWithoutFeedback
                onPress={() => {
                  props.onNavigate("AddblogScreen");
                }}
              >
                <View style={[styles.createButton]}>
                  <Icon name={"plus"} light />
                  <AppTitle
                    title={"Create"}
                    titleStyle={{
                      color: "#000",
                      fontSize: scale(16),
                      marginLeft: scale(5),
                      fontWeight: "600",
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <Searchbox />
          </View>
          <View style={[styles.blogWrapper]}>
            <Blogcontent data={blogPayload !== null ? blogPayload : []} />
          </View>
        </Content>
      </Container>
    </Root>
  );
};

export default YouOnlineHOC(BlogScreen);
