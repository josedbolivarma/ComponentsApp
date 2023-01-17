import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { styles } from '../theme';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    title: string;
}

export const HeaderTitle = ({ title }: Props ) => {
 
  const { top } = useSafeAreaInsets();
  const { theme: { colors } } = useContext(ThemeContext);

  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
        <Text style={{
            ...styles.title,
            color: colors.text
        }}>
          { title }
        </Text>
    </View>
  )
}
