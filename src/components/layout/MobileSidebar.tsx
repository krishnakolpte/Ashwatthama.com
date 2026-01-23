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
			className={`fixed inset-0 z-200 lg:hidden ${isOpen ? "visible" : "invisible"}`}
		>
			{/* Backdrop */}
			<div
				className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
				onClick={onClose}
			/>

			{/* Drawer */}
			<div
				className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-brand-white shadow-2xl transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
			>
				<div className="flex flex-col h-full p-6 w-full ">
					<div className="flex justify-between bg-brand-white w-full h-20 items-center">
						<Link
							href="/"
							onClick={onClose}
							className="flex items-center gap-1 group outline-none"
						>
							<div className="relative h-10 w-20 group cursor-pointer">
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
								<p className="text-secondary text-[10px] font-black uppercase tracking-[0.2em] leading-none">
									{t.tagline}
								</p>
							</div>
						</Link>
						<button
							onClick={onClose}
							className=" p-2 text-slate-400 hover:text-primary transition-colors"
						>
							<X size={32} />
						</button>
					</div>

					<nav className="mt-8 space-y-4 overflow-y-auto flex-1 pr-2">
						<Link
							href="/"
							onClick={onClose}
							className="block py-3 text-lg font-bold text-slate-700 border-b border-slate-100"
						>
							{t.links.home}
						</Link>
						<Link
							href="/about-us"
							onClick={onClose}
							className="block py-3 text-lg font-bold text-slate-700 border-b border-slate-100"
						>
							{t.links.about}
						</Link>
						{/* LOANS ACCORDION */}
						<div className="border-b border-slate-100 pb-2">
							<button
								onClick={() => toggle("loans")}
								className="flex w-full items-center justify-between py-3 text-lg font-bold text-slate-700"
							>
								{t.links.loans}{" "}
								{activeTab === "loans" ? (
									<ChevronUp size={20} />
								) : (
									<ChevronDown size={20} />
								)}
							</button>
							{activeTab === "loans" && (
								<div className="mt-2 space-y-6 pl-4 animate-in slide-in-from-top-2">
									<div>
										<p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">
											{t.sections.personal}
										</p>
										<ul className="space-y-3 border-l-2 border-slate-50 pl-4">
											<li>
												<Link
													href="#"
													onClick={onClose}
													className="text-sm font-bold text-slate-600"
												>
													{t.items.all}
												</Link>
											</li>
											<li>
												<Link
													href="#"
													onClick={onClose}
													className="text-sm font-bold text-slate-600"
												>
													{t.items.home}
												</Link>
											</li>
											<li>
												<Link
													href="#"
													onClick={onClose}
													className="text-sm font-bold text-slate-600"
												>
													{t.items.vehicle}
												</Link>
											</li>
											<li>
												<Link
													href="#"
													onClick={onClose}
													className="text-sm font-bold text-slate-600"
												>
													{t.items.edu}
												</Link>
											</li>
										</ul>
									</div>
									<div>
										<p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">
											{t.sections.businessAgri}
										</p>
										<ul className="space-y-3 border-l-2 border-slate-50 pl-4">
											<li>
												<Link
													href="#"
													onClick={onClose}
													className="text-sm font-bold text-slate-600"
												>
													{t.items.msme}
												</Link>
											</li>
											<li>
												<Link
													href="#"
													onClick={onClose}
													className="text-sm font-bold text-slate-600"
												>
													{t.items.agri}
												</Link>
											</li>
											<li>
												<Link
													href="#"
													onClick={onClose}
													className="text-sm font-bold text-slate-600"
												>
													{t.items.animal}
												</Link>
											</li>
										</ul>
									</div>
								</div>
							)}
						</div>

						{/* INVESTMENTS ACCORDION */}
						<div className="border-b border-slate-100 pb-2">
							<button
								onClick={() => toggle("invest")}
								className="flex w-full items-center justify-between py-3 text-lg font-bold text-slate-700"
							>
								{t.links.investments}{" "}
								{activeTab === "invest" ? (
									<ChevronUp size={20} />
								) : (
									<ChevronDown size={20} />
								)}
							</button>
							{activeTab === "invest" && (
								<div className="mt-2 pl-4 animate-in slide-in-from-top-2">
									<p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">
										{t.sections.fixedIncome}
									</p>
									<ul className="space-y-3 border-l-2 border-slate-50 pl-4">
										<li>
											<Link
												href="#"
												onClick={onClose}
												className="text-sm font-bold text-slate-600"
											>
												{t.items.fd}
											</Link>
										</li>
										<li>
											<Link
												href="#"
												onClick={onClose}
												className="text-sm font-bold text-slate-600"
											>
												{t.items.rd}
											</Link>
										</li>
										<li>
											<Link
												href="#"
												onClick={onClose}
												className="text-sm font-bold text-slate-600"
											>
												{t.items.pigmy}
											</Link>
										</li>
									</ul>
								</div>
							)}
						</div>

						<Link
							href="/careers"
							onClick={onClose}
							className="block py-3 text-lg font-bold text-slate-700 border-b border-slate-100"
						>
							{t.links.careers}
						</Link>
						<Link
							href="/contact"
							onClick={onClose}
							className="block py-3 text-lg font-bold text-slate-700 border-b border-slate-100"
						>
							{t.links.contact}
						</Link>
					</nav>

					<button className="mt-8 h-14 w-full bg-primary text-white font-bold rounded-2xl shadow-xl shadow-red-900/20 active:scale-95 transition-transform">
						{t.actions.portal}
					</button>
				</div>
			</div>
		</div>
	);
}
