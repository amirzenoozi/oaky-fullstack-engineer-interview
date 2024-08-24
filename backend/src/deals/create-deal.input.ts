import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDealInput {
	@Field()
	title: string;

	@Field()
	description: string;

	@Field()
	imageUrl: string;

	@Field()
	category: string;

	@Field(() => Number)
	price: number;

	@Field(() => Number, { nullable: true })
	discountPrice?: number;
}
