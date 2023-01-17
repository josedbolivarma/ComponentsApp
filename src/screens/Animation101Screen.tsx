import React from 'react'
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {

  const { fadeIn, fadeOut, startMovingPosition, opacity, position } = useAnimation();
  const { theme: { colors }} = useContext(ThemeContext); 

  return (
    <View style={ styles.container }>
        <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                opacity,
                marginBottom: 20,
                transform: [{
                    translateY: position
                }]
            }}
        />

        <Button 
            title='FadeIn'
            onPress={ () => {
                fadeIn();
                startMovingPosition( 100 );
            }}
            color={ colors.primary }
        />

        <Button 
            title='FadeOut'
            onPress={ fadeOut }
            color={ colors.primary }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        width: 150,
        height: 150
    }
});