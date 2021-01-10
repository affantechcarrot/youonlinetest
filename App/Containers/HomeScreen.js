import React, { useState,useEffect } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import {Root,Container,Content,Header,Title,Body,ActivityIndicator,Toast,View,RNBootSplash
} from '../common'
import CommonAction from '../Redux/CommonRedux'
import {useDispatch, useSelector} from 'react-redux'


const HomeScreen= (props) => {
  const dispatch = useDispatch();
  const {formData} = useSelector(state =>({
    all :state.formData,
    formData : state.formData,
  }));

  
  useEffect(() => {
    RNBootSplash.hide({ fade: true }); // 
  }, [])


return (
  <Root>
  <Container>
    <Content>
    <View style={{flex:1}}>
       <Text>asdasd</Text>
    </View>
      
    </Content>
  </Container>
</Root>
)
 
};



export default HomeScreen;
