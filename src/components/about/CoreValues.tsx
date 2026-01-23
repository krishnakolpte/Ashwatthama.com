import { ShieldCheck, Leaf, Search } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function CoreValues() {
	const t = await getTranslations("values");
	const locale = await getLocale();

	const valuesData = [
		{
			icon: <ShieldCheck size={36} className="text-primary" />,
			title: t("trustTitle"),
			desc: t("trustDesc"),
			bgColor: "bg-red-50",
			hoverBorder: "hover:border-primary/20",
		},
		{
			icon: <Leaf size={36} className="text-secondary" />,
			title: t("empowerTitle"),
			desc: t("empowerDesc"),
			bgColor: "bg-emerald-50",
			hoverBorder: "hover:border-secondary/20",
		},
		{
			icon: <Search size={36} className="text-primary" />,
			title: t("transparencyTitle"),
			desc: t("transparencyDesc"),
			bgColor: "bg-red-50",
			hoverBorder: "hover:border-primary/20",
		},
	];

	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="grid lg:grid-cols-3 gap-12">
					{valuesData.map((item, index) => (
						<div
							key={index}
							className={`p-10 rounded-[2.5rem] border border-slate-100 bg-white transition-all group ${item.hoverBorder}`}
						>
							<div
								className={`size-16 rounded-2xl ${item.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
							>
								{item.icon}
							</div>
							<h4
								className={`text-2xl font-black mb-4 text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{item.title}
							</h4>
							<p
								className={`text-slate-500 font-medium leading-relaxed ${locale === "kn" ? "font-kannada text-lg" : ""}`}
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
