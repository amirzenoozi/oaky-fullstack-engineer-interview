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
import { HomeBannerImageURL } from './constants';
import { Link } from 'react-router-dom';
import MessageBox from '@/components/message-box/message-box';
import { Loading, Empty, Error } from '@icon-park/react';


const Deals = (): JSX.Element => {
	const CN = new ClassNames('deals');
	const { t } = useTranslation(['deals', 'common']);
	const [pageNumber, setPageNumber] = useState(1)
	const [limit, setLimit] = useState(10)
	const [orderBy, setOrderBy] = useState('createdAt')
	const [order, setOrder] = useState('desc')
	const [activeTab, setActiveTab] = useState<string>('featured');
	const { deals, fetching, error } = useDeals(pageNumber, limit, orderBy, order)
	const HomePageTabs: {title: string, slug: string, disabled?: boolean}[] = [
		{
			title: t('tabs.featured'),
			slug: 'featured',
			disabled: false,
		},
		{
			title: t('tabs.deals'),
			slug: 'deals',
			disabled: false,
		},
		{
			title: t('tabs.upgrades'),
			slug: 'upgrades',
			disabled: false,
		}
	];

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
					{
						deals.length > 0 && (
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
						)
					}
					{
						!error && !fetching && deals.length === 0 && (
							<MessageBox
								icon={<Empty theme="outline" size="48" />}
								title={t('common:noData.title')}
								description={t('common:noData.description')}
							/>
						)
					}
					{
						fetching && (
							<MessageBox
								icon={<Loading theme="outline" size="48" />}
								title={t('common:loading.title')}
								description={t('common:loading.description')}
							/>
						)
					}
					{
						error && (
							<MessageBox
								icon={<Error theme="outline" size="48" />}
								title={t('common:error.title')}
								description={t('common:error.description')}
							/>
						)
					}
				</Container>
			</section>
		</>
	);
}

export default Deals;
