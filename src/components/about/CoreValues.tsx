import { ShieldCheck, Leaf, Search, MoveRight } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function CoreValues() {
	const t = await getTranslations("values");
	const locale = await getLocale();

	const valuesData = [
		{
			icon: <ShieldCheck size={36} />,
			title: t("trustTitle"),
			desc: t("trustDesc"),
			bgColor: "bg-red-50",
			iconColor: "text-primary",
			accentColor: "bg-primary",
			hoverBg: "hover:shadow-red-500/5",
		},
		{
			icon: <Leaf size={36} />,
			title: t("empowerTitle"),
			desc: t("empowerDesc"),
			bgColor: "bg-emerald-50",
			iconColor: "text-secondary",
			accentColor: "bg-secondary",
			hoverBg: "hover:shadow-emerald-500/5",
		},
		{
			icon: <Search size={36} />,
			title: t("transparencyTitle"),
			desc: t("transparencyDesc"),
			bgColor: "bg-blue-50",
			iconColor: "text-blue-600",
			accentColor: "bg-blue-600",
			hoverBg: "hover:shadow-blue-500/5",
		},
	];

	return (
		<section className="py-24 md:py-32 bg-white relative overflow-hidden">
			{/* Subtle Gradient Orbs */}
			<div className="absolute top-0 left-1/4 size-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
			<div className="absolute bottom-0 right-1/4 size-96 bg-secondary/5 rounded-full blur-[100px] translate-y-1/2" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
					{valuesData.map((item, index) => (
						<div
							key={index}
							className={`relative group p-10 lg:p-12 rounded-[3rem] border border-slate-100 bg-white transition-all duration-500 hover:shadow-2xl ${item.hoverBg} hover:-translate-y-2`}
						>
							{/* Top Accent Strip */}
							<div
								className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-b-full transition-all duration-500 group-hover:w-48 ${item.accentColor}`}
							/>

							<div
								className={`size-20 rounded-3xl ${item.bgColor} ${item.iconColor} flex items-center justify-center mb-10 transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-inner`}
							>
								{item.icon}
							</div>

							<h4
								className={`text-2xl md:text-3xl font-black mb-6 text-brand-black transition-colors ${locale === "kn" ? "font-kannada leading-tight" : ""}`}
							>
								{item.title}
							</h4>

							<p
								className={`text-slate-500 font-medium leading-relaxed mb-8 ${locale === "kn" ? "font-kannada text-lg text-slate-600" : "text-base"}`}
							>
								{item.desc}
							</p>

							{/* Minimal Footer Decor */}
							<div className="pt-6 border-t border-slate-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								<span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
									Core Value {index + 1}
								</span>
								<MoveRight
									size={20}
									className={item.iconColor}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
