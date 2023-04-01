import { View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useTailwind } from 'tailwind-rn'
import { RootState } from '../store'
import NavButton from './NavButton'
import HomeIcon from '../assets/HomeIcon'
import FriendsIcon from '../assets/FriendsIcon'
import UserIcon from '../assets/UserIcon'
import SettingsIcon from '../assets/SettingsIcon'
import MenuButton from './MenuButton'

const BottomNavigation: React.FC = () => {
  const { uid } = useSelector((state: RootState) => state.user)
	const tailwind = useTailwind()

  return (
    <View
      style={[tailwind('flex items-center justify-center absolute top-0 w-full h-full')]}
      pointerEvents='box-none'
    >
      {uid && (
				<>
					<MenuButton />

					<View
						style={[
							tailwind('absolute bottom-0 py-4 px-6 bg-neutral-800 w-full flex-row justify-between')
						]}
						>
							<NavButton 
								screenName="HomeScreen"
								text="Home"
								icon={HomeIcon}
							/>
							<NavButton 
								screenName="FriendsScreen"
								text="Friends"
								icon={FriendsIcon}
							/>
							<NavButton 
								screenName="ProfileScreen"
								text="Profile"
								icon={UserIcon}
							/>
							<NavButton 
								screenName="SettingsScreen"
								text="Settings"
								icon={SettingsIcon}
							/>
					</View>
				</>
				
      )}
    </View>
  )
}

export default BottomNavigation
