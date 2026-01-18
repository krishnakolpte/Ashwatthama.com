import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import NavbarClient from "./NavbarClient";
import type { NavbarTranslations, SupportedLocale } from "@/types/navbar";
import Image from "next/image";

interface NavbarProps {
	locale: SupportedLocale;
}

export default async function Navbar({ locale }: NavbarProps) {
	const t = await getTranslations("Navbar");

	const translations: NavbarTranslations = {
		loans: t("loans"),
		impact: t("impact"),
		contact: t("contact"),
		login: t("login"),
	};

	return (
		<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100">
			<div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between ">
				{/* Semantic Brand Section */}
				<Link
					href="/"
					className="flex items-center gap-0.5 group outline-none rounded-lg"
				>
					<div className="relative h-10 w-20 group cursor-pointer">
						<Image
							alt="Ashwatthama Microfinance Logo"
							src="/logo.png"
							fill
							// 'contain' ensures the logo isn't cropped or stretched
							className="object-contain transition-transform duration-300 group-hover:scale-105"
							sizes="(max-width: 80px) 80px, 80px"
							priority
						/>
					</div>
					<div className="w-full">
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
						href="/loans"
						className="text-brand-black/70 text-sm font-semibold hover:text-primary transition-colors"
					>
						{translations.loans}
					</Link>
					<Link
						href="#impact"
						className="text-brand-black/70 text-sm font-semibold hover:text-primary transition-colors"
					>
						{translations.impact}
					</Link>
					<Link
						href="/contact"
						className="text-brand-black/70 text-sm font-semibold hover:text-primary transition-colors"
					>
						{translations.contact}
					</Link>
				</nav>

				{/* Dynamic Client Interactions */}
				<NavbarClient locale={locale} translations={translations} />
			</div>
		</header>
	);
}
