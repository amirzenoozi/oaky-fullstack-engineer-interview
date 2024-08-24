import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { v4 as uuidv4 } from 'uuid';

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

	@Field()
	@Column()
	category: string;

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
