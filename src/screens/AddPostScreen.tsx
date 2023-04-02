import React, { PropsWithChildren, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from '@react-navigation/stack'
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message'
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import SmallerMainButton from "../components/SmallerMainButton";
import MainButton from "../components/MainButton";
import Separator from "../components/Separator";
import PreviewDisplay from "../components/PreviewDisplay";
import OptionPicker from "../components/OptionPicker";
import { RootState } from "../store";
import uploadImageAsync from "../helpers/uploadImageAsync";

interface AddPostParams {
	uriFront: string,
	uriBack: string
}

const AddPostScreen: React.FC<
PropsWithChildren<any> & {
	route: StackNavigationProp<any>
}
> = ({route}) => {
	const tailwind = useTailwind()
	const { firebaseUser, user } = useSelector((state: RootState) => state.user)
	const { uriFront, uriBack } = route.params as AddPostParams
	const [selectedDrinkId, setSelectedDrinkId] = useState<string>('')
	const { goBack, reset } = useNavigation()

	const handleSubmit = async () => {
		if (!firebaseUser || !selectedDrinkId) return
		try {
			const db = getFirestore()
			const docRef = collection(db, 'posts')
			const secondaryImage = await uploadImageAsync(uriFront)
			const mainImage = await uploadImageAsync(uriBack)
			await addDoc(docRef, {
				userId: firebaseUser.uid,
				userName: user && user.name,
				drinkId: selectedDrinkId,
				mainImage,
				secondaryImage,
				createdAt: Date.now()
			})
			reset({
				index: 0,
				routes: [{ name: 'HomeScreen' as never }]
			})
		} catch (error) {
			Toast.show({
				type: 'error',
				text1: 'Error',
				text2: error instanceof Error ? error.message : 'Unknown error'
			})
		}
	}

	const handleAddGame = async (gameStatus: 'won' | 'lost') => {
		if (!firebaseUser) return
		try {
			const db = getFirestore()
			const docRef = collection(db, 'posts')
			const secondaryImage = await uploadImageAsync(uriFront)
			const mainImage = await uploadImageAsync(uriBack)
			await addDoc(docRef, {
				userId: firebaseUser.uid,
				userName: user && user.name,
				gameStatus,
				mainImage,
				secondaryImage,
				createdAt: Date.now()
			})
			reset({
				index: 0,
				routes: [{ name: 'HomeScreen' as never }]
			})
		} catch (error) {
			Toast.show({
				type: 'error',
				text1: 'Error',
				text2: error instanceof Error ? error.message : 'Unknown error'
			})
		}
	}

	return (
		<View style={ [ tailwind("px-6 pt-10 bg-neutral-900") ] }>
			<SafeAreaView>
				<PreviewDisplay mainImage={uriBack} secondaryImage={uriFront} style={ [ tailwind("mb-4") ] }/>
				<OptionPicker
					onValueChange={setSelectedDrinkId}
					items={[
						{ label: "Beer", value: "beer" },
						{ label: "Wine", value: "wine" },
						{ label: "Cider", value: "cider" },
						{ label: "Spirits", value: "spirits" },
						{ label: "Soft drink", value: "soft-drink" },
						{ label: "Water", value: 'water' },
						{ label: "Other", value: "other" },
					]}
					value={selectedDrinkId}
					onClose={() => {}}
				/>
				<MainButton
					name="Post"
					style={ [ tailwind("mt-4") ] }
					onPress={handleSubmit}
				/>
				<Separator/>
				<View style={[
					tailwind('flex flex-row justify-between')
				]}>
					<SmallerMainButton name="Add won game" onPress={() => handleAddGame('won')} />
					<SmallerMainButton name="Add lost game" onPress={() => handleAddGame('lost')} />
				</View>
			</SafeAreaView>
		</View>
	);
};

export default AddPostScreen;