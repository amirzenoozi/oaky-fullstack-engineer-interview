import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealsService } from './deals.service';
import { DealsResolver } from './deals.resolver';
import { Deal } from './deal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deal])],
  providers: [DealsService, DealsResolver],
  exports: [DealsService],
})
export class DealsModule {}
