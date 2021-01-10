import React from 'react'
// import PropTypes from 'prop-types';
import { View, Text,ActivityIndicator } from 'react-native'
import styles from './Styles/ActivityoverlayStyle'

const Activityoverlay = ({isLoading}) => {
  if(!isLoading){
    return null
  }
  return (
    
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="small" color="#0000ff" animating={isLoading} />
    </View>
  )
}


export default Activityoverlay
