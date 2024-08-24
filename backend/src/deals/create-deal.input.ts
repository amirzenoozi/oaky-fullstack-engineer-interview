import { InputType, Field } from '@nestjs/graphql';
import { DealCategory } from './deal.entity';

@InputType()
export class CreateDealInput {
	@Field()
	title: string;

	@Field()
	description: string;

	@Field()
	content: string;

	@Field()
	imageUrl: string;

	@Field(() => DealCategory)
	category: DealCategory;

	@Field(() => Number)
	price: number;

	@Field(() => Number, { nullable: true })
	discountPrice?: number;
}
