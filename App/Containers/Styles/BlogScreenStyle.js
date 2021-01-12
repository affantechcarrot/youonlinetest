import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { scale } from '../../common'

export default StyleSheet.create({
  blogcontent:{
    flex:1,marginTop:scale(20)
  },
  blogHeader:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  createButton:{
    flexDirection:"row",
    backgroundColor:"#F6F6F6",
    borderRadius:scale(12),
    alignItems:"center",
    width:scale(100),
    justifyContent:"center",
    paddingVertical:scale(10)
   
  },
  blogWrapper:{
    marginTop:scale(25)
  }
})
