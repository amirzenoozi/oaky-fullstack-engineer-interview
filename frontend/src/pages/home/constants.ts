import { t } from 'i18next';

const HomeBannerImageURL: string = 'https://media.cntraveler.com/photos/5a688cce4580d0380a6531e9/16:9/w_2560,c_limit/Good-Hotel_2018_Living-room-reception-area.jpg';
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

export {
	HomeBannerImageURL,
	HomePageTabs,
}
