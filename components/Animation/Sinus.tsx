import React, { useRef, useEffect, useState, FC } from 'react';
import { Animated, Pressable, Text, View, StyleSheet, SafeAreaView, Button, Easing } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';


export const Sinus: FC = (props) => {
    const fadeAnim = useRef(new Animated.ValueXY()).current;

    const infinite = (): void => {
        Animated.loop(
            Animated.timing(fadeAnim, {
                toValue: { x: 1, y: 500 },
                duration: 3000,
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
                    style={[
                        styles.thing,
                        {
                          transform: [{translateX: fadeAnim.x.interpolate({ inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1], outputRange: [0, 100, 0, 100, 0, 100] })}, {translateY: fadeAnim.y}],
                        },
                      ]}
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