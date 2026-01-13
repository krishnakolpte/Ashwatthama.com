export type SupportedLocale = "en" | "kn";

export interface NavbarProps {
	locale: SupportedLocale;
}

export interface NavbarTranslations {
	services: string;
	impact: string;
	contact: string;
	login: string;
}
