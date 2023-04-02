import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { getFirestore, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import BaseModal from "./BaseModal";
import MainButton from "../MainButton";
import MapModalUser from "../MapModalUser";
import { ModalConfig } from "../../screens/MapScreen";
import { RootState } from "../../store";
import Spot from "../../types/Spot.interface";

interface MapScreenModalPayload {
	modalConfig: ModalConfig
	toggleModalOpen: () => void
}

const MapScreenModal: React.FC<MapScreenModalPayload> = ({
	modalConfig,
	toggleModalOpen,
}) => {
	const { firebaseUser, spots } = useSelector((state: RootState) => state.user)
	const tailwind = useTailwind()
	const db = getFirestore()
	const [spotData, setSpotData] = useState<Spot | null>(null)

	const handleSubmitLocation = useCallback(async () => {
		if (!firebaseUser) return
		if (!modalConfig.spotId) return
		try {
			const userSpot = spots?.find((spot) => spot.localizedUsers.includes(firebaseUser.uid))
			if (userSpot && userSpot.id !== modalConfig.spotId) {
				const docRef = doc(db, `spots/${userSpot.id}`)
				await setDoc(docRef, {
					...userSpot,
					localizedUsers: userSpot.localizedUsers.filter((uid) => uid !== firebaseUser.uid)
				})
				const newDocRef = doc(db, `spots/${modalConfig.spotId}`)
				await setDoc(newDocRef, {
					...userSpot,
					localizedUsers: [...userSpot.localizedUsers, firebaseUser.uid]
				})
				return
			}

			if (userSpot) {
				const docRef = doc(db, `spots/${userSpot.id}`)
				await setDoc(docRef, {
					...userSpot,
					localizedUsers: userSpot.localizedUsers.filter((uid) => uid !== firebaseUser.uid)
				})
				return
			}

			if (spotData)	{
				const docRef = doc(db, `spots/${modalConfig.spotId}`)
				await setDoc(docRef, {
					...spotData,
					localizedUsers: [...spotData.localizedUsers, firebaseUser.uid]
			})
				return
			}

			const docRef = doc(db, `spots/${modalConfig.spotId}`)
			await setDoc(docRef, {
				gameUsers: [],
				localizedUsers: [firebaseUser.uid]
			})
		} catch (error) {
			console.log(error)
		}
	}, [spots, spotData, modalConfig])

	const handleGameReady = useCallback(async () => {
		if (!firebaseUser) return
		if (!modalConfig.spotId) return
		try {
			const userSpot = spots?.find((spot) => spot.gameUsers.includes(firebaseUser.uid))
			if (userSpot && userSpot.id !== modalConfig.spotId) {
				const docRef = doc(db, `spots/${userSpot.id}`)
				await setDoc(docRef, {
					...userSpot,
					gameUsers: userSpot.gameUsers.filter((uid) => uid !== firebaseUser.uid)
				})
				const newDocRef = doc(db, `spots/${modalConfig.spotId}`)
				await setDoc(newDocRef, {
					...userSpot,
					gameUsers: [...userSpot.gameUsers, firebaseUser.uid]
				})
				return
			}

			if (userSpot) {
				const docRef = doc(db, `spots/${userSpot.id}`)
				await setDoc(docRef, {
					...userSpot,
					gameUsers: userSpot.gameUsers.filter((uid) => uid !== firebaseUser.uid)
				})
				return
			}

			if (spotData)	{
				const docRef = doc(db, `spots/${modalConfig.spotId}`)
				await setDoc(docRef, {
					...spotData,
					gameUsers: [...spotData.gameUsers, firebaseUser.uid]
			})
				return
			}

			const docRef = doc(db, `spots/${modalConfig.spotId}`)
			await setDoc(docRef, {
				localizedUsers: [],
				gameUsers: [firebaseUser.uid]
			})
		} catch (error) {
			console.log(error)
		}
	}, [spots, spotData, modalConfig])

	const fetchModalData = () => {
		if (!modalConfig.spotId) return
		const newSpotData = spots?.find((spot) => spot.id === modalConfig.spotId)
		if (!newSpotData) return
		setSpotData(newSpotData)
	}

	const closeModal = () => {
		setSpotData(null)
		toggleModalOpen()
	}

	useEffect(() => {
		fetchModalData()
	}, [spots, modalConfig.spotId])

	return (
		<BaseModal
			isVisible={ modalConfig.isOpen }
			onDismiss={ closeModal }
		>
			<Text style={ [ tailwind("text-2xl text-white mb-3") ] }>
				{ `Spot ${ modalConfig.spotId ?? "" }` }
			</Text>
			<MainButton
				name={spotData && spotData.localizedUsers.includes(firebaseUser?.uid ?? "") ? "I'm not here!" : "I'm here!"}
				onPress={ handleSubmitLocation }
				style={ [ tailwind("bg-emerald-500 mb-3") ] }
				textStyle={ [ tailwind("text-white") ] }
			/>
			<MainButton
				name={spotData && spotData.gameUsers.includes(firebaseUser?.uid ?? "") ? "Oops, retreat!" : "I'm ready to game!"}
				onPress={ handleGameReady }
				style={ [ tailwind("bg-neutral-400 mb-3") ] }
				textStyle={ [ tailwind("text-white") ] }
			/>
			{
				spotData && spotData.localizedUsers.length > 0 && (
					<>
					<Text style={ [ tailwind("text-2xl text-white mb-3") ] }>
						{ `Who's there?` }
					</Text>
					<ScrollView horizontal style={ [ tailwind("pb-4") ] }>
						{
							spotData?.localizedUsers.map((user) => (
								<MapModalUser image={`https://api.dicebear.com/6.x/pixel-art/png?seed=${user}`} />
							))
						}
					</ScrollView>
					</>
				)
			}

{
				spotData && spotData.gameUsers.length > 0 && (
					<>
					<Text style={ [ tailwind("text-2xl text-white mb-3") ] }>
						These people are ready to play:
					</Text>
					<ScrollView horizontal style={ [ tailwind("pb-4") ] }>
						{
							spotData?.gameUsers.map((user) => (
								<MapModalUser image={`https://api.dicebear.com/6.x/pixel-art/png?seed=${user}`} />
							))
						}
					</ScrollView>
					</>
				)
			}
			
		</BaseModal>
	)
};

export default MapScreenModal;