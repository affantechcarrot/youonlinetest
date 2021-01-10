import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text ,TextInput,TouchableWithoutFeedback,CheckBox } from 'react-native'

import styles from './Styles/InputboxStyle'
import { scale } from 'react-native-size-matters'

import { ApplicationStyles,Colors, Fonts } from '../Themes';

const Inputbox= (props) =>  {
     const {wrapper} = props
    return (
      <View style={[wrapper]} >
        <Text style={[props.titleStyle]}>{props.title}</Text>
       <TextInput 
        returnKeyType="next" returnKeyLabel={"next"} 
        editable={(props.editable == false) ? false :true}
        onChangeText={props.onChangeText}
         onBlur ={props.onBlur}
         name={props.name || 'dummy'}
         error={props.error}
         
         secureTextEntry={props.secureTextEntry}
         placeholderTextColor={props.placeholderTextColor || '#88888B'} 
          style={[props.inputStyle,{}]} 
         value={props.value} placeholder={props.placeholder}
         multiline={props.multiline}
 
      />
     
      </View>
    )
  }


export default Inputbox
