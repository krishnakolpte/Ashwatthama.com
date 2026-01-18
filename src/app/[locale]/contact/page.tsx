"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MessageCircle, MapPin, Clock, Store } from "lucide-react";

export default function ContactPage() {
	const t = useTranslations("contact");

	return (
		<main className="bg-white">
			{/* Hero Section */}
			<section className="relative bg-[#FCFCFD] pt-32 pb-24 overflow-hidden border-b border-slate-50">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

				<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
					<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
						<span className="size-2 rounded-full bg-primary animate-pulse"></span>
						<span className="text-primary text-[11px] font-black uppercase tracking-widest">
							{t("badge")}
						</span>
					</div>
					<h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8">
						{t("titleMain")}{" "}
						<span className="text-primary font-serif italic font-medium">
							{t("titleHighlight")}
						</span>
					</h1>
					<p className="text-xl font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed">
						{t("description")}
					</p>
				</div>
			</section>

			{/* Contact Cards */}
			<section className="py-20 -mt-20 relative z-20">
				<div className="max-w-7xl mx-auto px-6 lg:px-10">
					<div className="grid md:grid-cols-3 gap-8">
						{/* Call Card */}
						<div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-all">
							<div className="size-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
								<Phone className="size-8" />
							</div>
							<h3 className="text-xl font-black mb-2 text-slate-900">
								{t("cards.call")}
							</h3>
							<p className="text-slate-500 text-sm mb-6 leading-relaxed">
								{t("cards.callDesc")}
							</p>
							<p className="text-primary font-extrabold text-lg">
								+91 08176 2XXXXX
							</p>
						</div>

						{/* Email Card */}
						<div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-all">
							<div className="size-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
								<Mail className="size-8" />
							</div>
							<h3 className="text-xl font-black mb-2 text-slate-900">
								{t("cards.email")}
							</h3>
							<p className="text-slate-500 text-sm mb-6 leading-relaxed">
								{t("cards.emailDesc")}
							</p>
							<p className="text-primary font-extrabold text-lg">
								support@ashwatthama.finance
							</p>
						</div>

						{/* WhatsApp Card */}
						<div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-all">
							<div className="size-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
								<MessageCircle className="size-8" />
							</div>
							<h3 className="text-xl font-black mb-2 text-slate-900">
								{t("cards.whatsapp")}
							</h3>
							<p className="text-slate-500 text-sm mb-6 leading-relaxed">
								{t("cards.whatsappDesc")}
							</p>
							<p className="text-primary font-extrabold text-lg">
								+91 98765 43210
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Branch Locator Section */}
			<section className="py-24 bg-white relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
					<div className="text-center mb-16">
						<span className="text-primary font-bold tracking-widest uppercase text-xs block mb-3">
							{t("locator.badge")}
						</span>
						<h2 className="text-5xl font-black text-slate-900 tracking-tight mb-4">
							{t("locator.title")}
						</h2>
						<p className="text-slate-500 max-w-2xl mx-auto">
							{t("locator.desc")}
						</p>
					</div>

					<div className="grid lg:grid-cols-12 gap-10">
						{/* Map Placeholder */}
						<div className="lg:col-span-8 h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl relative bg-slate-50">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15563.864450143896!2d76.3847255!3d12.8777176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba516244f07759d%3A0x63345f1b6329e46a!2sChannarayapatna%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
								className="w-full h-full border-0 grayscale opacity-80"
								allowFullScreen
								loading="lazy"
							></iframe>
						</div>

						{/* Branch Info */}
						<div className="lg:col-span-4 space-y-6">
							{[
								{
									name: "Channarayapatna (HO)",
									color: "primary",
									icon: Store,
									time: "9:30 AM - 6:00 PM",
								},
								{
									name: "Hassan City Branch",
									color: "secondary",
									icon: MapPin,
									time: "10:00 AM - 5:30 PM",
								},
							].map((branch, i) => (
								<div
									key={i}
									className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all"
								>
									<div className="flex items-center gap-3 mb-6">
										<branch.icon
											className={`text-${branch.color}`}
										/>
										<h4 className="text-xl font-black text-slate-900">
											{branch.name}
										</h4>
									</div>
									<div className="space-y-4 mb-8 text-sm text-slate-500">
										<p className="flex gap-3">
											<MapPin className="size-5 text-primary shrink-0" />{" "}
											Main Road, Near Old Bus Stand, KA
										</p>
										<p className="flex gap-3">
											<Clock className="size-5 text-primary shrink-0" />{" "}
											Mon - Sat: {branch.time}
										</p>
									</div>
									<button className="w-full py-4 bg-white text-slate-900 font-bold border border-slate-200 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-all">
										{t("locator.getDirections")}
									</button>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form */}
			<section className="py-24 bg-slate-50">
				<div className="max-w-4xl mx-auto px-6">
					<div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
						<div className="text-center mb-12">
							<h2 className="text-4xl font-black text-slate-900 mb-4">
								{t("form.title")}
							</h2>
							<p className="text-slate-500">{t("form.desc")}</p>
						</div>
						<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
									{t("form.name")}
								</label>
								<input
									type="text"
									className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
									placeholder="Ramesh Kumar"
								/>
							</div>
							<div className="space-y-2">
								<label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
									{t("form.phone")}
								</label>
								<input
									type="tel"
									className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
									placeholder="+91 XXXX"
								/>
							</div>
							<div className="md:col-span-2 space-y-2">
								<label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
									{t("form.type")}
								</label>
								<select className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
									<option>Select product...</option>
									<option>Personal Loan</option>
								</select>
							</div>
							<div className="md:col-span-2 space-y-2">
								<label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
									{t("form.message")}
								</label>
								<textarea
									className="w-full p-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all min-h-[150px]"
									placeholder="How can we help?"
								></textarea>
							</div>
							<button className="md:col-span-2 py-5 bg-primary text-white text-lg font-extrabold rounded-2xl shadow-xl shadow-red-900/20 hover:bg-slate-900 transition-all cursor-pointer">
								{t("form.submit")}
							</button>
						</form>
					</div>
				</div>
			</section>
		</main>
	);
}
