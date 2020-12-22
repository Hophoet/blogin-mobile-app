/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Store from './redux/store/storeConfigurations'
import { persistStore } from 'redux-persist'

import Main from './navigations/Navigators'



export default class App extends React.Component{
  render(){
    let persistor = persistStore(Store)

    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Main/>
        </PersistGate>
      </Provider>
    );
  }
}



