import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../components'
import { FadeInImage } from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
        newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
        setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = ( item: number ) => {
    return (
        <FadeInImage 
            uri={`https://picsum.photos/id/${item}/500/400`}
            style={{
                width: '100%',
                height: 400,
            }}
        />
    )
  };

  return (
    <View>
        
        <FlatList 
            data={ numbers }
            keyExtractor={ (item) => item.toString() }
            renderItem={ ({ item }) => renderItem(item) }
            
            ListHeaderComponent={ () => (
                <View style={{ marginHorizontal: 20 }}>
                    <HeaderTitle title='Infinite Scroll' />
                </View>
            )}
            
            onEndReached={ loadMore }
            onEndReachedThreshold={ 0.5 }
            
            ListFooterComponent={ () => (
                <View style={{
                    height: 150,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <ActivityIndicator 
                        size={25}
                        color="#5856D6"
                    />
                </View>
            )}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: "green",
        height: 150
    }
})