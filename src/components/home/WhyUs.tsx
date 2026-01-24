import { getTranslations, getLocale } from "next-intl/server";
import { Truck, TrendingDown, Bolt } from "lucide-react";

export default async function WhyUs() {
	const t = await getTranslations("WhyUs");
	const locale = await getLocale();

	const features = [
		{
			icon: <Truck className="size-8 md:size-10" />,
			title: t("feature1_title"),
			desc: t("feature1_desc"),
			color: "text-primary",
			bgColor: "bg-primary/5",
			borderColor: "group-hover:border-primary/30",
		},
		{
			icon: <TrendingDown className="size-8 md:size-10" />,
			title: t("feature2_title"),
			desc: t("feature2_desc"),
			color: "text-secondary",
			bgColor: "bg-secondary/5",
			borderColor: "group-hover:border-secondary/30",
		},
		{
			icon: <Bolt className="size-8 md:size-10" />,
			title: t("feature3_title"),
			desc: t("feature3_desc"),
			color: "text-brand-black",
			bgColor: "bg-slate-100",
			borderColor: "group-hover:border-brand-black/30",
		},
	];

	return (
		<section
			className="py-20 md:py-32 bg-brand-white relative overflow-hidden"
			id="why-us"
		>
			{/* Background Texture Detail */}
			<div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
					<span
						className={`text-secondary font-black tracking-[0.4em] uppercase text-[10px] md:text-xs block mb-4 ${locale === "kn" ? "font-kannada" : "font-jakarta"}`}
					>
						{t("badge")}
					</span>
					<h2
						className={`text-3xl md:text-5xl lg:text-6xl font-black text-brand-black tracking-tighter mb-6 leading-tight ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("title")}
					</h2>
					<p
						className={`text-base md:text-lg text-slate-500 font-medium leading-relaxed ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col items-start group relative p-2"
						>
							{/* Decorative Step Number */}
							<div className="absolute -top-4 -left-2 text-7xl font-black text-slate-100/50 group-hover:text-slate-200 transition-colors pointer-events-none select-none -z-10">
								0{index + 1}
							</div>

							<div
								className={`size-20 md:size-24 ${feature.bgColor} rounded-3xl flex items-center justify-center ${feature.color} mb-8 border-2 border-transparent transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:bg-white ${feature.borderColor}`}
							>
								{feature.icon}
							</div>

							<h3
								className={`text-2xl font-black mb-4 text-brand-black group-hover:text-primary transition-colors duration-300 ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{feature.title}
							</h3>

							<div className="h-1 w-12 bg-slate-200 mb-6 group-hover:w-20 group-hover:bg-primary transition-all duration-500 rounded-full" />

							<p
								className={`text-slate-500 leading-relaxed font-medium text-base md:text-lg ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{feature.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
