export default interface Post {
	userId: string,
	userName: string,
	drinkId?: string,
	drinkName?: string,
	winners?: string[],
	losers?: string[],
	mainImage: string,
	secondaryImage: string,
	createdAt: number,
	id?: string
}