import {
	View,
	TextInput,
	StyleProp,
	ViewStyle,
	NativeSyntheticEvent,
	TextInputKeyPressEventData,
	TouchableOpacity
} from 'react-native'
import React, { useMemo } from 'react'
import { SvgProps } from 'react-native-svg'
import { useTailwind } from 'tailwind-rn'
import VisibleIcon from '../assets/VisibleIcon'
import NotVisibleIcon from '../assets/NotVisibleIcon'


interface TextInputPayload {
	placeholder?: string,
	value: string,
	onChangeText: (text: string) => void,
	charLimit?: number,
	icon?: React.FC<SvgProps>,
	style?: StyleProp<ViewStyle>,
	switchVisibility?: boolean,
	onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void,
	onPressOut?: () => void,
	onSubmit?: () => void
}
const RegularTextInput: React.FC<TextInputPayload> = ({
	placeholder,
	value,
	onChangeText,
	switchVisibility = false,
	charLimit,
	icon: IconComponent,
	style,
	onKeyPress,
	onPressOut,
	onSubmit
}) => {
	const tailwind = useTailwind()
	const [visible, setVisible] = React.useState<boolean>(false)

	const VisiblityIcon: JSX.Element = useMemo(() => {
		const props = {
			width: 22,
			height: 22,
			fill: tailwind('text-neutral-400').color as string
		}

		return visible ? <VisibleIcon {...props} /> : <NotVisibleIcon {...props} />
	}, [visible])

	const onChange = (text: string) => {
		if (charLimit && text.length > charLimit) {
			onChangeText(text.slice(0, charLimit))
			return
		}
		onChangeText(text)
	}
	
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
								tailwind('absolute left-4 z-20 flex items-center justify-center'),
							]}
						>
							<IconComponent
								width={24}
								height={24}
								fill={tailwind('text-neutral-400').color as string}
							/>
						</View>
					)
				}

				{
					switchVisibility && (
						<TouchableOpacity
							style={[
								tailwind('absolute right-0 mr-4 z-20 flex items-center justify-center'),
							]}
							onPress={() => setVisible(!visible)}
						>
							{VisiblityIcon}
						</TouchableOpacity>
					)
				}
				
				<TextInput 
					placeholder={placeholder || ''}
					value={value}
					onChangeText={onChange}
					style={[
						tailwind(`mt-1 border border-neutral-700 font-light w-full rounded-md p-4 text-neutral-100 bg-neutral-700`),
						IconComponent && tailwind('pl-12'),
						switchVisibility && tailwind('pr-12')
					]}
					secureTextEntry={switchVisibility && visible}
					autoCapitalize='none'
					returnKeyType='done'
					placeholderTextColor={tailwind('text-neutral-100/70').color as string}
					onSubmitEditing={onSubmit}
					onKeyPress={onKeyPress}
					onPressOut={onPressOut}
				/>
			</View>
		</View>
	)
}

export default RegularTextInput