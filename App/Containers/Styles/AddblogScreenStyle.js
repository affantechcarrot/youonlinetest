import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { scale } from '../../common'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  titleStyle:{
    marginVertical:scale(7),
    color:"#88888B",
    fontWeight:"600",
    fontSize:scale(12)
  },
 
  inputStyle:{
    backgroundColor:"#F4F4F4",
    height:scale(45),
    width:"100%",
   borderRadius:scale(12),
   paddingLeft:scale(10),
  
  },
  pickerstyle:{
    width: '100%' ,backgroundColor:"#F4F4F4",borderRadius:scale(12),height:scale(45),
    
  },
  ropecvWrapper:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:scale(25),
    backgroundColor:"#F4F4F4",
    borderRadius:scale(12),
    borderStyle:"dashed",
    borderWidth:scale(1),
    paddingVertical:scale(25)
  },
  ropecvstyle:{
    color:'#000000',
    marginTop:scale(5)
  }
})
