/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {

  return (
    <View>
      <View style={styles.top}></View>
      <View style={styles.middle}>
        <View style={styles.left}></View>
        <View style={styles.right}>
          <View style={styles.silver}></View>
          <View style={styles.forest}></View>
          <View style={styles.white}></View>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
}



const styles = StyleSheet.create({
  top: {
    height: 100,
    width: '100%',
    backgroundColor: 'yellow'
  },
  middle: {
    width: '100%',
    height: '77%',
    flexDirection: 'row'
  },
  bottom: {
    height: 100,
    width: '100%',
    backgroundColor: 'red'
  },
  left: {
    flex: 1,
    backgroundColor: 'blue',
    height: '100%'
  },
  right: {
    flex: 3,
    height: '100%',
    flexDirection: 'column'
  },
  silver: {
    flex: 1,
    backgroundColor: 'silver',
    width: '100%',
  },
  forest: {
    width: '100%',
    flex: 3,
    backgroundColor: 'green',
  },
  white: {
    flex: 1,
    height: 100,
    width: '100%'
  }
});

export default App;
