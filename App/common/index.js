import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  ImageBackground,
  Image,
  Platform,
  FlatList,
  TouchableOpacity,
  Keyboard,
  Linking,PermissionsAndroid,TouchableWithoutFeedback,ActivityIndicator,
  Text,
  Alert,Easing

} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Config from '../Config/index';
import {scale} from 'react-native-size-matters'
import RNBootSplash from "react-native-bootsplash";
import  Icon  from 'react-native-vector-icons/FontAwesome';
import  FastImage  from 'react-native-fast-image2';
import {
  Body,
  Container,
  Button,
  Header,
  Content,
  Item,
  Input,
  CheckBox,
  Card,Root,Left,Right,Title,Picker,Toast
} from 'native-base';

import CKEditor from 'react-native-ckeditor';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export{
  KeyboardAwareScrollView,
  CKEditor,
  MIcon,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  ImageBackground,
  Image,
  Platform,
  FlatList,
  TouchableOpacity,
  Keyboard,
  Linking,PermissionsAndroid,TouchableWithoutFeedback,
  Container,
  Button,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Text,
  Card,Root,Body,Left,Right,Title,CheckBox,Picker,scale,ActivityIndicator,Toast,RNBootSplash,
  FastImage,
  Alert,Easing,Config
}