import { IconType } from '@icon-park/react/es/all';

export interface BtnProps {
	text?: string;
	variant?: 'primary' | 'white' | 'default';
	type?: 'button' | 'submit' | 'reset';
	size?: 'sm' | 'md' | 'lg';
	block?: boolean;
	disable?: boolean;
}
