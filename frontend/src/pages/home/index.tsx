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
						<FlexCol xs={12} sm={8} md={6}>Deal Card</FlexCol>
					</FlexRow>
				</Container>
			</section>
		</>
	);
}

export default Home;
