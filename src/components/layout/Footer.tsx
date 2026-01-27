"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Send, Share2, Globe, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
	const t = useTranslations("Footer");

	return (
		<footer className="bg-[#021512] text-white pt-16 md:pt-24 pb-12">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				{/* Main Grid: 1 col on mobile, 2 on tablet, 12-col layout on desktop */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
					{/* Brand Column */}
					<div className="lg:col-span-4 space-y-6">
						<Link
							href="/"
							className="flex items-center gap-1 group outline-none w-fit"
						>
							<div className="relative h-10 w-16 sm:w-20">
								<Image
									alt="Ashwatthama Microfinance Logo"
									src="/logo.png"
									fill
									className="object-contain transition-transform duration-300 group-hover:scale-105"
									sizes="80px"
									priority
								/>
							</div>
							<div>
								<h2 className="text-white text-xl font-extrabold leading-tight tracking-tight">
									Ashwatthama
								</h2>
								<p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] leading-none">
									Microfinance
								</p>
							</div>
						</Link>

						<p className="text-white/50 leading-relaxed font-medium max-w-sm text-sm sm:text-base">
							{t("description")}
						</p>

						<div className="space-y-6">
							<div>
								<p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">
									{t("newsletter_label")}
								</p>
								<form
									className="flex gap-2 max-w-md"
									onSubmit={(e) => e.preventDefault()}
								>
									<input
										className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
										placeholder={t(
											"newsletter_placeholder",
										)}
										type="email"
										required
									/>
									<button className="bg-primary hover:bg-red-900 px-5 py-3 rounded-xl transition-all active:scale-95 group shrink-0">
										<Send
											size={20}
											className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
										/>
									</button>
								</form>
							</div>
							<div className="flex gap-4">
								<Link
									href="#"
									className="size-10 sm:size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors"
								>
									<Share2 size={18} />
								</Link>
								<Link
									href="#"
									className="size-10 sm:size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors"
								>
									<Globe size={18} />
								</Link>
							</div>
						</div>
					</div>

					{/* Quick Links Column */}
					<div className="lg:col-span-2">
						<h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-6 md:mb-10 text-white/30">
							{t("links_title")}
						</h4>
						<ul className="space-y-4 text-white/60 font-bold text-sm">
							{[
								"Interest Rates",
								"Member Guidelines",
								"KYC Documentation",
								"Privacy Policy",
							].map((link) => (
								<li key={link}>
									<Link
										href="/"
										className="hover:text-primary transition-colors block"
									>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Products Column */}
					<div className="lg:col-span-2">
						<h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-6 md:mb-10 text-white/30">
							{t("products_title")}
						</h4>
						<ul className="space-y-4 text-white/60 font-bold text-sm">
							{[
								"Personal Loans",
								"Gold Loan Mela",
								"Pigmy Passbook",
								"MSME Credit",
							].map((item) => (
								<li key={item}>
									<Link
										href="/loans"
										className="hover:text-primary transition-colors block"
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Column */}
					<div className="lg:col-span-4">
						<h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-6 md:mb-10 text-white/30">
							{t("contact_title")}
						</h4>
						<div className="space-y-6">
							<div className="flex gap-4">
								<MapPin
									className="text-primary shrink-0"
									size={20}
								/>
								<div>
									<p className="font-bold text-sm mb-1">
										{t("address_label")}
									</p>
									<p className="text-sm text-white/40 leading-relaxed max-w-xs">
										{t("address_text")}
									</p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<Phone className="text-primary" size={20} />
								<p className="font-bold text-sm">
									+91 08176 2XXXXX
								</p>
							</div>
							<div className="flex items-center gap-4">
								<Mail className="text-primary" size={20} />
								<p className="font-bold text-sm break-all">
									support@ashwatthama.finance
								</p>
							</div>
							<div className="pt-4 border-t border-white/5">
								<p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">
									CIN Number
								</p>
								<p className="text-sm font-bold text-white/70">
									U65999KA2019PTC123456
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
					<p className="text-white/30 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
						{t("rights")}
					</p>
					<div className="flex items-center gap-6 sm:gap-8 grayscale invert opacity-20">
						<div className="h-6 w-16 sm:h-8 sm:w-20 relative">
							<Image
								src="/u2.webp"
								alt="Gov"
								fill
								className="object-contain"
							/>
						</div>
						<div className="h-6 w-16 sm:h-8 sm:w-20 relative">
							<Image
								src="/u1.webp"
								alt="Digital India"
								fill
								className="object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
