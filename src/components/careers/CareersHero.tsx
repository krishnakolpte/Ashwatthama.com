import Link from "next/link";
import Image from "next/image";
import { Users, Award, ArrowDown } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function CareersHero() {
	const t = await getTranslations("careersHero");
	const locale = await getLocale();

	return (
		<section className="relative min-h-[90vh] flex items-center bg-[#FCFCFD] overflow-hidden pt-20">
			{/* Advanced Background Layers */}
			<div className="absolute inset-0 geometric-pattern opacity-[0.03] pointer-events-none" />
			<div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
			<div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 items-center gap-16 lg:gap-24 relative z-10">
				{/* Left Side: Content */}
				<div className="animate-in fade-in slide-in-from-left-8 duration-1000 order-2 lg:order-1">
					<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white shadow-sm border border-slate-100 mb-10 transition-transform hover:scale-105">
						<span className="relative flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
						</span>
						<span
							className={`text-primary text-xs font-black uppercase tracking-[0.2em] ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("badge")}
						</span>
						<Users className="text-primary size-4" />
					</div>

					<h1
						className={`text-5xl lg:text-7xl font-black text-brand-black leading-[1.05] tracking-tighter mb-8 ${locale === "kn" ? "font-kannada lg:text-6xl" : ""}`}
					>
						{t("headlineMain")} <br />
						<span className="text-slate-400 font-serif italic font-normal">
							{t("headlineItalic")}
						</span>
						<br />
						<span className="text-primary relative inline-block">
							{t("headlineBrand")}
							{/* SVG Underline Accent */}
							<svg
								className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
								viewBox="0 0 100 12"
								preserveAspectRatio="none"
							>
								<path
									d="M0,10 Q50,0 100,10"
									stroke="currentColor"
									strokeWidth="4"
									fill="transparent"
								/>
							</svg>
						</span>
					</h1>

					<p
						className={`text-lg md:text-xl font-medium text-slate-500 max-w-lg mb-12 leading-relaxed ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("description")}
					</p>

					<div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
						<Link
							href="#jobs"
							className={`h-16 px-10 rounded-2xl bg-primary text-white font-black text-lg shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("btnOpenings")}
						</Link>
						<Link
							href="#apply"
							className={`h-16 px-10 rounded-2xl bg-white border border-slate-200 text-brand-black font-black text-lg hover:border-secondary hover:text-secondary transition-all flex items-center gap-3 active:scale-95 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("btnApply")}
						</Link>
					</div>
				</div>

				{/* Right Side: Image Section */}
				<div className="relative order-1 lg:order-2 animate-in fade-in zoom-in-95 duration-1000 delay-200 group">
					{/* Decorative Background for Image */}
					<div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-[4rem] -rotate-12 blur-3xl group-hover:rotate-0 transition-transform duration-1000" />

					<div className="relative z-10 overflow-hidden rounded-[3.5rem] shadow-2xl border-[12px] border-white bg-slate-100 aspect-[4/5] transform transition-all duration-700 group-hover:scale-[1.02]">
						<Image
							src="/careers.jpg"
							alt="Our professional staff"
							fill
							className="object-cover transition-transform duration-1000 group-hover:scale-110"
							priority
						/>
					</div>

					{/* Glass-morphism Floating Card */}
					<div className="absolute z-20  top-8 left-8 md:-left-12 bg-white/80 backdrop-blur-xl p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-4 border border-white/50 animate-float">
						<div className="size-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-secondary border border-emerald-100 shadow-inner">
							<Award size={28} />
						</div>
						<div>
							<p
								className={`text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-0.5 ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("cultureLabel")}
							</p>
							<p
								className={`text-base font-black text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("cultureValue")}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
				<span
					className={`text-[10px] font-black uppercase tracking-[0.4em] ${locale === "kn" ? "font-kannada" : ""}`}
				>
					{t("scrollText")}
				</span>
				<div className="w-px h-16 bg-gradient-to-b from-brand-black to-transparent relative">
					<div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-scroll-line" />
				</div>
			</div>
		</section>
	);
}
