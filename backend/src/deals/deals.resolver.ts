import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { DealsService } from './deals.service';
import { Deal } from './deal.entity';
import { CreateDealInput } from './create-deal.input';
import { PaginatedDeals } from './get-deals.output';

@Resolver(() => Deal)
export class DealsResolver {
	constructor(private dealsService: DealsService) {}

	@Query(() => PaginatedDeals)
	async deals(
		@Args('page', { type: () => Int, defaultValue: 1 }) page: number,
		@Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
		@Args('orderBy', { type: () => String, defaultValue: 'createdAt' }) orderBy: keyof Deal,
		@Args('order', { type: () => String, defaultValue: 'desc' }) order: 'asc' | 'desc',
	): Promise<PaginatedDeals> {
		const { data, meta } = await this.dealsService.getActiveDeals(page, limit, order, orderBy);
		return { data, meta };
	}

	@Query(() => Deal)
	deal(@Args('uuid', { type: () => String }) uuid: string): Promise<Deal> {
		return this.dealsService.findOne(uuid);
	}

	@Mutation(() => Deal)
	createDeal(@Args('deal') deal: CreateDealInput): Promise<Deal> {
		return this.dealsService.create(deal);
	}

	@Mutation(() => Boolean)
	async removeDeal(@Args('uuid', { type: () => String }) uuid: string): Promise<boolean> {
		await this.dealsService.remove(uuid);
		return true;
	}
}
