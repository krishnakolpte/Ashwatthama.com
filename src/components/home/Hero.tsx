import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { ArrowUpRight, PlayCircle, Verified, Wallet } from "lucide-react";

export default async function Hero() {
	const t = await getTranslations("Hero");
	const locale = await getLocale();

	return (
		<section className="relative min-h-screen flex items-center bg-[#FCFCFD] overflow-hidden pt-24 lg:pt-0 hampi-line-art">
			{/* Advanced Background Layers from AboutHero */}
			<div className="absolute inset-0 geometric-pattern opacity-[0.03] pointer-events-none" />
			<div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
			<div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content Side */}
					<div className="relative z-20 order-2 lg:order-1 py-10 lg:py-20 text-center lg:text-left">
						{/* Animated Badge Styling */}
						<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white shadow-sm border border-slate-100 mb-8 transition-transform hover:scale-105 cursor-default">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
							</span>
							<span
								className={`text-secondary text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("badge")}
							</span>
						</div>

						{/* Refined Heading with Underline Accent */}
						<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-brand-black leading-[1.1] lg:leading-[0.95] tracking-tighter mb-8">
							{t("titleLine1")} <br />
							<span
								className={`text-primary relative inline-block ${locale === "en" ? "font-serif italic font-normal" : "font-kannada"}`}
							>
								{t("titleLine2")}
								{/* SVG Underline from AboutHero */}
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
							{t("titleLine3")}
						</h1>

						<p
							className={`text-base md:text-xl font-medium text-slate-500 max-w-lg mx-auto lg:mx-0 mb-12 leading-relaxed ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("description")}
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
							<button
								className={`w-full sm:w-auto h-16 px-10 rounded-2xl bg-primary text-white font-black text-lg shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95 cursor-pointer ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("ctaStart")}
								<ArrowUpRight size={22} />
							</button>
							<button
								className={`w-full sm:w-auto h-16 px-10 rounded-2xl bg-white border border-slate-200 text-brand-black font-black text-lg hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-3 active:scale-95 cursor-pointer ${locale === "kn" ? "font-kannada" : ""}`}
							>
								<PlayCircle size={22} />
								{t("ctaWork")}
							</button>
						</div>

						{/* Stats Section with Divider Styling */}
						<div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-slate-100 pt-10 text-left">
							{[1, 2, 3].map((i) => (
								<div key={i}>
									<p
										className={`text-2xl md:text-3xl font-black ${i === 1 ? "text-secondary" : i === 2 ? "text-primary" : "text-brand-black"}`}
									>
										{t(`stat${i}_val`)}
									</p>
									<p
										className={`text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t(`stat${i}_label`)}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Visual Side */}
					<div className="relative order-1 lg:order-2 w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] z-10 group">
						{/* Decorative Background Orb behind image */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-100 rounded-full blur-3xl opacity-50 scale-75 group-hover:scale-100 transition-transform duration-1000" />

						<div className="relative w-full h-full transform transition-all duration-700 group-hover:scale-[1.02]">
							<Image
								src="/herobg.png"
								alt={t("imageAlt")}
								fill
								priority={true}
								quality={90}
								className="object-contain object-center lg:object-bottom drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
							/>
						</div>

						{/* Refined Floating Cards with Glassmorphism */}
						<div className="absolute top-10 left-0 lg:-left-8 flex items-center gap-4 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 animate-float border border-white/50">
							<div className="size-10 bg-emerald-50 rounded-xl flex items-center justify-center text-secondary shadow-inner">
								<Verified size={20} />
							</div>
							<div className="text-left">
								<p className="text-[10px] uppercase font-black text-slate-400 tracking-wider mb-0.5">
									{t("cardApproval_label")}
								</p>
								<p
									className={`text-sm font-black text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{t("cardApproval_value")}
								</p>
							</div>
						</div>

						<div
							className="absolute bottom-20 right-0 lg:-right-8 flex items-center gap-4 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 animate-float border border-white/50"
							style={{ animationDelay: "1.5s" }}
						>
							<div className="size-10 bg-red-50 rounded-xl flex items-center justify-center text-primary shadow-inner">
								<Wallet size={20} />
							</div>
							<div className="text-left">
								<p className="text-[10px] uppercase font-black text-slate-400 tracking-wider mb-0.5">
									{t("cardSavings_label")}
								</p>
								<p
									className={`text-sm font-black text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{t("cardSavings_value")}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Added Scroll Indicator from AboutHero */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
				<div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center p-1">
					<div className="w-1 h-1 bg-primary rounded-full animate-bounce" />
				</div>
			</div>
		</section>
	);
}
