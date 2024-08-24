import React from 'react';
import './style.scss';
import { ClassNames } from '@/modules/classNames';
import { DealCardProps } from '@/components/dealCard/type';
import { useSelector } from 'react-redux';
import { priceParser } from '@/modules/utils';



const DealCard: React.FC<DealCardProps> = ({
	id,
   title,
   description,
   price,
   image,
   offPrice,
   tag,
}) => {
	const CN = new ClassNames('dealCard');
	const { currency } = useSelector((state: any) => state.userInfo);
	const currencySymbol = {
		'USD': '$',
		'EUR': '€',
		'GBP': '£',
		'JPY': '¥',
		'CNY': '¥',
		'RUB': '₽',
		'INR': '₹',
	};



	return (
		<div className={CN.generate()}>
			<div className={CN.generate('wrapper')}>
				<figure className={CN.generate('thumbnail')}>
					<img src={image} alt={`Image For: ${title}`} />
					{ tag && <span className={CN.generate('tag')}>{tag}</span> }
				</figure>
				<h4 className={CN.generate('title')}>{title}</h4>
				{ description && <p className={CN.generate('description')}>{description}</p> }
			</div>
			<div className={CN.generate('price')}>
				<span className={CN.generate('price-main', [...(offPrice ? ['strikethrough'] : [])])}>
					{ currencySymbol[currency as keyof typeof currencySymbol] || '' }{priceParser(price)}
				</span>
				{ offPrice && <span className={CN.generate('price-off')}>{currencySymbol[currency as keyof typeof currencySymbol] || ''}{priceParser(offPrice)}</span> }
			</div>
		</div>
	);
}

export default DealCard;
