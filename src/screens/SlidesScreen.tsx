import React from 'react'
import { SafeAreaView, ImageSourcePropType, Text, Dimensions, LogBox } from 'react-native';

// import Carousel from 'react-native-snap-carousel';

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");


interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../../assets/slide-3.png')
    },
]

export const SlidesScreen = () => {

  const renderItem = ( item: Slide ) => {
    return (
        <Text>{ item.desc }</Text>
    )
  }

  return (
    <SafeAreaView
        style={{
            flex: 1,
            backgroundColor: 'red',
            paddingTop: 50
        }}
    >
        {/* <Carousel 
            data={ items }
            renderItem={ ({ item }: any) => renderItem(item) }
            sliderWidth={ screenWidth }
            itemWidth={ screenWidth }
        /> */}

    </SafeAreaView>
  )
}
