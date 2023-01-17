import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../interfaces';
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  
  const navigation = useNavigation() as any;
//   const { colors } = useTheme();
     const { theme: { colors } } = useContext( ThemeContext );    
     
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={ () => navigation.navigate( menuItem.component )}
    >
        <View style={ styles.container }>
        <Ionicons 
            name={ menuItem.icon as any }
            color={ colors.primary }
            size={ 23 }
        />
        <Text style={{
            ...styles.itemText,
            color: colors.text
        }}>
            { menuItem.name }
        </Text>
        
        <View style={{ flex: 1 }} />

        <Ionicons 
            name="chevron-forward-outline"
            color={ colors.primary }
            size={ 23 }
        />
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 5,
        fontSize: 19
    }
});