import React, { useEffect, useRef, createRef, useState } from "react";
import {
  Alert,
  KeyboardAwareScrollView,
  Picker,
  TextInput,
  Root,
  Container,
  Content,
  Title,
  Body,
  ActivityIndicator,
  Toast,
  View,
  RNBootSplash,
  scale,
  Icon,
  MIcon,
} from "../common";
import AppTitle from "../Components/AppTitle";
import YouOnlineHOC from "../HOC/YouOnlineHOC";
import Activityoverlay from "../Components/Activityoverlay";
import BlogAction from "../Redux/BlogRedux";
import Inputbox from "../Components/Inputbox";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Authbutton from "../Components/Authbutton";
import EditorScreen from "../Components/Richtext";
import Imagecard from "../Components/Imagecard";
// Styles
import styles from "./Styles/AddblogScreenStyle";
import { SafeAreaView } from "react-native-safe-area-context";
const AddBlogScreen = (props) => {
  const dispatch = useDispatch();
  const richText = React.createRef() || useRef();
  const [blogDetails, setBlogDetails] = useState({});
  const { addBlogFetching, addBlogPayload, addBlogPayloadError } = useSelector(
    (state) => ({
      blogReducer: state.blogReducer,
      addBlogPayload: state.blogReducer.addBlogPayload,
      addBlogPayloadError: state.blogReducer.addBlogPayloadFailure,
      addBlogFetching: state.blogReducer.addBlogFetching,
    })
  );

  const setBlogDetailsFunction = (key, value) => {
    setBlogDetails((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const addBlog = () => {
    if (blogDetails.text === "" || blogDetails.text === undefined) {
      Alert.alert("Title Cannot be empty.");
    } else {
      dispatch(
        BlogAction.addBlogRequest({
          type: "new_post_on_timeline",
          text: blogDetails.text,
        })
      );
    }
  };
  useEffect(() => {
    if (addBlogPayload !== null) {
      Alert.alert("SuccessFull Added");
      dispatch(BlogAction.blogRequest({}));
      props.onNavigate("BlogScreen");
    }
    if (addBlogPayloadError !== null) {
      Alert.alert(addBlogPayloadError.error_text);
    }
  }, [addBlogPayload, addBlogPayloadError]);

  const onValueChange2 = (value) => {
    console.log(value);
  };
  return (
    <Root>
      <Container style={{}}>
        {<Activityoverlay isLoading={addBlogFetching} />}
        <SafeAreaView style={{flex:1}}>
        <Content
          showsVerticalScrollIndicator={false}
          style={[styles.blogcontent, { marginHorizontal: scale(20),marginTop:scale(10) }]}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          
          <View style={{ flex: 1 }}>
            <Header
              goBack={() => {
                props.onBack();
              }}
            />
            <Inputbox
              wrapper={{ marginTop: scale(20) }}
              inputStyle={styles.inputStyle}
              placeholder={"Title"}
              title={"TITLE"}
              name={"text"}
              titleStyle={styles.titleStyle}
              onChangeText={(value) => {
                setBlogDetailsFunction("text", value);
              }}
            />

            <Inputbox
              wrapper={{ marginTop: scale(20) }}
              inputStyle={[styles.inputStyle, {}]}
              placeholder={"Description"}
              //placeholderStyle={{color:'88888B'}}
              title={"DESCRIPTION"}
              titleStyle={[styles.titleStyle]}
            />
            <View style={[styles.ropecvWrapper]}>
              <Imagecard
                resizeMode={"cover"}
                inApp={true}
                img={require("../Images/ropecv.png")}
                imageStyle={{ width: scale(50), height: scale(50) }}
              />
              <AppTitle
                title={"rope your cv here"}
                titleStyle={[styles.ropecvstyle, {}]}
              />
            </View>
            <AppTitle
              title={"SELECT CATEGORY"}
              titleStyle={[styles.titleStyle, { marginTop: scale(25) }]}
            />

            <Picker
              mode="dropdown"
              iosIcon={
                <Icon
                  name="arrow-circle-o-down"
                  style={{ marginRight: scale(10) }}
                />
              }
              style={[styles.pickerstyle,{borderRadius:scale(12)}]}
              placeholder="Select your Category"
              placeholderStyle={{ color: "#88888B" }}
              placeholderIconColor="#007aff"
              //selectedValue={this.state.selected2}
              onValueChange={(da) => onValueChange2(da)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
            <View style={{ marginTop: scale(25) }}>
              <EditorScreen />
            </View>

            <Authbutton
              buttonStyle={[{ marginTop: scale(25) }]}
              buttonTextStyle={[styles.buttonTextStyle]}
              buttonText={"Sign In"}
              onPressAuth={() => {
                addBlog();
              }}
            />
          </View>
         
        </Content>
        </SafeAreaView>
      </Container>
    </Root>
  );
};

export default YouOnlineHOC(AddBlogScreen);
