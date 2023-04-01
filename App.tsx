// Libraries
import 'react-native-gesture-handler'
import React, { useCallback } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  useFonts,
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black
} from '@expo-google-fonts/lato'
import * as SplashScreen from 'expo-splash-screen'
import { useTailwind } from 'tailwind-rn'
import { Provider } from 'react-redux'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
// Components
import TailwindProvider from './src/components/tailwind/TailwindProvider'
// Utilities
import utilities from './tailwind.json'
import LoginScreen from './src/screens/LoginScreen'
import store from './src/store'


const Stack = createStackNavigator()

SplashScreen.preventAutoHideAsync()

const App = () => {
  const tailwind = useTailwind()
  const NavigationTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      primary: tailwind('text-emerald-900').color as string,
      card: tailwind('text-neutral-800').color as string,
      text: tailwind('text-neutral-300').color as string,
      border: tailwind('text-neutral-800').color as string,
      background: '#171717' // neutral-900
    }
  }

  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <TailwindProvider utilities={utilities}>
				<BottomSheetModalProvider>
					<NavigationContainer onReady={onLayoutRootView} theme={NavigationTheme}>
						<Stack.Navigator>
							<Stack.Screen
								name='Login'
								component={LoginScreen}
								options={{
									header: () => null
								}}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</BottomSheetModalProvider>
      </TailwindProvider>
    </Provider>
  )
}

export default App