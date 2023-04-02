import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import { useTailwind } from 'tailwind-rn'
import Post from "../components/Post";
import { RootState } from '../store';

const HomeScreen: React.FC = () => {
	const { user, posts } = useSelector((state: RootState) => state.user)
  const tailwind = useTailwind()

  return (
    <View style={[tailwind('bg-neutral-900 px-6')]}>
      <SafeAreaView>
				<Text style={ [ tailwind('font-bold text-3xl text-neutral-300 mt-2') ] }>
					Welcome{user ? `, ${user.name}` : ''}!
				</Text>
				<Text style={ [ tailwind('font-light text-2xl text-neutral-300 my-2') ] }>
					We hope you&apos;re having a great day!
				</Text>
				<FlatList 
					data={posts}
					renderItem={({item, index}) => <Post {...item} index={index} />}
					keyExtractor={item => item.id || item.createdAt.toString()}
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
