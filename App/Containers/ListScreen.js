import React, { useEffect,useState } from 'react'

import Listcard from '../Components/Listcard'
import {Root,Container,Content,Header,Title,Body,ActivityIndicator,Left,Right, TouchableOpacity,Text,View,Toast
} from '../common'
import CommonAction from '../Redux/CommonRedux'
import {useDispatch, useSelector} from 'react-redux'
import styles from './Styles/ListScreenStyle'

const  ListScreen= (props) => {
  const [fetching,setFetching] = useState(false);
  const {navigation} = props;
  const {listData} = useSelector(state =>({
    listData :state.formData
  }));
 

  const dispatch = useDispatch();

  useEffect(() => {
    setFetching(true);
    dispatch(CommonAction.commonDataRequest())
   }, [])

   useEffect(() => {
    if(listData.error == false && listData.payload != null){
      setFetching(listData.fetchingList)
    }
    if(listData.error == true ){
           setFetching(listData.fetchingList)
          Toast.show({
            text: "Something went wrong With the API",
            buttonText: "Okay",
            buttonTextStyle: { color: "#008000" },
            buttonStyle: { backgroundColor: "#5cb85c" }
          })
    }
   // dispatch(CommonAction.commonDataRequest())
   }, [listData])

  
    return (
      <Root>
      <Container>
        <Header>
          <Left  style={{flex:1}}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Text>back</Text>
            </TouchableOpacity>
          </Left>
          <Body  style={{flex:1}}>
            <Title>List</Title>
          </Body>
          <Right style={{flex:1}}>
          </Right>
        </Header>
        <Content >
       {fetching ?<View style={{flex:1}}>
           <ActivityIndicator size="small" color="#0000ff" animating={fetching} />
        </View>:<View/>}
        <Listcard
          listData={(listData != undefined ) ? listData.payload : []}
        />
        </Content>
      </Container>
    </Root>
        

    )
  
}



export default ListScreen;
