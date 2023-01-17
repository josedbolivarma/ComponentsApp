import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { AlertScreen, Animation101Screen, Animation102Screen, ChangeThemeScreen, CustomSectionListScreen, HomeScreen, InfiniteScrollScreen, ModalScreen, PullToRefreshScreen, SlidesScreen, SwitchScreen, TextInputScreen } from '../screens';
import { View } from 'react-native';

const Stack = createStackNavigator();

export const Navigator = () => {

  const { theme } = useContext( ThemeContext );

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <NavigationContainer
      theme={ theme }
    >
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
              // backgroundColor: "#FFFFFF"
            }
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={ AlertScreen } />
      <Stack.Screen name="TextInputScreen" component={ TextInputScreen } />
      <Stack.Screen name="PullToRefreshScreen" component={ PullToRefreshScreen } />
      <Stack.Screen name="CustomSectionListScreen" component={ CustomSectionListScreen } />
      <Stack.Screen name="ModalScreen" component={ ModalScreen } />
      <Stack.Screen name="InfiniteScrollScreen" component={ InfiniteScrollScreen } />
      <Stack.Screen name="SlidesScreen" component={ SlidesScreen } />
      <Stack.Screen name="ChangeThemeScreen" component={ ChangeThemeScreen } />
    </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}