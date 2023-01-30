import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    Animated,
    View,
    SafeAreaView,
    Switch,
} from 'react-native';

function Main(): JSX.Element {
    const [isMorning, setIsMorning] = useState(true);

    // morning 
    const translateX_sun = useRef(new Animated.Value(0)).current;
    const opacity_sun = useRef(new Animated.Value(0)).current;
    const translateY_sun = useRef(new Animated.Value(0)).current;
    const morning_sky_opacity = useRef(new Animated.Value(0)).current;
    const zIndex_night = useRef(new Animated.Value(10)).current;
    // ---------

    // night
    const night_sky_opacity = useRef(new Animated.Value(1)).current;
    const translateY_moon = useRef(new Animated.Value(0)).current;
    const translateX_moon = useRef(new Animated.Value(0)).current;
    const opacity_moon = useRef(new Animated.Value(1)).current;
    const zIndex_mor = useRef(new Animated.Value(0)).current;
    // -----------

    // const interpolateCircularMotionOverY = (snapshot: number, radius: number) => {
    //     const inputRange = [];
    //     const outputRange = [];
    //     for (let i = 0; i <= snapshot * 2; ++i) {
    //       const value = i / snapshot;
    //       const move = -Math.cos(value * Math.PI * 2) * radius;
    //       inputRange.push(value);
    //       outputRange.push(move);
    //     }
    //     return { inputRange, outputRange };
    // }

    // const interpolateCircularMotionOverX = (snapshot: number, radius: number) => {
    //     const inputRange = [];
    //     const outputRange = [];
    //     for (let i = 0; i <= snapshot * 2; ++i) {
    //       const value = i / snapshot;
    //       const move = Math.sin(value * Math.PI * 2) * radius;
    //       inputRange.push(value);
    //       outputRange.push(move);
    //     }
    //     return { inputRange, outputRange };
    // }
    
    const duration = 2000;

    useEffect(() => {
        // morning
        Animated.timing(translateX_sun, {
            toValue: isMorning ? 130 : 290,
            duration,
            useNativeDriver: true,
        }).start()
        Animated.timing(opacity_sun, {
            toValue: !isMorning ? 0 : 1,
            duration,
            useNativeDriver: true,
        }).start()
        Animated.timing(translateY_sun, {
            toValue: !isMorning ? -140 : 0,
            duration,
            useNativeDriver: true
        }).start()
        Animated.timing(morning_sky_opacity, {
            toValue: !isMorning ? 0 : 1,
            duration,
            useNativeDriver: true,
        }).start()
        Animated.timing(zIndex_mor, {
            toValue: !isMorning ? -10 : 10,
            duration,
            useNativeDriver: true,
        }).start()
        // ---------

        // night
        Animated.timing(zIndex_night, {
            toValue: isMorning ? -10 : 10,
            duration,
            useNativeDriver: true,
        }).start()

        Animated.timing(translateX_moon, {
            toValue: !isMorning ? 130 : -70,
            duration,
            useNativeDriver: true,
        }).start()
        Animated.timing(opacity_moon, {
            toValue: isMorning ? 0 : 1,
            duration,
            useNativeDriver: true,
        }).start()
        Animated.timing(translateY_moon, {
            toValue: isMorning ? 120 : 0,
            duration,
            useNativeDriver: true
        }).start()
        Animated.timing(night_sky_opacity, {
            toValue: !isMorning ? 1 : 0,
            duration,
            useNativeDriver: true,
        }).start()
    }, [isMorning])
    return (
        <SafeAreaView style={styles.main_section}>
            <View style={styles.switch_section}>
                <Switch
                    onValueChange={() => setIsMorning(!isMorning)}
                    value={isMorning}
                    trackColor={{ false: '#053667', true: '#053667' }}
                    ios_backgroundColor='#053667'
                    thumbColor='orange'
                />
            </View>
            <View style={styles.animation_section}>
                <View style={styles.animation_main_section}>
                    <Animated.Image
                        style={[styles.sun,
                            { transform: [{ translateX: translateX_sun }, { translateY: translateY_sun }], opacity: opacity_sun }]}
                        source={require('./assest/sun.png')}
                    />
                    <Animated.Image
                        style={[styles.moon,
                        { transform: [{ translateX: translateX_moon }, { translateY: translateY_moon }], opacity: opacity_moon }]}
                        source={require('./assest/moon.png')}
                    />
                    <Animated.Image style={[styles.sky, { opacity: morning_sky_opacity }]} source={require("./assest/morningSky.png")} />
                    <Animated.Image style={[styles.sky, { opacity: night_sky_opacity }]} source={require("./assest/nightSky.png")} />
                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    main_section: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    switch_section: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        zIndex: 10,
        backgroundColor: 'transparent',
    },
    animation_section: {
        width: '100%',
        height: '111%',
        zIndex: 1,
        position: 'absolute',
    },
    animation_main_section: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    sun: {
        width: 60,
        height: 60,
        position: 'absolute',
        top: '45%',
        zIndex: 100,
        // left: '30%'
    },
    moon: {
        width: 60,
        height: 70,
        position: 'absolute',
        top: '45%',
        zIndex: 100,
    },
    sky: {
        zIndex: 10,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        position: 'absolute'
    },
    star: {
        position: 'absolute',
        width: 215,
        height: 138,
        zIndex: 200,
        top: '45%',
    }
})

export default Main;
