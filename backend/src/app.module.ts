import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { DealsModule } from './deals/deals.module';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'database.sqlite',
			entities: [join(__dirname, '**', '*.entity.{ts,js}')],
			synchronize: true,
		}),
		GraphQLModule.forRoot({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
		}),
		DealsModule,
	],
	controllers: [AppController,],
	providers: [AppService],
})
export class AppModule {}
