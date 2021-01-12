import React from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/SearchboxStyle'
import Inputbox from '../Components/Inputbox'
import { Icon, scale } from '../common'
const Searchbox = () => {
  return (
    <View style={{marginTop:scale(10),position:"relative"}}>
        <View style={[styles.searchicon,{top:scale(32)}]}>
          <Icon name={'search'} size={scale(15)}/>
        </View>
       <Inputbox
         inputStyle={styles.inputStyle}
         placeholder={'Search for article'}
       />
    </View>
   
  )
}


export default Searchbox
