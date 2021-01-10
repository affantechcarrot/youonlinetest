import React, { Component } from 'react'
// import PropTypes from 'prop-types';

import { Button,TouchableWithoutFeedback,Container,Content,Root,Colors,scale,Fonts,View,GoogleSignin,KeyboardAvoidingView,Platform,Text,strings,validate} from '../common'
import styles from './Styles/AuthbuttonStyle'


 const  Authbutton = (props) => {

    return (
        <View >
          <Button style={[{
             backgroundColor:'#00CC33',
             borderRadius:scale(12),
             
            height:scale(55)},props.buttonStyle,]} full onPress={()=>{props.onPressAuth()}}>
            <Text style={[{ fontWeight:"bold",
    color:'#fff',
    fontSize:scale(16) },props.buttonTextStyle,]}>{props.buttonText}</Text>
          </Button>
        </View>
    )
  }


export default Authbutton
