import {
	View,
	TextInput,
	StyleProp,
	ViewStyle,
	NativeSyntheticEvent,
	TextInputKeyPressEventData
} from 'react-native'
import React, { useMemo } from 'react'
import { SvgProps } from 'react-native-svg'
import { useTailwind } from 'tailwind-rn'


type TextInputPayload = {
	placeholder?: string,
	value: string,
	onChangeText: (text: string) => void,
	required?: boolean,
	charLimit?: number,
	icon?: React.FC<SvgProps>,
	style?: StyleProp<ViewStyle>,
	isInvalid?: boolean,
	onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void,
	onPressOut?: () => void,
	onSubmit?: () => void
}
const RegularTextInput: React.FC<TextInputPayload> = ({
	placeholder,
	value,
	onChangeText,
	required = false,
	charLimit,
	icon: IconComponent,
	style,
	isInvalid = false,
	onKeyPress,
	onPressOut,
	onSubmit
}) => {
	const tailwind = useTailwind()

	const onChange = (text: string) => {
		if (charLimit && text.length > charLimit) {
			onChangeText(text.slice(0, charLimit))
			return
		}
		onChangeText(text)
	}

	const isValid = useMemo(() => {
		if (!required) return true
		if (isInvalid) return false
		if (value.length > 0) return true
		return false
	}, [isInvalid, value, required])
	
	return (
		<View
			style={[
				tailwind('flex-grow flex justify-center w-full'),
				style
			]}
		>
			
			<View style={[tailwind('relative flex items-center justify-center w-full')]}>
				{
					IconComponent && (
						<View
							style={[
								tailwind('absolute right-0 mr-4 z-20 flex items-center justify-center'),
							]}
						>
							<IconComponent
								width={22}
								height={22}
								fill={tailwind(`text-${isValid ? 'slate' : 'red'}-500`).color as string}
							/>
						</View>
					)
				}
				
				<TextInput 
					placeholder={placeholder || ''}
					value={value}
					onChangeText={onChange}
					style={[
						tailwind(`mt-1 border border-slate-800 font-light w-full rounded-md p-4 pr-12 text-slate-300 bg-slate-800`),
						!isValid && tailwind('border-red-500'),
					]}
					autoCapitalize='none'
					returnKeyType='done'
					placeholderTextColor={tailwind('text-slate-500').color as string}
					onSubmitEditing={onSubmit}
					onKeyPress={onKeyPress}
					onPressOut={onPressOut}
				/>
			</View>
		</View>
	)
}

export default RegularTextInput