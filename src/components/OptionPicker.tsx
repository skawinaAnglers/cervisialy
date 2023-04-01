import React from 'react'
import { View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select-updated'
import { useTailwind } from 'tailwind-rn'
import BeerIcon from '../assets/BeerIcon'

type OptionPickerPayload = {
	value: string,
	onValueChange: (value: string) => void,
	onClose: () => void,
	items: { label: string, value: string }[]
}

const OptionPicker: React.FC<OptionPickerPayload> = ({
	value,
	onValueChange,
	onClose,
	items,
}) => {
	const tailwind = useTailwind()

	return (
		<RNPickerSelect
			style={{
				viewContainer: tailwind('bg-neutral-700 relative rounded-lg px-4 pb-4 pt-2 mt-2 w-full'),
				inputIOS: tailwind('text-neutral-300 font-light text-xl')
			}}
			placeholder={{label: '🧋 Drink not found - press to select', value: ''}}
			value={value}
			onValueChange={onValueChange}
			onClose={onClose}
			useNativeAndroidPickerStyle={false}
			items={items}
		/>
	)
}

export default OptionPicker