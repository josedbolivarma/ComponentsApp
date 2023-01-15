import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { styles } from '../theme';
import { FlatListMenuItem, HeaderTitle } from '../components';
import { menuItems } from '../data/menuItems';


export const HomeScreen = () => {

  const itemSeparator = () => {
    return (
      <View 
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
        <FlatList 
          data={ menuItems }
          renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item }/>}
          keyExtractor={ (item) => item.name }
          ListHeaderComponent={ () => <HeaderTitle title='Opciones de menu' /> }
          ItemSeparatorComponent={ itemSeparator }
        />
    </View>
  )
}