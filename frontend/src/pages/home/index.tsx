import React, { useEffect, useState } from 'react';
import './style.scss';
import BannerSection from '@/components/banner';
import { useTranslation } from 'react-i18next';
import { ClassNames } from '@/modules/classNames';
import Btn from '@/components/btn';
import TabView from '@/components/tab-view';
import Container from '@/components/container';
import FlexRow from '@/components/flex-row';
import FlexCol from '@/components/flex-col';
import { DealCardProps } from '@/components/dealCard/type';
import DealCard from '@/components/dealCard';


function Home() {
	const CN = new ClassNames('deals');
	const { t } = useTranslation(['deals']);
	const [activeTab, setActiveTab] = useState<string>('featured');
	const image: string = 'https://s3-alpha-sig.figma.com/img/749a/6331/89146aa59a2eb1886a1d7d19eb495750?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDpgp12oNU8dY82-iNOptGZvcOuaFBk4ndvBeOnarbakKBuLoYKhBXrb~uhFDUG69AuqccJMubfUmOCtDf--MSowZogl0filMqs7mODiO04quhzKsAs2I4VSQfUpzOZCrcUdqJlGnKPqgdKx6uxNkVErWAyUWMGp9PZ7ujXm2XOXLdPEC67msJDf0MBMhu1~bsYNHkXF18PLkPxn0-nKFTPOlXpFloAhGx9JtBztqQuQTF8qbUNvcgH83iUmLWvWjXf1XaNSJV5ka5Lt3mGjEzB4KHzSfhrk1-h7EzEKBO4gBrTVdktcQ92mMZSNHM0IunaabmWbRmb-94t0KNgkBA__'
	const tabs = [
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
	const Deals: DealCardProps[] = [
		{
			title: 'Romantic package',
			description: 'Give your partner a fun surprise.',
			price: 100,
			image: 'https://s3-alpha-sig.figma.com/img/5fd8/92c7/4df526b14c8e2d2add92411befd00b53?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WQFiqmoOcc8xSQF3UobAdOoXkLTk3izkz8d2~X3ooww80DtJecSfBc3OMSGFiWQIZScs0YHvBnBdtWzgnAJ5Y717DLzvydkPu7cjROH3Kdaic-7FBQS-XLtWs~LzTau4RNn58cP5FojvqjcfbZm2XcxcLq5pBr24gZ9pdOJqJsCzPtM4SueeqmGteEaIQN8qKxKnTIWxwZo5S3ZRIi2~R68RGFR06tXs0rWWZ0dPGfFmJZVw86OmZF1ucfDB0e4~TxkGLYDro6ihdOWGqyJz1O1QHqNvhG8M6B8H-4I9JpMHZL5UCIRu8gsWDRN46320J-bYNcsMtJz1IJJ0fVlpkQ__',
			offPrice: 50,
			tag: 'top deal',
		}
	]

	const handleTabChange = (slug: string) => {
		setActiveTab(slug);
	};

	return (
		<>
			<BannerSection image={image} alt={t('deals.banner.title')}>
				<div className={CN.generate('bannerContent')}>
					<h1>{ t('banner.title') }</h1>
					<p>{ t('banner.description') }</p>
					<Btn variant={'white'} text={t('banner.button')} />
				</div>
			</BannerSection>
			<section className={CN.generate('tabContent')}>
				<div className={CN.generate('tabContent-head')}>
					<TabView tabs={tabs} activeSlug={activeTab} onTabChange={handleTabChange} />
					<h2>{ t(`${activeTab}.title`) }</h2>
					<p>{ t(`${activeTab}.description`) }</p>
				</div>
				<Container>
					<FlexRow>
						{
							Deals.map((deal, index) => (
								<FlexCol xs={12} sm={8} md={6} key={index}>
									<DealCard {...deal} />
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
