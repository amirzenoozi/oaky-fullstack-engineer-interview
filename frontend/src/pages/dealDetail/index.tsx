import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import { ClassNames } from '@/modules/classNames';
import { useParams } from 'react-router-dom';


function DealDetails() {
	const CN = new ClassNames('deals');
	const { t } = useTranslation(['deals']);
	const { uuid, lng } = useParams();

	return (
		<>
			DealDetails: {uuid}
		</>
	);
}

export default DealDetails;
