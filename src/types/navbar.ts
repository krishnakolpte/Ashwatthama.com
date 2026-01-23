export type SupportedLocale = "en" | "kn";

export interface NavProps {
	t: {
		brand: string;
		tagline: string;
		links: {
			home: string;
			loans: string;
			investments: string;
			about: string;
			careers: string;
			contact: string;
		};
		sections: {
			personal: string;
			businessAgri: string;
			fixedIncome: string;
		};
		items: Record<string, string>;
		actions: { lang: string; portal: string };
	};
	locale: string;
}
