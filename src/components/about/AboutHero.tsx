import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function AboutHero() {
	const t = await getTranslations("aboutHero");
	const locale = await getLocale();

	return (
		<section className="relative min-h-[85vh] flex items-center bg-[#FCFCFD] overflow-hidden pt-12 pb-24">
			{/* Background Pattern */}
			<div className="absolute inset-0 geometric-pattern opacity-[0.03] pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 items-center gap-16 relative z-10">
				{/* Left Content Column */}
				<div>
					<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
						<span className="size-2 rounded-full bg-primary animate-pulse" />
						<span
							className={`text-primary text-[11px] font-black uppercase tracking-widest ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("badge")}
						</span>
					</div>

					<h1 className="text-6xl lg:text-7xl font-black text-brand-black leading-[1.05] tracking-tighter mb-8">
						{t("titlePart1")}{" "}
						<span
							className={`italic font-normal text-primary ${locale === "en" ? "font-serif" : "font-kannada"}`}
						>
							{t("titleAccent1")}
						</span>
						,<br />
						{t("titlePart2")}{" "}
						<span
							className={`italic font-normal text-secondary ${locale === "en" ? "font-serif" : "font-kannada"}`}
						>
							{t("titleAccent2")}
						</span>
					</h1>

					<p
						className={`text-xl font-medium text-slate-500 max-w-lg mb-10 leading-relaxed ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("description")}
					</p>

					<div className="flex items-center gap-4">
						<div className="flex -space-x-3">
							{[200, 300, 400].map((shade) => (
								<div
									key={shade}
									className={`size-12 rounded-full border-2 border-white bg-slate-${shade}`}
								/>
							))}
						</div>
						<p
							className={`text-sm font-bold text-slate-600 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("socialProof")}
						</p>
					</div>
				</div>

				{/* Right Image Column */}
				<div className="relative">
					<div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

					<div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white">
						<Image
							src="/herobg.png"
							alt="Local Community"
							width={800}
							height={550}
							priority
							className="w-full h-[550px] object-cover"
						/>
					</div>

					{/* Floating Trust Card */}
					<div className="absolute z-20 -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
						<div className="size-14 bg-primary rounded-2xl flex items-center justify-center text-white">
							<BadgeCheck size={32} strokeWidth={2.5} />
						</div>
						<div>
							<p
								className={`text-[10px] uppercase font-bold text-slate-400 tracking-widest ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("trustBadgeTitle")}
							</p>
							<p
								className={`text-lg font-black text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("trustBadgeText")}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
				<span
					className={`text-[10px] font-black uppercase tracking-[0.3em] ${locale === "kn" ? "font-kannada" : ""}`}
				>
					{t("scrollLabel")}
				</span>
				<div className="w-px h-10 bg-gradient-to-b from-brand-black to-transparent" />
			</div>
		</section>
	);
}
