import React from 'react';
import './style.scss';
import { ClassNames } from '@/modules/classNames';
import { BannerProps } from '@/components/banner/type';



const BannerSection: React.FC<BannerProps> = ({ image, alt, children}) => {
	const CN = new ClassNames('banner');

	return (
		<section
			className={CN.generate()}
			style={{
				...(image ? { backgroundImage: `url(${image})` } : {})
			}}
		>
			<div className={CN.generate('content')}>
				{ children }
			</div>
		</section>
	);
}

export default BannerSection;
