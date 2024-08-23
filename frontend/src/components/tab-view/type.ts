interface Tab {
	title: string;
	disabled?: boolean;
	// content?: JSX.Element;
}

export interface TabViewProps {
	tabs: Tab[];
	activeIndex: number;
}
