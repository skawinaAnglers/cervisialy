
const NAMES = ['Wheat', 'Light', 'Amber', 'Strong', 'Baltic', 'Dark', 'Lemon', 'Craft', 'Cheap', 'Kapitol']
const SECOND_WORD = ['IPA', 'AIPA', 'Lager', 'Pilsner', 'Stout', 'Porter', 'Beer', 'Malt', 'Ale', 'Weizen']

export const generateRandomName = () => {
	const first = NAMES[Math.floor(Math.random() * NAMES.length)]
	const second = SECOND_WORD[Math.floor(Math.random() * SECOND_WORD.length)]
	return `${first}${second}${Math.floor(Math.random() * 1115) + 1000}`
}