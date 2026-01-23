import { TrendingUp, HeartHandshake, Sprout } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function Culture() {
	const t = await getTranslations("culture");
	const locale = await getLocale();

	const cultureItems = [
		{
			icon: <TrendingUp size={36} />,
			title: t("growthTitle"),
			desc: t("growthDesc"),
		},
		{
			icon: <HeartHandshake size={36} />,
			title: t("impactTitle"),
			desc: t("impactDesc"),
		},
		{
			icon: <Sprout size={36} />,
			title: t("balanceTitle"),
			desc: t("balanceDesc"),
		},
	];

	return (
		<section className="py-24 bg-white" id="culture">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="text-center mb-16">
					<span
						className={`text-primary font-bold tracking-widest uppercase text-xs block mb-3 ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("badge")}
					</span>
					<h2
						className={`text-5xl font-black text-brand-black tracking-tight mb-4 ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("title")}
					</h2>
					<p
						className={`text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{cultureItems.map((item, index) => (
						<div
							key={index}
							className="p-10 bg-slate-50 rounded-[3rem] transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 group border border-transparent hover:border-slate-100"
						>
							<div className="size-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
								{item.icon}
							</div>
							<h3
								className={`text-2xl font-black mb-4 text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{item.title}
							</h3>
							<p
								className={`text-slate-500 leading-relaxed ${locale === "kn" ? "font-kannada text-lg" : ""}`}
							>
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
