import { useTranslations } from "next-intl";
import NavbarClient from "./NavbarClient";

export default function Navbar({ locale }: { locale: string }) {
	const t = useTranslations("Navbar");

	const translations = {
		brand: t("brand"),
		tagline: t("tagline"),
		links: {
			home: t("links.home"),
			loans: t("links.loans"),
			investments: t("links.investments"),
			impact: t("links.impact"),
			contact: t("links.contact"),
		},
		sections: {
			personal: t("sections.personal"),
			businessAgri: t("sections.businessAgri"),
			fixedIncome: t("sections.fixedIncome"),
		},
		items: {
			all: t("items.all"),
			home: t("items.home"),
			vehicle: t("items.vehicle"),
			edu: t("items.edu"),
			msme: t("items.msme"),
			agri: t("items.agri"),
			animal: t("items.animal"),
			fd: t("items.fd"),
			rd: t("items.rd"),
			pigmy: t("items.pigmy"),
		},
		actions: {
			lang: t("actions.lang"),
			portal: t("actions.portal"),
		},
	};

	return <NavbarClient t={translations} locale={locale} />;
}
