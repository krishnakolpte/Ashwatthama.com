"use client";

import { useState, FormEvent } from "react";
import { useTranslations, useLocale } from "next-intl";
import {
	Phone,
	Mail,
	MessageCircle,
	MapPin,
	Clock,
	Store,
	ChevronRight,
	Loader2,
	CheckCircle,
} from "lucide-react";

export default function ContactPage() {
	const t = useTranslations("contact");
	const locale = useLocale();
	const [formStatus, setFormStatus] = useState<
		"idle" | "sending" | "success"
	>("idle");

	const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormStatus("sending");
		// Simulated API call
		setTimeout(() => setFormStatus("success"), 1500);
	};

	const isKn = locale === "kn";

	return (
		<main className="bg-white">
			{/* Hero Section - Optimized Mobile Padding */}
			<section className="relative bg-[#FCFCFD] pt-24 pb-32 md:pt-40 md:pb-44 overflow-hidden border-b border-slate-50">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

				<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
					<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
						<span className="size-2 rounded-full bg-primary animate-pulse"></span>
						<span
							className={`text-primary text-[10px] md:text-[11px] font-black uppercase tracking-widest ${isKn ? "font-kannada" : ""}`}
						>
							{t("badge")}
						</span>
					</div>
					<h1
						className={`text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8 ${isKn ? "font-kannada" : ""}`}
					>
						{t("titleMain")}{" "}
						<span className="text-primary font-serif italic font-medium block sm:inline">
							{t("titleHighlight")}
						</span>
					</h1>
					<p
						className={`text-lg md:text-xl font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed ${isKn ? "font-kannada" : ""}`}
					>
						{t("description")}
					</p>
				</div>
			</section>

			{/* Contact Cards - Stack on mobile, Grid on MD+ */}
			<section className="py-12 -mt-20 relative z-20">
				<div className="max-w-7xl mx-auto px-6 lg:px-10">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
						{/* Call Card */}
						<a
							href="tel:+91081762XXXXX"
							className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-all block"
						>
							<div className="size-14 md:size-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
								<Phone className="size-7 md:size-8" />
							</div>
							<h3
								className={`text-xl font-black mb-2 text-slate-900 ${isKn ? "font-kannada" : ""}`}
							>
								{t("cards.call")}
							</h3>
							<p className="text-slate-500 text-sm mb-6 leading-relaxed">
								{t("cards.callDesc")}
							</p>
							<p className="text-primary font-extrabold text-lg">
								+91 08176 2XXXXX
							</p>
						</a>

						{/* Email Card */}
						<a
							href="mailto:support@ashwatthama.finance"
							className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-all block"
						>
							<div className="size-14 md:size-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
								<Mail className="size-7 md:size-8" />
							</div>
							<h3
								className={`text-xl font-black mb-2 text-slate-900 ${isKn ? "font-kannada" : ""}`}
							>
								{t("cards.email")}
							</h3>
							<p className="text-slate-500 text-sm mb-6 leading-relaxed">
								{t("cards.emailDesc")}
							</p>
							<p className="text-primary font-extrabold text-lg break-all">
								support@ashwatthama.finance
							</p>
						</a>

						{/* WhatsApp Card */}
						<a
							href="https://wa.me/919876543210"
							target="_blank"
							className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-all block"
						>
							<div className="size-14 md:size-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
								<MessageCircle className="size-7 md:size-8" />
							</div>
							<h3
								className={`text-xl font-black mb-2 text-slate-900 ${isKn ? "font-kannada" : ""}`}
							>
								{t("cards.whatsapp")}
							</h3>
							<p className="text-slate-500 text-sm mb-6 leading-relaxed">
								{t("cards.whatsappDesc")}
							</p>
							<p className="text-primary font-extrabold text-lg">
								+91 98765 43210
							</p>
						</a>
					</div>
				</div>
			</section>

			{/* Branch Locator - Optimized Grid */}
			<section className="py-20 md:py-32 bg-white relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
					<div className="text-center mb-16">
						<span
							className={`text-primary font-bold tracking-widest uppercase text-xs block mb-3 ${isKn ? "font-kannada" : ""}`}
						>
							{t("locator.badge")}
						</span>
						<h2
							className={`text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 ${isKn ? "font-kannada" : ""}`}
						>
							{t("locator.title")}
						</h2>
						<p
							className={`text-slate-500 max-w-2xl mx-auto ${isKn ? "font-kannada" : ""}`}
						>
							{t("locator.desc")}
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
						{/* Map Holder */}
						<div className="lg:col-span-7 h-[400px] lg:h-full min-h-[400px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-2xl relative bg-slate-100">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d76.3!3d13.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzAwLjAiTiA3NsKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v123456789"
								className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
								allowFullScreen
								loading="lazy"
							></iframe>
						</div>

						{/* Branch Info List */}
						<div className="lg:col-span-5 space-y-6">
							{[
								{
									name: "Channarayapatna (HO)",
									color: "text-primary",
									icon: Store,
									time: "9:30 AM - 6:00 PM",
									addr: "Main Road, Near Old Bus Stand, Channarayapatna",
								},
								{
									name: "Hassan City Branch",
									color: "text-emerald-500",
									icon: MapPin,
									time: "10:00 AM - 5:30 PM",
									addr: "B.M. Road, Opposite DC Office, Hassan",
								},
							].map((branch, i) => (
								<div
									key={i}
									className="p-6 md:p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all"
								>
									<div className="flex items-center gap-4 mb-6">
										<div
											className={`p-3 rounded-xl bg-white shadow-sm ${branch.color}`}
										>
											<branch.icon size={24} />
										</div>
										<h4
											className={`text-xl font-black text-slate-900 ${isKn ? "font-kannada" : ""}`}
										>
											{branch.name}
										</h4>
									</div>
									<div className="space-y-4 mb-8 text-sm md:text-base text-slate-500">
										<p className="flex gap-3">
											<MapPin className="size-5 text-primary shrink-0" />{" "}
											{branch.addr}
										</p>
										<p className="flex gap-3">
											<Clock className="size-5 text-primary shrink-0" />{" "}
											Mon - Sat: {branch.time}
										</p>
									</div>
									<button className="w-full py-4 bg-white text-slate-900 font-bold border border-slate-200 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-2 group">
										{t("locator.getDirections")}
										<ChevronRight
											size={18}
											className="group-hover:translate-x-1 transition-transform"
										/>
									</button>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="py-20 bg-slate-50">
				<div className="max-w-4xl mx-auto px-6">
					<div className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
						{formStatus === "success" ? (
							<div className="text-center py-10 animate-in zoom-in duration-300">
								<CheckCircle className="size-20 text-emerald-500 mx-auto mb-6" />
								<h2
									className={`text-3xl font-black mb-4 ${isKn ? "font-kannada" : ""}`}
								>
									Message Sent!
								</h2>
								<p className="text-slate-500 mb-8">
									We will get back to you within 24 hours.
								</p>
								<button
									onClick={() => setFormStatus("idle")}
									className="text-primary font-bold hover:underline"
								>
									Send another message
								</button>
							</div>
						) : (
							<>
								<div className="text-center mb-12">
									<h2
										className={`text-3xl md:text-4xl font-black text-slate-900 mb-4 ${isKn ? "font-kannada" : ""}`}
									>
										{t("form.title")}
									</h2>
									<p
										className={`text-slate-500 ${isKn ? "font-kannada" : ""}`}
									>
										{t("form.desc")}
									</p>
								</div>
								<form
									onSubmit={handleContactSubmit}
									className="grid grid-cols-1 md:grid-cols-2 gap-6"
								>
									<div className="space-y-2">
										<label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
											{t("form.name")}
										</label>
										<input
											required
											type="text"
											name="user_name"
											className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
											placeholder="Ramesh Kumar"
										/>
									</div>
									<div className="space-y-2">
										<label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
											{t("form.phone")}
										</label>
										<input
											required
											type="tel"
											name="user_phone"
											className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
											placeholder="+91 XXXX"
										/>
									</div>
									<div className="md:col-span-2 space-y-2">
										<label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
											{t("form.type")}
										</label>
										<select
											required
											name="product_type"
											className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
										>
											<option value="">
												Select product...
											</option>
											<option value="personal">
												Personal Loan
											</option>
											<option value="business">
												Business Loan
											</option>
											<option value="gold">
												Gold Loan
											</option>
										</select>
									</div>
									<div className="md:col-span-2 space-y-2">
										<label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
											{t("form.message")}
										</label>
										<textarea
											required
											name="message"
											className="w-full p-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all min-h-[150px]"
											placeholder="How can we help?"
										></textarea>
									</div>
									<button
										type="submit"
										disabled={formStatus === "sending"}
										className="md:col-span-2 py-5 bg-primary text-white text-lg font-extrabold rounded-2xl shadow-xl shadow-red-900/20 hover:bg-slate-900 transition-all disabled:opacity-70 flex items-center justify-center gap-3"
									>
										{formStatus === "sending" ? (
											<Loader2 className="animate-spin" />
										) : (
											t("form.submit")
										)}
									</button>
								</form>
							</>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
