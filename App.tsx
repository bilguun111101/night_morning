/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Alert,
  Animated,
  View
} from 'react-native';
import Main from './components/Moon_and_sun/Main';

function App(): JSX.Element {
  return (
    <View>
      <Main />
    </View>
  );
}


const style = StyleSheet.create({})

export default App;
