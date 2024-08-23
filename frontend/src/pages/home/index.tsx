import React from 'react';
import './style.scss';
import BannerSection from '@/components/banner';
import { useTranslation } from 'react-i18next';
import { ClassNames } from '@/modules/classNames';


function Home() {
	const CN = new ClassNames('deals');
	const { t } = useTranslation(['deals']);
	const image: string = 'https://s3-alpha-sig.figma.com/img/749a/6331/89146aa59a2eb1886a1d7d19eb495750?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDpgp12oNU8dY82-iNOptGZvcOuaFBk4ndvBeOnarbakKBuLoYKhBXrb~uhFDUG69AuqccJMubfUmOCtDf--MSowZogl0filMqs7mODiO04quhzKsAs2I4VSQfUpzOZCrcUdqJlGnKPqgdKx6uxNkVErWAyUWMGp9PZ7ujXm2XOXLdPEC67msJDf0MBMhu1~bsYNHkXF18PLkPxn0-nKFTPOlXpFloAhGx9JtBztqQuQTF8qbUNvcgH83iUmLWvWjXf1XaNSJV5ka5Lt3mGjEzB4KHzSfhrk1-h7EzEKBO4gBrTVdktcQ92mMZSNHM0IunaabmWbRmb-94t0KNgkBA__'

	return (
		<>
			<BannerSection image={image} alt={t('deals.banner.title')}>
				<div className={CN.generate('bannerContent')}>
					<h1>{ t('banner.title') }</h1>
					<p>{ t('banner.description') }</p>
				</div>
			</BannerSection>
		</>
	);
}

export default Home;
