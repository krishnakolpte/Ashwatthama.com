import { Rocket, Eye } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function MissionVision() {
	const t = await getTranslations("missionVision");
	const locale = await getLocale();

	return (
		<section className="py-24 bg-white relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 mandala-watermark opacity-10 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="grid md:grid-cols-2 gap-8">
					{/* Mission Card */}
					<div className="bg-primary p-12 lg:p-16 rounded-[3rem] text-white group hover:-translate-y-2 transition-transform duration-500 shadow-2xl shadow-red-900/20">
						<Rocket
							size={72}
							strokeWidth={1.5}
							className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity"
						/>
						<h2
							className={`text-4xl font-black mb-6 tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("missionTitle")}
						</h2>
						<p
							className={`text-xl text-white/80 leading-relaxed font-medium ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("missionDesc")}
						</p>
					</div>

					{/* Vision Card */}
					<div className="bg-secondary p-12 lg:p-16 rounded-[3rem] text-white group hover:-translate-y-2 transition-transform duration-500 shadow-2xl shadow-emerald-900/20">
						<Eye
							size={72}
							strokeWidth={1.5}
							className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity"
						/>
						<h2
							className={`text-4xl font-black mb-6 tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("visionTitle")}
						</h2>
						<p
							className={`text-xl text-white/80 leading-relaxed font-medium ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("visionDesc")}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
