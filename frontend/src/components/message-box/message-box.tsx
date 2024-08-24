import React from 'react';
import { ClassNames } from '@/modules/classNames';
import { MessageBoxProps } from '@/components/message-box/type';
import './style.scss';

const MessageBox: React.FC<MessageBoxProps> = ({icon, title, description}): JSX.Element => {
	const CN = new ClassNames('messageBox');

	return (
		<div className={CN.generate()}>
			<div className={CN.generate('icon')}>
				{ icon }
			</div>
			<div className={CN.generate('content')}>
				<h3>{ title }</h3>
				<p>{ description }</p>
			</div>
		</div>
	)
};

export default MessageBox;
