import { StyleSheet } from 'react-native'
import { scale } from '../../common'

export default StyleSheet.create({
  contentWrap:{
    marginHorizontal:scale(25),
    backgroundColor:"#fff",
    marginTop:scale(-40),
    borderRadius:scale(12),
    padding:scale(20)
  },
  boxShadow:{
    shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 9.65,
        elevation: 5,
  },
  header:{
    fontWeight:"bold",
    fontSize:scale(18)
  },
  subheader:{
    fontSize:scale(14),
    marginVertical:scale(15),
    color:'#999999',
    lineHeight:scale(18),
   
  },
  categoryTitle:{
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
    borderRadius:scale(10),
    position:"absolute",
    zIndex:99999,
    top:scale(15),
    right:scale(20),
    
    
  },
  catStyle:{
    color:"#fff",
    fontSize:scale(12),
    fontWeight:"600",
    paddingVertical:scale(8),
    paddingHorizontal:scale(20)
  }
})
