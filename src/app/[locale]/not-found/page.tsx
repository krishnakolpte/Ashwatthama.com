"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
	Home,
	Headset,
	Search,
	PiggyBank,
	UserSearch,
	HandCoins,
	Wallet,
	Building2,
} from "lucide-react";

export default function NotFound() {
	const locale = useLocale();
	const t = useTranslations("NotFound");

	const destinations = [
		{
			title: t("card1"),
			href: `/loans`,
			icon: HandCoins,
			color: "text-primary",
		},
		{
			title: t("card2"),
			href: `/investments`,
			icon: Wallet,
			color: "text-secondary",
		},
		{
			title: t("card3"),
			href: `/about`,
			icon: Building2,
			color: "text-slate-900",
		},
	];

	return (
		<section className="grow relative overflow-hidden flex items-center justify-center py-16 md:py-24 bg-white min-h-[85vh]">
			{/* Background Mandalas - Optimized Decorative Elements */}
			<div className="absolute -top-20 -left-20 w-80 h-80 md:w-96 md:h-96 mandala-corner opacity-15 pointer-events-none transition-opacity duration-1000" />
			<div className="absolute -bottom-20 -right-20 w-80 h-80 md:w-96 md:h-96 mandala-corner rotate-180 opacity-15 pointer-events-none transition-opacity duration-1000" />

			<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
				{/* 404 Hero Section */}
				<div className="flex justify-center mb-10">
					<div className="relative group">
						<div className="size-56 md:size-64 bg-amber-50 rounded-full flex items-center justify-center relative shadow-inner ring-1 ring-amber-100/50 transition-transform duration-500 hover:scale-105">
							<PiggyBank className="size-32 md:size-40 text-amber-600/20 stroke-[1.25]" />

							<div className="absolute inset-0 flex items-center justify-center">
								<span className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter drop-shadow-sm">
									4<span className="text-primary">0</span>4
								</span>
							</div>

							{/* Status Badge */}
							<div className="absolute -bottom-4 -right-4 md:-right-8 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-100 rotate-12 transition-all group-hover:rotate-0">
								<div className="size-10 md:size-12 bg-secondary rounded-lg flex items-center justify-center text-white mb-2 mx-auto shadow-md shadow-secondary/20">
									<UserSearch
										className="size-5 md:size-6"
										strokeWidth={2.5}
									/>
								</div>
								<p className="text-[10px] font-black uppercase tracking-widest text-secondary">
									{locale === "kn"
										? "ಹುಡುಕಲಾಗುತ್ತಿದೆ..."
										: "Searching..."}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Dynamic Text Content */}
				<h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
					{t("title_main")}{" "}
					<span className="text-primary italic font-serif block sm:inline">
						{t("detour")}
					</span>
				</h2>

				<div className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
					<p
						className={
							locale === "kn"
								? "font-kannada text-xl md:text-2xl leading-snug"
								: ""
						}
					>
						{t("desc")}
					</p>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
					<Link
						href="/"
						className="w-full sm:w-auto h-14 px-10 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-red-950 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-3"
					>
						<Home className="size-5" strokeWidth={2.5} />
						{t("btn_home")}
					</Link>
					<Link
						href="/support"
						className="w-full sm:w-auto h-14 px-10 bg-secondary text-white font-bold rounded-xl shadow-lg shadow-secondary/20 hover:bg-emerald-900 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-3"
					>
						<Headset className="size-5" strokeWidth={2.5} />
						{t("btn_support")}
					</Link>
				</div>

				{/* Search Interaction */}
				<div className="max-w-lg mx-auto mb-16 px-2">
					<div className="relative group bg-slate-50 rounded-2xl border border-slate-200 focus-within:bg-white focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/5 transition-all duration-300">
						<Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-primary transition-colors" />
						<input
							type="text"
							placeholder={t("search_placeholder")}
							className="w-full bg-transparent border-none py-4 pl-12 pr-4 rounded-2xl text-sm focus:outline-none placeholder:text-slate-400 font-medium"
						/>
					</div>
				</div>

				{/* Quick Destinations Grid */}
				<div className="border-t border-slate-200/60 pt-10">
					<p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">
						{t("quick_links_label")}
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
						{destinations.map((item, idx) => (
							<Link
								key={idx}
								href={item.href}
								className="group p-6 md:p-8 bg-slate-50/50 hover:bg-white border border-slate-100 rounded-3xl transition-all hover:shadow-xl hover:shadow-slate-200/50 flex flex-col items-center"
							>
								<item.icon
									className={`size-10 mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`}
									strokeWidth={2}
								/>
								<h4
									className={`font-bold text-slate-900 group-hover:text-primary transition-colors ${
										locale === "kn"
											? "font-kannada text-lg"
											: "text-base"
									}`}
								>
									{item.title}
								</h4>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
