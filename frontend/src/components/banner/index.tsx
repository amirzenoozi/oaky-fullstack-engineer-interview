import React from 'react';
import './style.scss';
import { ClassNames } from '@/modules/classNames';
import { BannerProps } from '@/components/banner/type';



const BannerSection: React.FC<BannerProps> = ({ image, children}) => {
	const CN = new ClassNames('banner');

	return (
		<section
			className={CN.generate()}
			style={{
				...(image ? { backgroundImage: `url(${image})` } : {})
			}}
		>
			{
				children && (
					<div className={CN.generate('content')}>
						{children}
					</div>
				)
			}
		</section>
	);
}

export default BannerSection;
