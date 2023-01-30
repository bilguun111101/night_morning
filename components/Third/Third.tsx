/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Alert,
  Button,
  Appearance,
  Switch,
  Animated,
  TextInput
} from 'react-native';

function Third(): JSX.Element {

  const [count, setCount] = useState(0)
  const [mood, setMood] = useState(false)
  const fadeAnim = useRef(new Animated.Value(0)).current
  const [inputText, setInputText] = useState<string>("");

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'photo', [
      {
        text: 'ok',
        onPress: () => setCount(count + 1)
      }
    ])

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    })
  }, [])
  useEffect(() => {
    console.log(inputText)
  }, [inputText])

  return (
    <SafeAreaView>
      <View>
        <Text>{ count }</Text>
        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'red' : 'white', flexDirection: 'column' }]} onPress={() => setCount(count + 1)}>
          {({ pressed }) => {
            return (
              <Animated.View style={{ shadowOpacity: fadeAnim }}>
                <Text 
                  style={{ backgroundColor: mood ? 'white' : 'black', color: !mood ? 'white' : 'black' }}
                >{!pressed ? "Press me" : "Pressed"}</Text>
              </Animated.View>
            )
          }}
        </Pressable>
        <TouchableOpacity onPress={() => { }}>
          <View style={{ width: 100, height: 60, backgroundColor: '#000' }}>
            <Text style={{ color: '#fff' }}>Hello</Text>
          </View>
        </TouchableOpacity>

        {/* <Alert title={"alert"} ></Alert> */}
        <Button title={"hello"} onPress={createThreeButtonAlert}>hi</Button>
        <Switch onValueChange={() => setMood(!mood)} value={mood} />
        <TextInput 
          style={{ width: 100, borderColor: 'black', borderWidth: 1 }} 
          value={inputText} 
          onChangeText={setInputText} 
          keyboardType={'number-pad'} 
        />
      </View>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({})

export default Third;
