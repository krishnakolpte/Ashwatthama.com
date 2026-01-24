import { Rocket, Eye, Sparkles } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function MissionVision() {
	const t = await getTranslations("missionVision");
	const locale = await getLocale();

	return (
		<section className="py-24 md:py-32 bg-white relative overflow-hidden">
			{/* Background Pattern - Mandala & Abstract Grid */}
			<div className="absolute inset-0 mandala-watermark opacity-[0.07] pointer-events-none" />
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
					{/* Mission Card */}
					<div className="relative overflow-hidden bg-primary p-10 lg:p-16 rounded-[3.5rem] text-white group hover:-translate-y-3 transition-all duration-700 shadow-2xl shadow-primary/20 border border-white/10">
						{/* Decorative Radial Shine */}
						<div className="absolute -top-24 -right-24 size-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700" />

						<div className="relative z-10">
							<div className="bg-white/10 w-fit p-4 rounded-2xl mb-8 group-hover:rotate-12 transition-transform duration-500">
								<Rocket
									size={48}
									strokeWidth={2}
									className="text-white"
								/>
							</div>

							<h2
								className={`text-4xl lg:text-5xl font-black mb-6 tracking-tighter ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("missionTitle")}
							</h2>

							<div className="h-1.5 w-16 bg-white/30 rounded-full mb-8 group-hover:w-24 transition-all duration-500" />

							<p
								className={`text-lg md:text-xl text-white/90 leading-relaxed font-medium ${locale === "kn" ? "font-kannada font-normal text-white/80" : ""}`}
							>
								{t("missionDesc")}
							</p>
						</div>
					</div>

					{/* Vision Card */}
					<div className="relative overflow-hidden bg-secondary p-10 lg:p-16 rounded-[3.5rem] text-white group hover:-translate-y-3 transition-all duration-700 shadow-2xl shadow-secondary/20 border border-white/10">
						{/* Decorative Radial Shine */}
						<div className="absolute -top-24 -right-24 size-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700" />

						<div className="relative z-10">
							<div className="bg-white/10 w-fit p-4 rounded-2xl mb-8 group-hover:-rotate-12 transition-transform duration-500">
								<Eye
									size={48}
									strokeWidth={2}
									className="text-white"
								/>
							</div>

							<h2
								className={`text-4xl lg:text-5xl font-black mb-6 tracking-tighter ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("visionTitle")}
							</h2>

							<div className="h-1.5 w-16 bg-white/30 rounded-full mb-8 group-hover:w-24 transition-all duration-500" />

							<p
								className={`text-lg md:text-xl text-white/90 leading-relaxed font-medium ${locale === "kn" ? "font-kannada font-normal text-white/80" : ""}`}
							>
								{t("visionDesc")}
							</p>
						</div>
					</div>
				</div>

				{/* Bottom Slogan/Accent */}
				<div className="mt-16 flex justify-center items-center gap-4 text-slate-300 select-none">
					<div className="h-px w-12 bg-slate-200" />
					<Sparkles size={20} />
					<div className="h-px w-12 bg-slate-200" />
				</div>
			</div>
		</section>
	);
}
