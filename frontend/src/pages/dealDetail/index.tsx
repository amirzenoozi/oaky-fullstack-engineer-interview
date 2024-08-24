import React, { useEffect } from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import { ClassNames } from '@/modules/classNames';
import { useParams } from 'react-router-dom';
import useDeal from '@/hooks/useDeal';
import BannerSection from '@/components/banner';
import Container from '@/components/container';


const DealDetails = (): JSX.Element => {
	const CN = new ClassNames('dealDetail');
	const { t } = useTranslation(['deals']);
	const { uuid, lng } = useParams();
	const { deal, fetching, error } = useDeal(uuid || '');

	useEffect(() => {
		console.log('deal', deal);
	}, [deal]);

	return (
		<>
			<BannerSection image={deal?.imageUrl} />
			<div className={CN.generate('wrapper')}>
				<Container>
					<div className={CN.generate('header')}>
						<h1>{ deal?.title }</h1>
						<p>{ deal?.description }</p>
					</div>
					<div className={CN.generate('content')}>
						{ deal?.content }
					</div>
				</Container>
			</div>
		</>
	);
}

export default DealDetails;
