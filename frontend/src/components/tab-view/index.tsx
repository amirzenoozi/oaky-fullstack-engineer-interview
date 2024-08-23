import React, { useEffect, useState } from 'react';
import './style.scss';
import { ClassNames } from '@/modules/classNames';
import { TabViewProps } from '@/components/tab-view/type';



const TabView: React.FC<TabViewProps> = ({ tabs, activeSlug, onTabChange}) => {
	const CN = new ClassNames('tabView');

	const handleClick = (slug: string) => {
		if (onTabChange) {
			onTabChange(slug);
		}
	};

	return (
		<ul className={CN.generate()}>
			{tabs.map((tab, index) => (
				<li
					key={tab.slug}
					className={CN.generate('item', [{ 'active' : tab.slug === activeSlug }])}
					onClick={() => handleClick(tab.slug)}
				>
					{tab.title}
				</li>
			))}
		</ul>
	);
}

export default TabView;
