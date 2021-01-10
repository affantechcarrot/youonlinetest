import { StyleSheet } from 'react-native'
import { scale } from '../../common'

export default StyleSheet.create({
  authbuttonswrapper:{
    flexDirection:"row",
    justifyContent:"center"
  },
  loginbutton:{
   backgroundColor:"#FFA61A",
   flex:1,
   justifyContent:"center",alignItems:"center",
   borderRadius:scale(12),
   paddingVertical:scale(15)
  },
  signUpbutton:{
   
    flex:1,
    marginLeft:scale(10),
    justifyContent:"center",alignItems:"center",
    borderRadius:scale(12),
    borderWidth:scale(2),borderColor:'#fff'
   },
   authtext:{
     color:"#fff",
     fontSize:scale(16),
     fontWeight:"bold"
   },
   introtext:{
     fontWeight:"bold",
     color:"#fff",
     textAlign:"center",
     fontSize:scale(22)
   },
   sharetext:{
     color:"#fff",
     textAlign:"center",
     marginTop:scale(10),
     marginBottom:scale(40),
     fontSize:scale(14)
   }
})
