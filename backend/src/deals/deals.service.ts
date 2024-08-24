import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deal, DealCategory } from './deal.entity';

@Injectable()
export class DealsService {
	constructor(
		@InjectRepository(Deal)
		private dealsRepository: Repository<Deal>,
	) {}

	async getActiveDeals(page: number, limit: number, order: string, orderBy: keyof Deal): Promise<{ data: Deal[], meta: any }> {
		const skip = (page - 1) * limit;
		const [deals, totalCount] = await this.dealsRepository.findAndCount({
			where: { deletedAt: null },
			order: { [orderBy]: order.toUpperCase() as 'ASC' | 'DESC' },
			skip: skip,
			take: limit,
		});

		const totalPages = Math.ceil(totalCount / limit);
		const meta = {
			total_count: totalCount,
			total_pages: totalPages,
			current_page: page,
			limit: limit,
			order_by: orderBy,
			order: order
		};

		return { data: deals, meta };
	}

	findOne(uuid: string): Promise<Deal> {
		return this.dealsRepository.findOne({ where: { uuid } });
	}

	create(deal: Partial<Deal>): Promise<Deal> {
		if (!(Object.values(DealCategory).includes(deal.category))) {
			throw new BadRequestException('Invalid category');
		}

		const newDeal = this.dealsRepository.create(deal);
		return this.dealsRepository.save(newDeal);
	}

	async remove(uuid: string): Promise<void> {
		await this.dealsRepository.softDelete(uuid);
	}

	async hardRemove(uuid: string): Promise<void> {
		await this.dealsRepository.delete(uuid);
	}
}
