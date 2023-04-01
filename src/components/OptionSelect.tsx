import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { useTailwind } from "tailwind-rn";
import RNPickerSelect from 'react-native-picker-select-updated';


interface OptionSelectPayload {
	value: unknown,
	onValueChange: (value: unknown) => void,
	onClose: () => void,
	items: { label: string, value: unknown }[],
	label: string,
	viewContainerStyle?: StyleProp<ViewStyle>
	inputIOSStyle?: StyleProp<ViewStyle>
}

const OptionSelect: React.FC<OptionSelectPayload> = ({
	value,
	onValueChange,
	onClose,
	items,
	label,
	viewContainerStyle,
	inputIOSStyle,
}) => {

	const tailwind = useTailwind();

	return (
		<>
			<View>
				<Text>
					{ label }
				</Text>
			</View>
			<RNPickerSelect
				style={{
					viewContainer: { ...viewContainerStyle },
					inputIOS: { ...inputIOSStyle }
				}}
				value={value}
				onValueChange={onValueChange}
				onClose={onClose}
				useNativeAndroidPickerStyle={false}
				items={items}
			/>
		</>
	)
}

export default OptionSelect;