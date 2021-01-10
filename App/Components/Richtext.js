import React, { useRef, useState } from "react";
import { StyleSheet, Text, ScrollView,View } from "react-native";
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import HTMLView from "react-native-htmlview";
import { scale } from "../common";

const EditorScreen = () => {
  //const strikethrough = require("./assets/strikethrough.png"); //icon for strikethrough
  //const video = require("./assets/video.png"); //icon for Addvideo
  const RichText = useRef(); //reference to the RichEditor component
  const [article, setArticle] = useState("");

  // this function will be called when the editor has been initialized
  function editorInitializedCallback() {
    RichText.current?.registerToolbar(function (items) {
      // items contain all the actions that are currently active
      console.log(
        "Toolbar click, selected items (insert end callback):",
        items
      );
    });
  }

  // Callback after height change
  function handleHeightChange(height) {
    // console.log("editor height change:", height);
  }

  function onPressAddImage() {
    // you can easily add images from your gallery
    RichText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
    );
  }

  function insertVideo() {
    // you can easily add videos from your gallery
    RichText.current?.insertVideo(
      "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
    );
  }

  return (
    <View style={styles.container}>

      <RichToolbar
        style={[styles.richBar]}
        editor={RichText}
        disabled={false}
        iconTint={"black"}
        selectedIconTint={"pink"}
        disabledIconTint={"purple"}
        onPressAddImage={onPressAddImage}
        iconSize={scale(20)}
        actions={[
          "insertVideo",
          ...defaultActions,
          actions.setStrikethrough,
          actions.heading1,
        ]}
        // map icons for self made actions
        
        insertVideo={insertVideo}
      />
      <RichEditor
        disabled={false}
        containerStyle={styles.editor}
        ref={RichText}
        style={styles.rich}
        placeholder={"Start Writing Here"}
        onChange={(text) => setArticle(text)}
        editorInitializedCallback={editorInitializedCallback}
        onHeightChange={handleHeightChange}
      />
      
    </View>
  );
};

export default EditorScreen;

const styles = StyleSheet.create({
  /********************************/
  /* styles for html tags */
 
  /*******************************/
  container: {
    flex: 1,
    
    
  },
  editor: {
   
    color:"red",
    borderWidth:scale(0.5),
    borderBottomLeftRadius:scale(12),
    borderBottomRightRadius:scale(12)
  },
  rich: {
    minHeight: 200,
    flex: 1,
    borderBottomLeftRadius:scale(12),
    borderBottomRightRadius:scale(12),
    
  },
  richBar: {
    borderTopLeftRadius:scale(12),
    borderTopRightRadius:scale(12)

  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tib: {
    textAlign: "center",
    
  },
});