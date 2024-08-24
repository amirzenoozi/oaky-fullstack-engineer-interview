import React, { useState } from 'react';
import './style.scss';
import BannerSection from '@/components/banner';
import { useTranslation } from 'react-i18next';
import { ClassNames } from '@/modules/classNames';
import Btn from '@/components/btn';
import TabView from '@/components/tab-view';
import Container from '@/components/container';
import FlexRow from '@/components/flex-row';
import FlexCol from '@/components/flex-col';
import DealCard from '@/components/dealCard';
import useDeals from '@/hooks/useDeals';
import { HomeBannerImageURL, HomePageTabs } from '@/pages/home/constants';
import { Link } from 'react-router-dom';


function Home() {
	const CN = new ClassNames('deals');
	const { t } = useTranslation(['deals']);
	const [pageNumber, setPageNumber] = useState(1)
	const [limit, setLimit] = useState(10)
	const [orderBy, setOrderBy] = useState('createdAt')
	const [order, setOrder] = useState('desc')
	const [activeTab, setActiveTab] = useState<string>('featured');
	const { deals, fetching, error } = useDeals(pageNumber, limit, orderBy, order)

	const handleTabChange = (slug: string) => {
		setActiveTab(slug);
	};

	return (
		<>
			<BannerSection image={HomeBannerImageURL} alt={t('deals.banner.title')}>
				<div className={CN.generate('bannerContent')}>
					<h1>{ t('banner.title') }</h1>
					<p>{ t('banner.description') }</p>
					<Btn variant={'white'} text={t('banner.button')} />
				</div>
			</BannerSection>
			<section className={CN.generate('tabContent')}>
				<div className={CN.generate('tabContent-head')}>
					<TabView tabs={HomePageTabs} activeSlug={activeTab} onTabChange={handleTabChange} />
					<h2>{ t(`${activeTab}.title`) }</h2>
					<p>{ t(`${activeTab}.description`) }</p>
				</div>
				<Container>
					<FlexRow>
						{
							deals.map((deal, index) => (
								<FlexCol xs={12} sm={8} md={6} key={index}>
									<Link to={`deals/${deal.uuid}`}>
										<DealCard
											title={deal.title}
											description={deal.description}
											price={deal.price}
											offPrice={deal.discountPrice}
											image={deal.imageUrl}
											tag={deal.category}
										/>
									</Link>
								</FlexCol>
							))
						}
					</FlexRow>
				</Container>
			</section>
		</>
	);
}

export default Home;
