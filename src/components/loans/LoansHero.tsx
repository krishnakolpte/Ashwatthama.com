import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { ArrowRight, BadgeCheck, Zap } from "lucide-react";

export default async function LoansHero() {
	const t = await getTranslations("loan-section");
	const locale = await getLocale();

	return (
		<section className="relative min-h-[90vh] flex items-center bg-[#FCFCFD] overflow-hidden pt-20 pb-28">
			{/* Advanced Background Layers from styling guide */}
			<div className="absolute inset-0 geometric-pattern opacity-[0.03] pointer-events-none" />
			<div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
			<div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 items-center gap-16 lg:gap-24 relative z-10">
				{/* Left Content Column */}
				<div className="order-2 lg:order-1 relative z-20 text-center lg:text-left">
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
						{t("titlePart1")} <br />
						<span
							className={`text-primary relative inline-block ${locale === "en" ? "font-serif italic font-normal" : "font-kannada font-black"}`}
						>
							{t("titlePart2")}
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
						<br />
						{t("titlePart3")}
					</h1>

					<p
						className={`text-lg md:text-xl font-medium text-slate-500 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("description")}
					</p>

					<div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
						<button
							className={`h-16 px-10 rounded-2xl bg-primary text-white font-black text-lg shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all flex items-center gap-3 cursor-pointer active:scale-95 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("btnExplore")}
							<ArrowRight className="size-5" />
						</button>
						<button
							className={`h-16 px-10 rounded-2xl bg-white border border-slate-200 text-brand-black font-black text-lg hover:border-secondary hover:text-secondary transition-all flex items-center gap-3 cursor-pointer active:scale-95 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("btnJoin")}
						</button>
					</div>
				</div>

				{/* Right Image Column */}
				<div className="relative order-1 lg:order-2 group">
					{/* Decorative Element Behind Image */}
					<div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-[4rem] -rotate-12 blur-3xl group-hover:rotate-0 transition-transform duration-1000" />

					<div className="relative z-10 rounded-[3rem] overflow-hidden transform transition-all duration-700 group-hover:scale-[1.02]">
						<Image
							src="/herobg.png"
							alt="Loan services"
							width={700}
							height={700}
							priority
							className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] transition-transform duration-1000 group-hover:scale-105"
						/>
					</div>

					{/* Floating Card 1: KYC (Glass-morphism style) */}
					<div className="absolute z-20 top-10 -left-6 md:-left-10 bg-white/80 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-4 animate-float border border-white/50">
						<div className="size-12 bg-emerald-50 rounded-xl flex items-center justify-center text-secondary shadow-inner">
							<BadgeCheck className="size-7" />
						</div>
						<div>
							<p
								className={`text-[10px] uppercase font-black text-slate-400 tracking-wider mb-0.5 ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("kycLabel")}
							</p>
							<p
								className={`text-sm font-black text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("kycValue")}
							</p>
						</div>
					</div>

					{/* Floating Card 2: Disbursal */}
					<div
						className="absolute z-20 bottom-10 -right-6 md:-right-10 bg-white/80 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-4 animate-float border border-white/50"
						style={{ animationDelay: "2s" }}
					>
						<div className="size-12 bg-red-50 rounded-xl flex items-center justify-center text-primary shadow-inner">
							<Zap className="size-7 fill-current" />
						</div>
						<div>
							<p
								className={`text-[10px] uppercase font-black text-slate-400 tracking-wider mb-0.5 ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("disbursalLabel")}
							</p>
							<p
								className={`text-sm font-black text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("disbursalValue")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
