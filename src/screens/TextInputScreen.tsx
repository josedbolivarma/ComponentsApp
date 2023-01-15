import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components';
import { styles } from '../theme';

export const TextInputScreen = () => {
  return (
    <View style={ styles.globalMargin }>
        <HeaderTitle title="TextInputs" />

        <TextInput 
            style={ stylesScreen.inputStyle }
        />
    </View>
  )
}


const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10
    }
});