import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { styles } from '../theme';

interface Props {
    title: string;
}

export const HeaderTitle = ({ title }: Props ) => {
 
  const { top } = useSafeAreaInsets();


  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
        <Text style={{
            ...styles.title,
            color: "#5856D6"
        }}>{ title }</Text>
    </View>
  )
}
