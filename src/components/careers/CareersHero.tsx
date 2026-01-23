import Link from "next/link";
import Image from "next/image";
import { Users, Award } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function CareersHero() {
	const t = await getTranslations("careersHero");
	const locale = await getLocale();

	return (
		<section className="relative min-h-[85vh] flex items-center bg-[#FCFCFD] overflow-hidden">
			{/* Background Glow */}
			<div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 items-center gap-16 py-24 relative z-10">
				<div className="animate-in fade-in slide-in-from-left-8 duration-1000">
					<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
						<span
							className={`text-primary text-[11px] font-black uppercase tracking-widest ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("badge")}
						</span>
						<Users className="text-primary" size={16} />
					</div>

					<div className="relative mb-8">
						{/* Geometric Pattern Placeholder */}
						<div className="absolute -top-6 -left-6 w-32 h-32 bg-[url('/patterns/geo.svg')] opacity-10 pointer-events-none" />
						<h1
							className={`text-6xl lg:text-8xl font-black text-brand-black leading-[0.95] tracking-tighter relative ${locale === "kn" ? "font-kannada leading-tight" : ""}`}
						>
							{t("headlineMain")} <br />
							<span className="font-serif italic font-normal text-slate-400">
								{t("headlineItalic")}
							</span>
							<br />
							<span className="text-primary font-serif italic font-medium">
								{t("headlineBrand")}
							</span>
						</h1>
					</div>

					<p
						className={`text-xl font-medium text-slate-500 max-w-lg mb-12 leading-relaxed ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("description")}
					</p>

					<div className="flex flex-wrap gap-5">
						<Link
							href="#jobs"
							className="h-16 px-10 rounded-2xl bg-primary text-white font-extrabold text-lg shadow-2xl shadow-red-900/30 hover:-translate-y-1 hover:brightness-110 transition-all flex items-center gap-3"
						>
							{t("btnOpenings")}
						</Link>
						<Link
							href="#apply"
							className="h-16 px-10 rounded-2xl bg-white border border-slate-200 text-brand-black font-extrabold text-lg hover:border-secondary hover:text-secondary transition-all flex items-center gap-3"
						>
							{t("btnApply")}
						</Link>
					</div>
				</div>

				{/* Image Section */}
				<div className="relative hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-200">
					<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[4rem] rotate-3 scale-105" />
					<div className="relative z-10 overflow-hidden rounded-[3.5rem] shadow-2xl border-8 border-white bg-slate-200 aspect-[4/5]">
						<Image
							src="/images/careers/hero-staff.jpg"
							alt="Staff Image"
							fill
							className="object-cover"
							priority
						/>
					</div>

					{/* Floating Card using Pure CSS Animation */}
					<div className="absolute -bottom-6 -left-12 bg-white p-5 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-100 animate-bounce [animation-duration:3s]">
						<div className="size-12 bg-emerald-50 rounded-xl flex items-center justify-center text-secondary border border-emerald-100">
							<Award size={24} />
						</div>
						<div>
							<p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
								{t("cultureLabel")}
							</p>
							<p
								className={`text-sm font-extrabold text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("cultureValue")}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Line */}
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
				<span className="text-[10px] font-black uppercase tracking-[0.3em]">
					{t("scrollText")}
				</span>
				<div className="w-px h-12 bg-gradient-to-b from-brand-black to-transparent" />
			</div>
		</section>
	);
}
