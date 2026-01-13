import { getTranslations } from "next-intl/server";
import { Truck, TrendingDown, Bolt } from "lucide-react";

export default async function WhyUs() {
	const t = await getTranslations("WhyUs");

	const features = [
		{
			icon: <Truck className="size-8" />,
			title: t("feature1_title"),
			desc: t("feature1_desc"),
			color: "text-primary",
		},
		{
			icon: <TrendingDown className="size-8" />,
			title: t("feature2_title"),
			desc: t("feature2_desc"),
			color: "text-secondary",
		},
		{
			icon: <Bolt className="size-8" />,
			title: t("feature3_title"),
			desc: t("feature3_desc"),
			color: "text-brand-black",
		},
	];

	return (
		<section className="py-24 bg-brand-white" id="why-us">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="text-center max-w-3xl mx-auto mb-20">
					<span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs block mb-4 font-jakarta">
						{t("badge")}
					</span>
					<h2 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight mb-6 font-kannada">
						{t("title")}
					</h2>
					<p className="text-slate-500 font-medium font-kannada">
						{t("subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col items-start group"
						>
							<div
								className={`size-16 bg-white rounded-2xl shadow-xl flex items-center justify-center ${feature.color} mb-8 border border-slate-50 group-hover:-translate-y-2 transition-transform duration-300`}
							>
								{feature.icon}
							</div>
							<h3 className="text-xl font-extrabold mb-4 font-kannada">
								{feature.title}
							</h3>
							<p className="text-slate-500 leading-relaxed font-medium font-kannada">
								{feature.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
