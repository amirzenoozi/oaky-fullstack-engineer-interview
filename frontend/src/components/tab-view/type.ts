interface Tab {
	title: string;
	slug: string;
	disabled?: boolean;
	// content?: JSX.Element;
}

export interface TabViewProps {
	tabs: Tab[];
	activeSlug: string;
	onTabChange?: (slug: string) => void;
}
