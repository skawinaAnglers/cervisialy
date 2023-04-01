import React, { useEffect, useCallback} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import { requestCameraPermissionsAsync } from 'expo-camera'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'
import CameraWithControls from '../components/CameraWithControls'

const CameraScreen: React.FC = () => {
  const tailwind = useTailwind()
	const { navigate, reset } = useNavigation()

	const getCameraPermissions = async () => {
		const { status } = await requestCameraPermissionsAsync()
		if (status !== 'granted') {
			Toast.show({
				type: 'error',
				text1: 'Camera permissions not granted',
				text2: 'Please enable camera permissions in your device settings'
			})
			reset({
				index: 0,
				routes: [{ name: 'HomeScreen' as never }]
			})
		}
	}

	useEffect(() => {
		getCameraPermissions()
	}, [])


	const uploadImage = useCallback((uriFront: string, uriBack: string) => {
		if (!uriFront || !uriBack) return
		try {
			navigate({
				name: 'AddPostScreen' as never,
				params: {
					uriFront,
					uriBack
				} as never
			} as never)
		} catch (error) {
			Toast.show({
				type: 'error',
				text1: 'Error',
				text2: error instanceof Error ? error.message : 'Something went wrong. Please, try again later'
			})
		}
	}, [])

  return (
    <View style={[tailwind('px-6 pt-6 bg-neutral-900')]}>
      <SafeAreaView>
				<View
					style={[
						tailwind('flex flex-row justify-between')
					]}
				>
					<Text style={ [ tailwind('font-bold text-4xl mb-12 text-neutral-300 mt-2') ] }>
						Camera
					</Text>
					<Text style={ [ tailwind('font-bold text-4xl mb-12 text-neutral-300 mt-2') ] }>
						{`<-`}
					</Text>
				</View>
				
				<CameraWithControls fire={uploadImage}/>
      </SafeAreaView>
    </View>
  )
}

export default CameraScreen
