"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Globe, Menu } from "lucide-react";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { NavProps } from "@/types/navbar";
import MobileSidebar from "./MobileSidebar";
import Image from "next/image";

export default function NavbarClient({ t, locale }: NavProps) {
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState(""); // 'loans' or 'investments'
	const navRef = useRef<HTMLDivElement>(null);

	const router = useRouter();
	const pathname = usePathname();

	// Close menu if clicking outside the navbar
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				navRef.current &&
				!navRef.current.contains(event.target as Node)
			) {
				setActiveMenu("");
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const toggleLang = () => {
		router.replace(pathname, { locale: locale === "en" ? "kn" : "en" });
	};

	const handleMenuToggle = (menuName: string) => {
		// Toggle the menu: if same clicked, close it; if different, switch to it.
		setActiveMenu(activeMenu === menuName ? "" : menuName);
	};

	const handleLinkClick = () => {
		// Instantly close the mega menu when a sub-link is selected
		setActiveMenu("");
	};

	return (
		<>
			<header
				ref={navRef}
				className="sticky top-0 z-100 w-full bg-white/95 backdrop-blur-md border-b border-slate-100"
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
					<div className="flex items-center gap-12">
						{/* Logo */}
						<Link
							href="/"
							className="flex items-center gap-2 group outline-none rounded-lg"
						>
							<div className="relative h-10 w-20 cursor-pointer">
								<Image
									alt="Ashwatthama Microfinance Logo"
									src="/logo.png"
									fill
									className="object-contain transition-transform duration-300 group-hover:scale-105"
									sizes="80px"
									priority
								/>
							</div>
							<div className="w-full">
								<h2 className="text-primary text-xl font-extrabold leading-tight tracking-tight">
									{t.brand}
								</h2>
								<p className="text-secondary text-[11px] font-black uppercase tracking-[0.2em] leading-none">
									{t.tagline}
								</p>
							</div>
						</Link>

						{/* Desktop Nav */}
						<nav className="hidden lg:flex items-center gap-8">
							<Link
								href="/"
								className="text-sm font-bold text-slate-600 hover:text-primary transition-colors"
							>
								{t.links.home || "Home"}
							</Link>

							{/* Loans Mega Menu */}
							<div className="static">
								<button
									onClick={() => handleMenuToggle("loans")}
									className={`flex items-center gap-1 text-sm font-bold py-5 transition-colors cursor-pointer outline-none ${activeMenu === "loans" ? "text-primary" : "text-slate-600 hover:text-primary"}`}
								>
									<span>{t.links.loans}</span>
									<ChevronDown
										size={14}
										className={`transition-transform duration-300 ${activeMenu === "loans" ? "rotate-180" : ""}`}
									/>
								</button>

								{/* Mega Menu Dropdown */}
								<div
									className={`
                                    absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl 
                                    transition-all duration-300 z-50
                                    ${
										activeMenu === "loans"
											? "opacity-100 visible translate-y-0"
											: "opacity-0 invisible -translate-y-2 pointer-events-none"
									}
                                `}
								>
									<div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 p-12">
										<div className="space-y-4">
											<h4 className="text-[11px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50 pb-2">
												{t.sections.personal}
											</h4>
											<ul className="space-y-3">
												{[
													"all",
													"home",
													"vehicle",
													"edu",
												].map((item, index) => (
													<li key={item}>
														<Link
															href={`/loans/#loan-${index}`}
															onClick={
																handleLinkClick
															}
															className="text-sm font-semibold text-slate-600 hover:text-primary hover:translate-x-1 transition-transform inline-block"
														>
															{t.items[item]}
														</Link>
													</li>
												))}
											</ul>
										</div>
										<div className="space-y-4">
											<h4 className="text-[11px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50 pb-2">
												{t.sections.businessAgri}
											</h4>
											<ul className="space-y-3">
												{["msme", "agri", "animal"].map(
													(item) => (
														<li key={item}>
															<Link
																href={`/loans/#${item}`}
																onClick={
																	handleLinkClick
																}
																className="text-sm font-semibold text-slate-600 hover:text-primary hover:translate-x-1 transition-transform inline-block"
															>
																{t.items[item]}
															</Link>
														</li>
													),
												)}
											</ul>
										</div>
									</div>
								</div>
							</div>

							{/* Investments Mega Menu */}
							<div className="static">
								<button
									onClick={() =>
										handleMenuToggle("investments")
									}
									className={`flex items-center gap-1 text-sm font-bold py-5 transition-colors cursor-pointer outline-none ${activeMenu === "investments" ? "text-primary" : "text-slate-600 hover:text-primary"}`}
								>
									{t.links.investments}
									<ChevronDown
										size={14}
										className={`transition-transform duration-300 ${activeMenu === "investments" ? "rotate-180" : ""}`}
									/>
								</button>
								<div
									className={`
                                    absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl 
                                    transition-all duration-300 z-50
                                    ${
										activeMenu === "investments"
											? "opacity-100 visible translate-y-0"
											: "opacity-0 invisible -translate-y-2 pointer-events-none"
									}
                                `}
								>
									<div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 p-12">
										<div className="space-y-4">
											<h4 className="text-[11px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50 pb-2">
												{t.sections.fixedIncome}
											</h4>
											<ul className="space-y-3">
												{["fd", "rd", "pigmy"].map(
													(item) => (
														<li key={item}>
															<Link
																href={`/investments/${item}`}
																onClick={
																	handleLinkClick
																}
																className="text-sm font-semibold text-slate-600 hover:text-primary hover:translate-x-1 transition-transform inline-block"
															>
																{t.items[item]}
															</Link>
														</li>
													),
												)}
											</ul>
										</div>
									</div>
								</div>
							</div>

							<Link
								href="/impact"
								className="text-sm font-bold text-slate-600 hover:text-primary transition-colors"
							>
								{t.links.impact}
							</Link>
							<Link
								href="/contact"
								className="text-sm font-bold text-slate-600 hover:text-primary transition-colors"
							>
								{t.links.contact}
							</Link>
						</nav>
					</div>

					{/* Actions */}
					<div className="flex items-center gap-3 lg:gap-6">
						<button
							onClick={toggleLang}
							className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-emerald-50 px-4 py-2 rounded-xl hover:bg-emerald-100 transition-all active:scale-95 cursor-pointer"
						>
							<Globe size={18} className="text-emerald-600" />
							{t.actions.lang}
						</button>
						<button className="hidden md:block h-11 px-6 bg-primary text-white text-sm font-bold rounded-xl hover:bg-red-800 transition-all shadow-lg shadow-red-900/20 active:scale-95 cursor-pointer">
							{t.actions.portal}
						</button>
						<button
							onClick={() => setIsMobileOpen(true)}
							className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
						>
							<Menu size={28} />
						</button>
					</div>
				</div>
			</header>

			<MobileSidebar
				t={t}
				locale={locale}
				isOpen={isMobileOpen}
				onClose={() => setIsMobileOpen(false)}
			/>
		</>
	);
}
