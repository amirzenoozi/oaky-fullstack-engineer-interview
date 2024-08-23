import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import { ClassNames } from '@/modules/classNames';


function Home() {
	const CN = new ClassNames('deals');
	const { t } = useTranslation(['deals']);

	return (
		<>
			Home
		</>
	);
}

export default Home;
