import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
	Landmark,
	Send,
	Share2,
	Globe,
	MapPin,
	Phone,
	Mail,
} from "lucide-react";

export default function Footer() {
	const t = useTranslations("Footer");

	return (
		<footer className="bg-[#021512] text-white pt-24 pb-12">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
					{/* Brand Column */}
					<div className="lg:col-span-4">
						<Link
							href="/"
							className="flex items-center gap-0.5 group outline-none rounded-lg mb-3"
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
								<h2 className="text-brand-white text-xl font-extrabold leading-tight tracking-tight">
									Ashwatthama
								</h2>
								<p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] leading-none">
									Microfinance
								</p>
							</div>
						</Link>
						<p className="text-white/50 leading-relaxed font-medium mb-8 max-w-sm">
							{t("description")}
						</p>

						<div className="space-y-6">
							<div>
								<p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">
									{t("newsletter_label")}
								</p>
								<form className="flex gap-2">
									<input
										className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
										placeholder={t(
											"newsletter_placeholder"
										)}
										type="email"
									/>
									<button className="bg-primary hover:bg-red-900 px-6 py-3 rounded-xl transition-all active:scale-95 group">
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
									className="size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors"
								>
									<Share2 size={20} />
								</Link>
								<Link
									href="#"
									className="size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors"
								>
									<Globe size={20} />
								</Link>
							</div>
						</div>
					</div>

					{/* Links Column */}
					<div className="lg:col-span-2">
						<h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-10 text-white/30">
							{t("links_title")}
						</h4>
						<ul className="space-y-4 text-white/60 font-bold text-sm">
							<li>
								<Link
									href="#"
									className="hover:text-primary transition-colors"
								>
									Interest Rates
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-primary transition-colors"
								>
									Member Guidelines
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-primary transition-colors"
								>
									KYC Documentation
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-primary transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>

					{/* Products Column */}
					<div className="lg:col-span-2">
						<h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-10 text-white/30">
							{t("products_title")}
						</h4>
						<ul className="space-y-4 text-white/60 font-bold text-sm">
							<li>
								<Link
									href="#"
									className="hover:text-primary transition-colors"
								>
									Personal Loans
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-primary transition-colors"
								>
									Gold Loan Mela
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-primary transition-colors"
								>
									Pigmy Passbook
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-primary transition-colors"
								>
									MSME Credit
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Column */}
					<div className="lg:col-span-4">
						<h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-10 text-white/30">
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
									<p className="text-sm text-white/40 leading-relaxed">
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
								<p className="font-bold text-sm">
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
				<div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-white/30 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
						{t("rights")}
					</p>
					<div className="flex items-center gap-8 grayscale invert opacity-20">
						{/* Replace src with your local assets */}
						<div className="h-8 w-20 relative">
							<Image
								src="/u2.webp"
								alt="Digital India"
								fill
								sizes="(max-width: 768px) 80px, 100px"
								className="object-contain"
								priority={false}
							/>
						</div>
						<div className="h-8 w-20 relative">
							<Image
								src="/u1.webp"
								alt="Digital India"
								fill
								sizes="(max-width: 768px) 80px, 100px"
								className="object-contain"
								priority={false}
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
