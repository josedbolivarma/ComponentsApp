import { createContext, useReducer, useEffect } from 'react';
import { themeReducer, ThemeState, lightTheme, darkTheme } from './themeReducer';
import { useColorScheme, AppState, Appearance } from 'react-native';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
    
    // const colorScheme = useColorScheme(); Only in IOS

    const [theme, dispatch] = useReducer( themeReducer, Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme ); // Leer el tema global...

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if ( status === 'active' ) {
                (Appearance.getColorScheme() === 'light') 
                    ? setLightTheme()
                    : setDarkTheme();
            }
        });
    }, []);
    

    // useEffect(() => {
    //     (colorScheme === 'light') 
    //         ? setLightTheme()
    //         : setDarkTheme();
    // }, [colorScheme]);
    

    const setDarkTheme = ( ) => {
        dispatch({ type: 'set_dark_theme' });
        console.log("setDarkTheme");
    }

    const setLightTheme = ( ) => {
        dispatch({ type: 'set_light_theme' });
        console.log("setLightTheme");
    }

    return (
        <ThemeContext.Provider value={{
            // Methods
            setDarkTheme,
            setLightTheme,
            // Properties
            theme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}