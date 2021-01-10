import { StyleSheet } from 'react-native'
import { scale } from '../../common'

export default StyleSheet.create({
  inputStyle:{
    backgroundColor:"#F4F4F4",
    height:scale(45),
    width:"100%",
    borderRadius:scale(12),
    paddingLeft:scale(40),
  
  },
  searchicon:{
    position:"absolute",
    top:scale(25),
    bottom:0,
    left:scale(15),
    zIndex:99999
  }
})
