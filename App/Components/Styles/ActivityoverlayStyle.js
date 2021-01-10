import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  activityIndicator:{
    flex: 1,
        justifyContent: 'center',
        alignItems:'center',position:"absolute",top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        zIndex:9999
  },
})
