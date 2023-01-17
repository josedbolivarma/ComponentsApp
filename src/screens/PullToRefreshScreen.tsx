import React, { useState } from 'react';
import { View, ScrollView, RefreshControl, SafeAreaView, Text } from 'react-native';
import { HeaderTitle } from '../components';
import { styles } from '../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {

  const { top } = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext); 

  const onRefresh = () => {
      setRefreshing(true);

      setTimeout(() => {
            console.log("Terminamos");
            setRefreshing(false);
            setData("Hola mundo");
      }, 1500);
  }

  return (
    // <SafeAreaView style={{ flex: 1 }}> Solution by react native safe area text
        <ScrollView
        style={{
            marginTop: refreshing ? top : 0
        }}
        refreshControl={
            <RefreshControl 
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={ 10 }
                titleColor='white'
                title='Refreshing'
                progressBackgroundColor={ dividerColor }
                colors={ [ colors.text ]}
                tintColor={ dark ? 'white' : 'black' }
                // style={{ backgroundColor: '#5856D6' }}
            />
        }
    >
        <View style={ styles.globalMargin }>
        <HeaderTitle title='Pull to refresh' />
        {
            data && <HeaderTitle title={ data } />
        }
    </View>
    </ScrollView>
    // </SafeAreaView>
  )
}
