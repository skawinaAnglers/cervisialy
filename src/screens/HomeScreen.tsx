import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { useTailwind } from 'tailwind-rn'
import Post from "../components/Post";
import { RootState } from '../store';

const HomeScreen: React.FC = () => {
	const { user } = useSelector((state: RootState) => state.user)
  const tailwind = useTailwind()

  return (
    <View style={[tailwind('px-6 bg-neutral-900')]}>
      <SafeAreaView>
				<Text style={ [ tailwind('font-bold text-3xl text-neutral-300 mt-2') ] }>
					Welcome{user ? `, ${user.name}` : ''}!
				</Text>
				<Text style={ [ tailwind('font-light text-2xl text-neutral-300 mt-2') ] }>
					We hope you&apos;re having a great day!
				</Text>
		  		<Post
					mainImage="https://media.istockphoto.com/id/1320169431/photo/capybara-showing-his-teeth.jpg?s=612x612&w=0&k=20&c=QVYeS_Izda9hgepiSQyJQW28SGpgy3_OtI5rLHToJH8="
					secondaryImage="https://media.istockphoto.com/id/177228186/photo/young-capybara.jpg?s=612x612&w=0&k=20&c=MaLAlTZA3N5fa2Gp2FeCdZCwSbCLXkVVeKTks7IJIgM="
					userName="Magnuschase"
					piwoName="Zuberek"
					description="Opis zdjęcia"
					time="2h ago"
					likesCount={ 123 }
					commentsCount={ 321 }
				/>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
