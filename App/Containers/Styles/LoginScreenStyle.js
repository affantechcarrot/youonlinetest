import { StyleSheet } from 'react-native'
import { scale } from '../../common'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  loginbottom:{
    justifyContent:"flex-end",alignItems:"center",flex:1,marginBottom:scale(20),
   
  },
  loginBottomText:{
    color:"#757575",
    fontSize:scale(13)
  },
  signUptext:{
    color:'#00CC33',
    marginLeft:scale(1),
    fontWeight:"bold"
  },
  bottomWrap:{
    flexDirection:"row"
  },

  inputStyle:{
    backgroundColor:"#F4F4F4",
    height:scale(45),
    width:"100%",
   borderRadius:scale(12),
   paddingLeft:scale(10),
  
  },

  titleStyle:{
    marginVertical:scale(7),
    color:"#88888B",
    fontWeight:"600",
    fontSize:scale(12)
  },
  passwordStyle:{
    marginTop:scale(40)
  },
  formwrapper:{
    marginTop:scale(40)
  },
  fgtpasswordStyleWrapper:{
    marginTop:scale(12),
    alignItems:"flex-end"
  },
  fgtpasswordStyle:{
    color:'#282828',fontSize:scale(14)
  },
  AuthbuttonStyle:{
    backgroundColor:'#00CC33',
    borderRadius:scale(12),
    marginTop:scale(40)
  },
  buttonTextStyle:{
    fontWeight:"bold",
    color:'#fff',
    fontSize:scale(16)  
  },
  genderRound:{
    width:scale(20),height:scale(20),
    borderRadius:100,
    borderWidth:scale(1),
    borderColor:'#999999'
  },
  genderspace:{
    marginLeft:scale(10)
  },
  size:{
    fontSize:scale(14)
  },
  checkRound:{
    width:scale(20),height:scale(20),
    borderRadius:scale(6),
    borderWidth:scale(1),
    borderColor:'#999999'
  },
  ppWrap:{
  
   width:scale(280)
  },
  pp:{
    marginLeft:scale(10),
    lineHeight:scale(20),
    color:"#999999",
    fontSize:scale(13),
    fontWeight:"600"
  },
  orcondition:{
   flexDirection:"row" ,
   justifyContent:"center",alignItems:"center",
   marginTop:scale(30)
  },
  orstyle:{
    marginHorizontal:scale(20),
    color:"#999999",
    fontWeight:"600"
  },
  tc:{
    color:"#00CC33",
    fontWeight:"bold"
  },
  lineStyle:{
    width:scale(100),
    height:scale(0.5),
    backgroundColor:"#999999"
  },
  

})
