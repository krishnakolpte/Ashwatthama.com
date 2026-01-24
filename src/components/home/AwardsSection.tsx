import { getTranslations, getLocale } from "next-intl/server";
import { Medal, MapPinned, Users2 } from "lucide-react";

export default async function AwardsSection() {
	const t = await getTranslations("Awards");
	const locale = await getLocale();

	const data = [
		{
			icon: <Medal className="size-10 md:size-12 text-primary" />,
			value: "10+",
			label: t("awards_label"),
			borderColor: "border-primary/20",
			hoverShadow: "group-hover:shadow-primary/20",
		},
		{
			icon: <MapPinned className="size-10 md:size-12 text-secondary" />,
			value: "50+",
			label: t("branches_label"),
			borderColor: "border-secondary/20",
			hoverShadow: "group-hover:shadow-secondary/20",
		},
		{
			icon: <Users2 className="size-10 md:size-12 text-brand-black" />,
			value: "1 Lakh+",
			label: t("members_label"),
			borderColor: "border-slate-200",
			hoverShadow: "group-hover:shadow-slate-200",
		},
	];

	return (
		<section className="py-20 md:py-32 bg-white border-y border-slate-100 relative overflow-hidden">
			{/* Subtle radial background for elegance */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-50/50 via-transparent to-transparent pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
					<h2
						className={`text-4xl md:text-5xl font-black text-brand-black mb-4 tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("title")}
					</h2>
					<p
						className={`text-base md:text-lg text-slate-500 font-medium leading-relaxed ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
					{data.map((item, i) => (
						<div key={i} className="group text-center">
							<div className="mb-8 flex justify-center">
								<div
									className={`p-6 md:p-8 rounded-[2.5rem] bg-white border-2 ${item.borderColor} transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${item.hoverShadow}`}
								>
									{item.icon}
								</div>
							</div>

							<h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-black mb-3 tracking-tighter transition-colors group-hover:text-primary">
								{item.value}
							</h3>

							<div className="flex items-center justify-center gap-3">
								<div className="h-px w-4 bg-slate-200 group-hover:w-8 group-hover:bg-primary transition-all duration-500" />
								<p
									className={`text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{item.label}
								</p>
								<div className="h-px w-4 bg-slate-200 group-hover:w-8 group-hover:bg-primary transition-all duration-500" />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
