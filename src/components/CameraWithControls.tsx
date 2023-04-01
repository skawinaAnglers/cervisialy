import { View } from 'react-native'
import React, { useState, useRef, useMemo, useCallback } from 'react'
import { Camera, CameraType } from 'expo-camera'
import { MotiView } from 'moti';
import { useTailwind } from 'tailwind-rn'
import { MotiPressable } from 'moti/interactions'
import Toast from 'react-native-toast-message'
import CameraIcon from '../assets/CameraIcon'

type CameraPayload = {
	fire: (frontUri: string, backUri: string) => void
}

const Shape = () => {
	const tailwind = useTailwind()
	return (
		<MotiView
			from={{
				opacity: 1,
			}}
			animate={{
				opacity: 0,
			}}
			transition={{
				loop: true,
				type: 'timing',
				duration: 1500,
				delay: 50,
			}}
			style={[
				tailwind('absolute w-full h-full bg-white z-2')
			]}
		/>
	)
}

const CameraWithControls: React.FC<CameraPayload> = ({ fire }) => {
	const tailwind = useTailwind()
	const cameraRef = useRef<Camera>(null)
	const [isBlinking, setIsBlinking] = useState<boolean>(false)

	const [type, setType] = useState<CameraType>(CameraType.back)


	const handleCapture = useCallback(async () => {
		if (!cameraRef.current) return
		try {
			const backPicture = await cameraRef.current.takePictureAsync({
				quality: 0.2
			})
			setIsBlinking(true)
			// eslint-disable-next-line no-promise-executor-return
			await new Promise(resolve => setTimeout(resolve, 1500))
			setType(CameraType.front)
			setIsBlinking(false)
			// eslint-disable-next-line no-promise-executor-return
			await new Promise(resolve => setTimeout(resolve, 2000))
			setIsBlinking(true)
			const frontPicture = await cameraRef.current.takePictureAsync({
				quality: 0.2
			})
			setIsBlinking(false)
			fire(frontPicture.uri, backPicture.uri)
		}	catch (error) {
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'Error',
				text2: 'Encountered an error while capturing photo'
			})
		}
	}, [cameraRef])

	return (
		<>
			{/* Camera */}
				<Camera
					ref={cameraRef}
					style={[
						tailwind('w-full rounded-lg relative z-[-1]'),
						{ aspectRatio: 1 }
					]}
					type={type}
					ratio='1:1'
				>
					{ isBlinking && <Shape /> }
				</Camera>
				{/* Take picture button */}
				<View style={[
					tailwind('relative w-full flex flex-row justify-center items-center mt-6')
				]}>
					<MotiPressable
						onPress={handleCapture}
						style={[
							tailwind('w-24 h-24 p-4 rounded-full bg-emerald-900 flex items-center justify-center')
						]}
						animate={useMemo(
							() => ({ hovered, pressed }) => {
								'worklet'
			
								return {
									opacity: hovered || pressed ? 0.8 : 1,
									scale: hovered || pressed ? 1.2 : 1,
								}
							},
							[]
						)}
						transition={useMemo(
							() => ({ hovered, pressed }) => {
								'worklet'

								return {
									delay: hovered || pressed ? 0 : 100,
									type: 'timing',
									duration: 100,
								}
							},
							[]
						)}
					>
						<CameraIcon width={48} height={48} stroke={tailwind('text-emerald-700/70').color as string} fill={tailwind('text-black/50').color as string}/>
					</MotiPressable>
				</View>
		</>
	)
}

export default CameraWithControls