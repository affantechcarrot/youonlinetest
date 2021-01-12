import React from 'react'
// import PropTypes from 'prop-types';
import {MIcon,View,Text,FlatList, Colors, Fonts,FastImage,Image,Icon} from '../common'
import styles from './Styles/BlogcontentStyle'
import Imagecard from '../Components/Imagecard'
import { scale } from '../common'
const Blogcontent = (props) => {
  const {data} = props

  const  _listEmptyComponent = () => {
    return (
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text>No Data Found</Text>
      </View>
    )
}
  
  const renderItem = ({ item,index }) => {
    return (
      <View style={{marginBottom:scale(25)}}>
      <View style={[styles.categoryTitle]}>
        <Text style={[styles.catStyle]}>Other</Text>
      </View>
     { item.postFile_full == "" || item.postFile_full == undefined ?
     <Imagecard
        resizeMode={'cover'}
        inApp={true}
        img ={`${require('../Images/place-holder.png')}`}
        imageStyle={{ width:'100%',height:scale(180),backgroundColor:"gray" }}
       />
      :
      <Imagecard
      resizeMode={'cover'}
      img ={`${item.postFile_full}`}
      imageStyle={{ width:'100%',height:scale(200),backgroundColor:"gray" }}
     />
      }
       <View style={[styles.contentWrap,styles.boxShadow]}>
         <Text numberOfLines={2} style={[styles.header]}>
        {item.postLinkTitle || 'No Text'}
         </Text>
         <Text numberOfLines={4} style={[styles.subheader]}>
         {item.postText || 'No Text'}
         </Text>
         <View style={{flexDirection:"row",alignItems:"center"}}>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <MIcon name={'account'} size={scale(20)}  color={'#C3C2C9'}/>
              <Text style={{fontSize:scale(13),color:'#00CC33',marginLeft:scale(12),marginRight:scale(12)}}>{`08 Dec, 2020`}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
               <MIcon name={'account'} size={scale(20)} color={'#C3C2C9'}/>
               <Text style={{fontSize:scale(13),color:'#00CC33',marginLeft:scale(12)}}>{'Blogger'}</Text>
               
            </View>
         </View>
       </View>
    </View>
    )
  }
  return (
   
    <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={_listEmptyComponent}
    />
    
   
  )
}



export default Blogcontent
