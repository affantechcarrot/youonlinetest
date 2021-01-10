import React from 'react'
// import PropTypes from 'prop-types';
import {View,Text,TouchableWithoutFeedback,FlatList,Card,scale
} from '../common'
import styles from './Styles/ListcardStyle'

const AppTitle = (props) => {

  const {titleStyle,title,isNavigate,onNavigate} = props;
  return (
   
       <View >
      <Text style={[titleStyle]}>
        {title}
      </Text>
    </View>
   
   
  )
}


export default AppTitle
