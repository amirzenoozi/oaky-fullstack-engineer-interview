export interface DealItem {
	uuid: string;
	title: string;
	description: string;
	imageUrl: string;
	category: string;
	price: number;
	discountPrice?: number;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
