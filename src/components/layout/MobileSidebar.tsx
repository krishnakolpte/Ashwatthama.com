"use client";

import { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "@/i18n/routing";
import { NavProps } from "@/types/navbar";
import Image from "next/image";

export default function MobileSidebar({
	t,
	isOpen,
	onClose,
}: NavProps & { isOpen: boolean; onClose: () => void }) {
	const [activeTab, setActiveTab] = useState<string | null>(null);

	const toggle = (tab: string) =>
		setActiveTab(activeTab === tab ? null : tab);

	return (
		<div
			className={`fixed inset-0 z-[200] lg:hidden ${isOpen ? "visible" : "invisible"}`}
		>
			{/* Backdrop */}
			<div
				className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
				onClick={onClose}
			/>

			{/* Drawer - Width adjusted for md: max-w-sm keeps it neat on tablets */}
			<div
				className={`absolute right-0 top-0 h-full w-[85%] sm:w-[70%] md:w-[60%] max-w-sm bg-brand-white shadow-2xl transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
			>
				<div className="flex flex-col h-full p-4 sm:p-6 w-full">
					{/* Header */}
					<div className="flex justify-between bg-brand-white w-full h-20 items-center">
						<Link
							href="/"
							onClick={onClose}
							className="flex items-center gap-2 group outline-none"
						>
							<div className="relative h-10 w-16 sm:w-20 group cursor-pointer">
								<Image
									alt="Ashwatthama Microfinance Logo"
									src="/logo.png"
									fill
									className="object-contain transition-transform duration-300 group-hover:scale-105"
									sizes="(max-width: 768px) 80px, 100px"
									priority
								/>
							</div>
							<div className="flex flex-col">
								<h2 className="text-primary text-lg sm:text-xl font-extrabold leading-tight tracking-tight">
									{t.brand}
								</h2>
								<p className="text-secondary text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-none">
									{t.tagline}
								</p>
							</div>
						</Link>
						<button
							onClick={onClose}
							className="p-2 text-slate-400 hover:text-primary transition-colors"
						>
							<X size={28} className="sm:w-8 sm:h-8" />
						</button>
					</div>

					{/* Navigation Links */}
					<nav className="mt-6 sm:mt-8 space-y-1 sm:space-y-2 overflow-y-auto flex-1 pr-2 scrollbar-hide">
						<Link
							href="/"
							onClick={onClose}
							className="block py-3 text-base sm:text-lg font-bold text-slate-700 border-b border-slate-100"
						>
							{t.links.home}
						</Link>
						<Link
							href="/about-us"
							onClick={onClose}
							className="block py-3 text-base sm:text-lg font-bold text-slate-700 border-b border-slate-100"
						>
							{t.links.about}
						</Link>

						{/* LOANS ACCORDION */}
						<div className="border-b border-slate-100 pb-2">
							<button
								onClick={() => toggle("loans")}
								className="flex w-full items-center justify-between py-3 text-base sm:text-lg font-bold text-slate-700"
							>
								{t.links.loans}
								{activeTab === "loans" ? (
									<ChevronUp size={20} />
								) : (
									<ChevronDown size={20} />
								)}
							</button>
							{activeTab === "loans" && (
								<div className="mt-2 space-y-5 sm:space-y-6 pl-4 animate-in slide-in-from-top-2">
									<div>
										<p className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">
											{t.sections.personal}
										</p>
										<ul className="space-y-3 border-l-2 border-slate-50 pl-4">
											{[
												{
													label: t.items.all,
													href: "/loans/#loan-0",
												},
												{
													label: t.items.home,
													href: "/loans/#loan-0",
												},
												{
													label: t.items.vehicle,
													href: "/loans/#loan-0",
												},
												{
													label: t.items.edu,
													href: "/loans/#loan-0",
												},
											].map((item, idx) => (
												<li key={idx}>
													<Link
														href={item.href}
														onClick={onClose}
														className="text-sm font-bold text-slate-600 hover:text-primary transition-colors"
													>
														{item.label}
													</Link>
												</li>
											))}
										</ul>
									</div>
									<div>
										<p className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">
											{t.sections.businessAgri}
										</p>
										<ul className="space-y-3 border-l-2 border-slate-50 pl-4">
											{[
												{
													label: t.items.msme,
													href: "/loans/#loan-0",
												},
												{
													label: t.items.agri,
													href: "/loans/#loan-0",
												},
												{
													label: t.items.animal,
													href: "/loans/#loan-0",
												},
											].map((item, idx) => (
												<li key={idx}>
													<Link
														href={item.href}
														onClick={onClose}
														className="text-sm font-bold text-slate-600 hover:text-primary transition-colors"
													>
														{item.label}
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
							)}
						</div>

						{/* INVESTMENTS ACCORDION */}
						<div className="border-b border-slate-100 pb-2">
							<button
								onClick={() => toggle("invest")}
								className="flex w-full items-center justify-between py-3 text-base sm:text-lg font-bold text-slate-700"
							>
								{t.links.investments}
								{activeTab === "invest" ? (
									<ChevronUp size={20} />
								) : (
									<ChevronDown size={20} />
								)}
							</button>
							{activeTab === "invest" && (
								<div className="mt-2 pl-4 animate-in slide-in-from-top-2">
									<p className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">
										{t.sections.fixedIncome}
									</p>
									<ul className="space-y-3 border-l-2 border-slate-50 pl-4">
										{[
											{
												label: t.items.fd,
												href: "/loans",
											},
											{
												label: t.items.rd,
												href: "/loans",
											},
											{
												label: t.items.pigmy,
												href: "/loans",
											},
										].map((item, idx) => (
											<li key={idx}>
												<Link
													href={item.href}
													onClick={onClose}
													className="text-sm font-bold text-slate-600 hover:text-primary transition-colors"
												>
													{item.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>

						<Link
							href="/careers"
							onClick={onClose}
							className="block py-3 text-base sm:text-lg font-bold text-slate-700 border-b border-slate-100"
						>
							{t.links.careers}
						</Link>
						<Link
							href="/contact"
							onClick={onClose}
							className="block py-3 text-base sm:text-lg font-bold text-slate-700 border-b border-slate-100"
						>
							{t.links.contact}
						</Link>
					</nav>

					{/* Footer Action */}
					<div className="mt-auto pt-6">
						<button className="h-12 sm:h-14 w-full bg-primary text-white font-bold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-primary/30 active:scale-[0.98] transition-all">
							{t.actions.portal}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
