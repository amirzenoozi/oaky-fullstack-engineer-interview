import { Field, ObjectType } from '@nestjs/graphql';
import { Deal } from './deal.entity';

@ObjectType()
export class PaginationMeta {
	@Field(type => Number)
	total_count: number;

	@Field(type => Number)
	total_pages: number;

	@Field(type => Number)
	current_page: number;

	@Field(type => Number)
	limit: number;

	@Field(type => String)
	order_by: number;

	@Field(type => String)
	order: number;
}

@ObjectType()
export class PaginatedDeals {
	@Field(type => [Deal])
	data: Deal[];

	@Field(type => PaginationMeta)
	meta: PaginationMeta;
}
