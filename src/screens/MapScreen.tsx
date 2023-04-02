import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";
import { SafeAreaView } from "react-native-safe-area-context";
import MapScreenModal from "../components/modals/MapScreenModal";

interface Location {
	id: number
	flankaId: string | null
	userIds: string[]
}

export interface ModalConfig {
	isOpen: boolean
	spotId: null | number
}

const MapScreen: React.FC = () => {
	const tailwind = useTailwind();


	const squares = [ ...Array(12 * 21).keys()]

	const [ modal, setModal ] = useState<ModalConfig>({ isOpen: false, spotId: null });

	//const { firebaseUser } = useSelector((state: RootState) => state.user)
	//
	// const db = getFirestore();
	//
	// const [ isCurrentlyClicked, toggleCurrentylyClicked ] = useState(false);
	//
	// const sieemaEniu = async (currentSpotId: number) => {
	// 	if (!firebaseUser) {
	// 		toggleCurrentylyClicked(false);
	// 		return
	// 	}
	// 	try {
	// 		const docRef = doc(db, `localization/${ firebaseUser.uid }`)
	// 		const data = await getDoc(docRef)
	// 		if (!data.exists()) {
	// 			toggleCurrentylyClicked(false);
	// 			return;
	// 		}
	// 		const { spotId } = data.data as unknown as { spotId: number }
	// 		return spotId === currentSpotId
	// 	} catch (error) {
	// 		console.log(error)
	// 		toggleCurrentylyClicked(false)
	// 	}
	// }
	//
	// useEffect(() => {
	// 	sieemaEniu();
	// }, [ modal.spotId, firebaseUser ]);
	//
	// const isCurrentlyClicked: boolean = useMemo(async () => {
	// }, [modal.spotId, firebaseUser])
	//
	//
	// const handleHereClick = async () => {
	// 	console.log(firebaseUser);
	// 	if (!firebaseUser) return
	// 	const docRef = doc(db, `localization/${ firebaseUser.uid }`)
	// 	await setDoc(docRef, { spot: modal.spotId })
	// }

	return (
		<>
			<MapScreenModal
				modalConfig={ modal }
				toggleModalOpen={ () => setModal(prevState => ({ ...prevState, isOpen: !prevState.isOpen })) }
			/>
			<View>
				<View>
					<Image style={ [ tailwind("h-full w-full") ] } source={ require("../assets/map.png") }/>
					<View style={ [ tailwind("absolute top-0 left-0 w-full h-full"), { backgroundColor: "rgba(0, 0, 0, .5)" } ] }>
						<SafeAreaView>
							<FlatList
								data={ squares }
								horizontal={ false }
								contentContainerStyle={ [ tailwind("flex justify-between") ] }
								renderItem={
									item =>
										<TouchableOpacity
											onPress={ () => setModal(prevState => ({ isOpen: !prevState.isOpen, spotId: item.item })) }
											style={
												[ tailwind("border border-black flex w-1/12"), { aspectRatio: 1, } ]
											}
										>
											<Text style={ [ tailwind("text-transparent") ] }>
												{ item.item }
											</Text>
										</TouchableOpacity>
								}
								keyExtractor={ item => item }
								numColumns={ 12 }
							/>
						</SafeAreaView>
					</View>
				</View>
			</View>
		</>
	);
};

export default MapScreen;