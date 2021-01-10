import React from 'react'
// import PropTypes from 'prop-types';
import {MIcon,View,Text,scale,TouchableWithoutFeedback,
} from '../common'
import styles from './Styles/HeaderStyle'
import AppTitle from '../Components/AppTitle'

const Header = (props) => {
  return (
    <View style={{flexDirection:"row",alignItems:"center"}}>
      <TouchableWithoutFeedback onPress={()=>{props.goBack()}}>
      <MIcon name={'keyboard-backspace'} size={scale(32)}/>
      </TouchableWithoutFeedback>
      
      <AppTitle
                          title={'Create Blog'}
                          titleStyle={{
                              marginLeft:scale(22),
                              color:"#000",
                              fontSize:scale(24),
                              fontWeight:'600'
                          }}
                        />
    </View>
  )
}

// // Prop type warnings
// Header.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// Header.defaultProps = {
//   someSetting: false
// }

export default Header
