import React from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { scale } from '../common'
import styles from './Styles/AuthbottomcardStyle'

const Authbottomcard = ({onNavigate}) => {
  return (
    <View style={{paddingHorizontal:scale(25),marginBottom:scale(25)}}>
      <Text style={[styles.introtext]}>
        Meet New
      </Text>
      <Text  style={[styles.introtext]}>
       People around the world
      </Text>
      <Text style={[styles.sharetext]}>
      chat,share,videos,photos,music $ nore..
      </Text>
      <View style={[styles.authbuttonswrapper,{}]}>
        <TouchableWithoutFeedback onPress={()=>onNavigate('LoginScreen')}>
          <View style={[styles.loginbutton]}>
            <Text style={[styles.authtext]}>
              Login
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>onNavigate('RegisterScreen')}>
          <View style={[styles.signUpbutton]}>
            <Text style={[styles.authtext]}>
              Signup
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default Authbottomcard
