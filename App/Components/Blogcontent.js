import React from 'react'
// import PropTypes from 'prop-types';
import {MIcon,View,Text,FlatList, Colors, Fonts,FastImage,Image,Icon} from '../common'
import styles from './Styles/BlogcontentStyle'
import Imagecard from '../Components/Imagecard'
import { scale } from '../common'
const Blogcontent = (props) => {
  const {data} = props

  
  const renderItem = ({ item,index }) => {
    return (
  <View style={{marginBottom:scale(20)}}>
      <View style={[styles.categoryTitle]}>
        <Text style={[styles.catStyle]}>Other</Text>
      </View>
      <Imagecard
        resizeMode={'cover'}
        img ={`${item.postFile_full}`}
        imageStyle={{ width:'100%',height:scale(200),backgroundColor:"gray" }}
       />
       <View style={[styles.contentWrap,styles.boxShadow]}>
         <Text numberOfLines={2} style={[styles.header]}>
        {item.postLinkTitle || 'No Text'}
         </Text>
         <Text numberOfLines={4} style={[styles.subheader]}>
         {item.postText || 'No Text'}
         </Text>
         <View style={{flexDirection:"row",alignItems:"center"}}>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <MIcon name={'clock'} size={scale(20)}  color={'#C3C2C9'}/>
              <Text style={{fontSize:scale(13),color:'#00CC33',marginLeft:scale(12),marginRight:scale(12)}}>{`08 Dec, 2020`}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
               <MIcon name={'account'} size={scale(20)} color={'#C3C2C9'}/>
               <Text style={{fontSize:scale(13),color:'#00CC33',marginLeft:scale(12)}}>{item.publisher.first_name}</Text>
               
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
    contentContainerStyle={{}}
   // ListEmptyComponent={()=>{return <Emptylisting emptyText={'Sorry! No Data Found!'}/>}} 
 
  />
  )
}



export default Blogcontent
