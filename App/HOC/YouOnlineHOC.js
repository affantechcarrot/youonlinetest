import React, { useState,useEffect } from 'react'
import {Dimensions,useWindowDimensions,TouchableOpacity}  from 'react-native'
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome5Pro';
import { scale } from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux'
import AuthenticationAction from '../Redux/AuthenticationRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'



const  YouOnlineHOC = OriginalComponent => {
  const NewComponent = (props) =>{
    const dispatch = useDispatch();
  const  width =  Dimensions.get('window').width
  const height = Dimensions.get('window').height

  const [isVisible,setIsVisible] = useState(false);
  const [tempReceipt, setTempreceipt] = useState([]);
  const {navigation} = props;
  

    
     

  goBack = () =>{
    navigation.goBack();
  }
   const  onNavigate = (screenName,data = {}) =>{
      props.navigation.navigate(screenName,data)
    }

  

  
    return (
      <OriginalComponent 
        onNavigate = {onNavigate}
        onBack={goBack}
        navigation={navigation}
        dispatch={dispatch}
        AuthenticationAction={AuthenticationAction}
        useDispatch={useDispatch}
        useSelector={useSelector}

      />
    )
  };
    return NewComponent
  }

  export  default YouOnlineHOC;