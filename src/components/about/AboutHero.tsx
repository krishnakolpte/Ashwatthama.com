import Image from "next/image";
import { BadgeCheck, MousePointer2 } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function AboutHero() {
	const t = await getTranslations("aboutHero");
	const locale = await getLocale();

	return (
		<section className="relative min-h-[90vh] flex items-center bg-[#FCFCFD] overflow-hidden pt-20 pb-28">
			{/* Advanced Background Layers */}
			<div className="absolute inset-0 geometric-pattern opacity-[0.04] pointer-events-none" />
			<div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
			<div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 items-center gap-16 lg:gap-24 relative z-10">
				{/* Left Content Column */}
				<div className="order-2 lg:order-1">
					<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white shadow-sm border border-slate-100 mb-10 transition-transform hover:scale-105 cursor-default">
						<span className="relative flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
						</span>
						<span
							className={`text-primary text-xs font-black uppercase tracking-[0.2em] ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("badge")}
						</span>
					</div>

					<h1
						className={`text-5xl md:text-6xl lg:text-7xl font-black text-brand-black leading-[1.05] tracking-tighter mb-8 ${locale === "kn" ? "font-kannada lg:text-6xl" : ""}`}
					>
						{t("titlePart1")}{" "}
						<span
							className={`text-primary relative inline-block ${locale === "en" ? "font-serif italic font-normal" : "font-kannada font-black"}`}
						>
							{t("titleAccent1")}
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
						,<br className="hidden md:block" />
						<span className="md:ml-4">{t("titlePart2")} </span>
						<span
							className={`text-secondary ${locale === "en" ? "font-serif italic font-normal" : "font-kannada font-black"}`}
						>
							{t("titleAccent2")}
						</span>
					</h1>

					<p
						className={`text-lg md:text-xl font-medium text-slate-500 max-w-xl mb-12 leading-relaxed ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("description")}
					</p>

					<div className="flex flex-wrap items-center gap-6">
						<div className="flex flex-col">
							<div className="flex gap-1 text-amber-400 mb-1">
								{[...Array(5)].map((_, i) => (
									<BadgeCheck
										key={i}
										size={14}
										fill="currentColor"
										className="text-amber-400"
									/>
								))}
							</div>
							<p
								className={`text-sm font-black text-brand-black tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("socialProof")}
							</p>
						</div>
					</div>
				</div>

				{/* Right Image Column */}
				<div className="relative order-1 lg:order-2 group">
					{/* Decorative Elements */}
					<div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-[3rem] -rotate-12 blur-2xl group-hover:rotate-0 transition-transform duration-1000" />

					<div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] border-[12px] border-white transform transition-all duration-700 group-hover:scale-[1.02]">
						<Image
							src="/about.jpg"
							alt="Local Community"
							width={800}
							height={650}
							priority
							className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent" />
					</div>

					{/* Enhanced Floating Trust Card */}
					<div className="absolute z-20 -bottom-8 -left-8 md:-left-12 bg-white p-5 md:p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-5 animate-float border border-slate-50">
						<div className="size-16 bg-primary rounded-[1.2rem] flex items-center justify-center text-white shadow-lg shadow-primary/30">
							<BadgeCheck size={36} strokeWidth={2} />
						</div>
						<div>
							<p
								className={`text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-1 ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("trustBadgeTitle")}
							</p>
							<p
								className={`text-xl font-black text-brand-black leading-none ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("trustBadgeText")}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Visual Scroll Indicator */}
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
				<span
					className={`text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 ${locale === "kn" ? "font-kannada" : ""}`}
				>
					{t("scrollLabel")}
				</span>
				<div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
					<div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
				</div>
			</div>
		</section>
	);
}
