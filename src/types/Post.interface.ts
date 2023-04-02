export default interface Post {
	userId: string,
	userName: string,
	drinkId?: string,
	drinkName?: string,
	gameStatus: 'won' | 'lost',
	mainImage: string,
	secondaryImage: string,
	createdAt: number,
	id?: string
}