import 'react-native-gesture-handler'
import { Text, View, KeyboardAvoidingView, ScrollView, Platform, StatusBar } from 'react-native'
import { enableScreens } from 'react-native-screens';
enableScreens();
import '../Config'
//import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import AppNavigation from '../Navigation/AppNavigation'
import createStore from '../Redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';


import { Fonts, Colors } from '../Themes/index'

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, }} forceInset={{ top: "never",bottom:"never" }}  >
            <AppNavigation />
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>

    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default App;
