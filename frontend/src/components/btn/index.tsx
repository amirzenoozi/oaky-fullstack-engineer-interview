import React from 'react';
import './style.scss';
import { BtnProps } from '@/components/btn/type';
import { ClassNames } from '@/modules/classNames';

const Btn: React.FC<BtnProps> = ({
	text = '',
	variant = 'primary',
	type = 'button',
	size = 'md',
	disable = false,
	block = false,
	...props
}) => {
	const CN = new ClassNames('btn');

	const BtnClassGenerator = (variant: string, size: string, disable: boolean, block: boolean) => {
		return CN.generate('', [
			variant,
			size,
			...disable ? ['disable'] : [],
			...block ? ['block'] : [],
		])
	};

	return (
		<button
			className={BtnClassGenerator(variant, size, disable, block)}
			type={type}
			disabled={disable}
			{...props}
		>
			{text}
		</button>
	);
}

export default Btn;
