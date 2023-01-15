import React, { useRef } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';

export const Animation102Screen = () => {

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: true}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
        <Animated.View 
        {...panResponder.panHandlers}
            style={{
              ...styles.purpleBox, transform: [{
                translateX: pan.getLayout().left,
              }, {
                translateY: pan.getLayout().top
              }]
            }}
        />
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  purpleBox: {
    backgroundColor: "#75CEDB",
    width: 150,
    height: 150
}
});