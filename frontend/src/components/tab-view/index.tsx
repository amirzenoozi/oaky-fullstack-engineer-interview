import React, { useEffect, useState } from 'react';
import './style.scss';
import { ClassNames } from '@/modules/classNames';
import { TabViewProps } from '@/components/tab-view/type';



const TabView: React.FC<TabViewProps> = ({ tabs, activeIndex}) => {
	const CN = new ClassNames('tabView');
	const [tabIndex, setTabIndex] = useState<number>(0);

	useEffect(() => {
		setTabIndex(activeIndex);
	}, []);

	const handleClick = (index: number) => {
		if (index !== tabIndex) {
			setTabIndex(index);
		}
	};

	return (
		<ul className={CN.generate()}>
			{tabs.map((tab, index) => (
				<li
					key={index}
					className={CN.generate('item', [{ 'active' : index === tabIndex }])}
					onClick={() => handleClick(index)}
				>
					{tab.title}
				</li>
			))}
		</ul>
	);
}

export default TabView;
