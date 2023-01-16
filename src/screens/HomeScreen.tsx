import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { styles } from '../theme';
import { FlatListMenuItem, HeaderTitle, ItemSeparator } from '../components';
import { menuItems } from '../data/menuItems';


export const HomeScreen = () => {

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
        <FlatList 
          data={ menuItems }
          renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item }/>}
          keyExtractor={ (item) => item.name }
          ListHeaderComponent={ () => <HeaderTitle title='Opciones de menu' /> }
          ItemSeparatorComponent={ ItemSeparator }
        />
    </View>
  )
}