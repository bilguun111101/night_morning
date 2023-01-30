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
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native';
import { Product } from './Build';
import movies from "./movies_data.json";


export const Main = (): JSX.Element => {
    return (
        <SafeAreaView style={styles.Main}>
            <View style={styles.container}>
                <Text style={styles.Main_title}>Movies</Text>
                <ScrollView style={styles.products}>
                    { movies?.map((el, idx) => <Product data={el} key={idx} />) }
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Main: {
        backgroundColor: '#566573',
        width: '100%',
        height: '100%',
    },
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 27,
        paddingRight: 27,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    Main_title: {
        fontSize: 30,
        color: '#fff',
    },
    products: {
        flexDirection: 'column',
        gap: 10,
        width: '100%',
        height: '95%',
    },
})