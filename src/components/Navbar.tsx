import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Landmark } from "lucide-react";
import NavbarClient from "./NavbarClient";
import type { NavbarTranslations, SupportedLocale } from "@/types/navbar";

interface NavbarProps {
	locale: SupportedLocale;
}

export default async function Navbar({ locale }: NavbarProps) {
	const t = await getTranslations("Navbar");

	const translations: NavbarTranslations = {
		services: t("services"),
		impact: t("impact"),
		contact: t("contact"),
		login: t("login"),
	};

	return (
		<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100">
			<div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
				{/* Semantic Brand Section */}
				<Link
					href="/"
					className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
				>
					<div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
						<Landmark size={24} />
					</div>
					<div>
						<h2 className="text-brand-black text-xl font-extrabold leading-tight tracking-tight">
							Ashwatthama
						</h2>
						<p className="text-secondary text-[10px] font-black uppercase tracking-[0.2em] leading-none">
							Microfinance
						</p>
					</div>
				</Link>

				{/* Static Server-Rendered Nav Links */}
				<nav className="hidden md:flex items-center gap-10">
					<Link
						href="#services"
						className="text-brand-black/70 text-sm font-semibold hover:text-primary transition-colors"
					>
						{translations.services}
					</Link>
					<Link
						href="#impact"
						className="text-brand-black/70 text-sm font-semibold hover:text-primary transition-colors"
					>
						{translations.impact}
					</Link>
					<Link
						href="#contact"
						className="text-brand-black/70 text-sm font-semibold hover:text-primary transition-colors"
					>
						{translations.contact}
					</Link>
					<div className="h-4 w-px bg-slate-200" aria-hidden="true" />
				</nav>

				{/* Dynamic Client Interactions */}
				<NavbarClient locale={locale} translations={translations} />
			</div>
		</header>
	);
}
