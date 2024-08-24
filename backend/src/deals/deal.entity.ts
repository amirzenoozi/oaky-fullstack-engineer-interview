import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { v4 as uuidv4 } from 'uuid';

export enum DealCategory {
	TOP_DEAL = 'top deal',
	NEW_LIFT = 'only a few left!',
	TOP_RATED = 'top rated',
	OTHER = 'other',
}

registerEnumType(DealCategory, {
	name: 'DealCategory',
	description: 'The available categories for deals',
});

@ObjectType()
@Entity()
export class Deal {
	@Field()
	@PrimaryGeneratedColumn('uuid')
	uuid: string = uuidv4();

	@Field()
	@Column()
	title: string;

	@Field()
	@Column()
	description: string;

	@Field()
	@Column()
	imageUrl: string;

	@Field(() => DealCategory)
	@Column({
		type: 'text',
	})
	category: DealCategory;

	@Field()
	@Column({ type: 'float' })
	price: number;

	@Field({ nullable: true })
	@Column({ type: 'float', nullable: true })
	discountPrice?: number;

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field({ nullable: true })
	@UpdateDateColumn()
	updatedAt?: Date;

	@Field({ nullable: true })
	@DeleteDateColumn()
	deletedAt?: Date;
}
