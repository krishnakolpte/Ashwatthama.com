"use client";

import { useState } from "react";
import { Menu, X, Globe, User } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/routing";
import type { NavbarTranslations, SupportedLocale } from "@/types/navbar";

interface NavbarClientProps {
	locale: SupportedLocale;
	translations: NavbarTranslations;
}

export default function NavbarClient({
	locale,
	translations,
}: NavbarClientProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const router = useRouter();
	const pathname = usePathname();

	const handleLanguageToggle = (): void => {
		// Logic: If current is English, switch to Kannada; else switch to English
		const nextLocale: SupportedLocale = locale === "en" ? "kn" : "en";
		router.replace(pathname, { locale: nextLocale });
	};

	return (
		<>
			{/* Desktop Actions */}
			<div className="hidden md:flex items-center gap-6">
				<button
					onClick={handleLanguageToggle}
					className="flex items-center justify-center gap-2 text-sm font-bold text-secondary hover:opacity-80 transition-opacity cursor-pointer"
					aria-label="Toggle Language"
				>
					<Globe size={18} />
					<span className="font-kannada">
						{locale === "en" ? "ಕನ್ನಡ" : "English"}
					</span>
				</button>

				<button className="h-11 px-6 bg-brand-black text-white text-sm font-bold rounded-xl hover:bg-primary transition-all shadow-lg shadow-slate-200 flex items-center gap-2 active:scale-95">
					<User size={16} />
					{translations.login}
				</button>
			</div>

			{/* Mobile Toggle */}
			<button
				className="md:hidden p-2 text-brand-black cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
				aria-label={isOpen ? "Close Menu" : "Open Menu"}
			>
				{isOpen ? <X size={28} /> : <Menu size={28} />}
			</button>

			{/* Mobile Drawer */}
			{isOpen && (
				<div className="fixed inset-0 top-18.25 bg-white z-50 md:hidden animate-in fade-in slide-in-from-top-5">
					<nav className="flex flex-col p-8 gap-6 font-bold text-xl text-brand-black bg-white">
						<a href="#services" onClick={() => setIsOpen(false)}>
							{translations.services}
						</a>
						<a href="#impact" onClick={() => setIsOpen(false)}>
							{translations.impact}
						</a>
						<a href="#contact" onClick={() => setIsOpen(false)}>
							{translations.contact}
						</a>
						<button
							onClick={handleLanguageToggle}
							className="flex items-center gap-3 text-secondary pt-4 border-t border-slate-100"
						>
							<Globe size={24} />
							<span className="font-kannada">
								{locale === "en" ? "ಕನ್ನಡ" : "English"}
							</span>
						</button>
					</nav>
				</div>
			)}
		</>
	);
}
