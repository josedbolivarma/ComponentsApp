import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';
import { Navigator } from './src/navigator';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    // primary: '',
    background: 'black',
    // border: '',
    // card: '',
    // notification: '',
    // text: ''
  }
};

export default function App() {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
};