import React, { useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import { useTailwind } from 'tailwind-rn'
import Post from "../components/Post";
import { RootState } from '../store';

const HomeScreen: React.FC = () => {
	const { user } = useSelector((state: RootState) => state.user)
  const tailwind = useTailwind()

	const PostMock = useMemo(() => {
		const dane = (new Array(10)).fill(0).map((_, i) => ({
			mainImage: `https://picsum.photos/seed/${i}/200/300`,
			secondaryImage: `https://picsum.photos/seed/${i}/200/300`,
			userName: 'Magnuschase',
			userId: 'abcdef',
			drinkId: 'abcdefgh',
			drinkName: 'abcdefgh',
			createdAt: i
		}))
		console.log(dane)
		return dane
	}, [])

  return (
    <View style={[tailwind('bg-neutral-900 px-6')]}>
      <SafeAreaView>
				<Text style={ [ tailwind('font-bold text-3xl text-neutral-300 mt-2') ] }>
					Welcome{user ? `, ${user.name}` : ''}!
				</Text>
				<Text style={ [ tailwind('font-light text-2xl text-neutral-300 mt-2') ] }>
					We hope you&apos;re having a great day!
				</Text>
				<FlatList 
					data={PostMock}
					renderItem={({item, index}) => <Post {...item} index={index} />}
					keyExtractor={item => item.createdAt}
					contentContainerStyle={[tailwind('flex justify-between')]}
					ItemSeparatorComponent={() => <View style={[tailwind('h-6')]} />}
					ListHeaderComponent={() => <View style={[tailwind('h-6')]} />}
					ListFooterComponent={() => <View style={{ height: 333 }} />}
					horizontal={false}
					numColumns={2}
				/>
		  		
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
