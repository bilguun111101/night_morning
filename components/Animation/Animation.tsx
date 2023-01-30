import React, { useRef, useEffect, useState, FC } from 'react';
import { Animated, Pressable, Text, View, StyleSheet, SafeAreaView, Button, Easing } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';


export const Animation: FC = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const infinite = (): void => {
        Animated.loop(
            Animated.timing(fadeAnim, {
                toValue: 290,
                duration: 1000,
                easing: Easing.bounce,
                useNativeDriver: true,
            })
        ).start()
    }

    useEffect(() => {
        infinite()
    }, [fadeAnim])

    return (
        <SafeAreaView>
            <View style={styles.parent}>
                <Animated.View 
                    style={[ styles.thing, {transform: [{translateX: fadeAnim}]} ]}
                 />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    parent: {
        width: '100%'
    },
    thing: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        borderRadius: 50,
    }
})