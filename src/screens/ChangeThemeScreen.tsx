import React, { useContext } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { HeaderTitle } from '../components';
import { styles } from '../theme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {

  const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext);

  return (
    <View style={ styles.globalMargin }>
        <HeaderTitle title='Theme' />
        
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity 
        onPress={ setLightTheme }
        activeOpacity={0.8}
        style={{
            height: 50,
            width: 150,
            backgroundColor: colors.primary,
            justifyContent: "center",
            borderRadius: 20
        }}>
            <Text style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20
            }}>
                Light
            </Text>
            
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={ setDarkTheme }
        activeOpacity={0.8}
        style={{
            height: 50,
            width: 150,
            backgroundColor: colors.primary,
            justifyContent: "center",
            borderRadius: 20
        }}>
            <Text style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20
            }}>
                Dark
            </Text>
            
        </TouchableOpacity>
        </View>
    </View>
  )
};