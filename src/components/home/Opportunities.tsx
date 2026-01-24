import { getTranslations, getLocale } from "next-intl/server";
import { Percent, Megaphone, Tally5, ArrowRight } from "lucide-react";

export default async function Opportunities() {
	const t = await getTranslations("Opportunities");
	const locale = await getLocale();

	const cards = [
		{
			title: t("card1_title"),
			desc: t("card1_desc"),
			btn: t("card1_btn"),
			icon: Percent,
			colorClass: "hover:bg-primary",
			iconClass: "text-primary",
			shadowClass: "hover:shadow-primary/30",
		},
		{
			title: t("card2_title"),
			desc: t("card2_desc"),
			btn: t("card2_btn"),
			icon: Megaphone,
			colorClass: "hover:bg-secondary",
			iconClass: "text-secondary",
			shadowClass: "hover:shadow-secondary/30",
		},
		{
			title: t("card3_title"),
			desc: t("card3_desc"),
			btn: t("card3_btn"),
			icon: Tally5,
			colorClass: "hover:bg-brand-black",
			iconClass: "text-brand-black",
			shadowClass: "hover:shadow-black/30",
		},
	];

	return (
		<section className="py-20 md:py-32 bg-brand-white relative overflow-hidden">
			{/* Background Accent */}
			<div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				{/* Header Section */}
				<div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 text-center md:text-left">
					<div className="max-w-2xl">
						<span
							className={`text-primary font-black tracking-widest uppercase text-[10px] sm:text-xs block mb-4 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("badge")}
						</span>
						<h2
							className={`text-3xl sm:text-5xl font-black text-brand-black tracking-tighter leading-[1.1] ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("title")}
						</h2>
					</div>

					{/* Visual Progress/Decorative Element */}
					<div className="hidden md:flex items-center gap-3 mb-2">
						<div className="h-1.5 w-16 bg-primary rounded-full" />
						<div className="h-1.5 w-8 bg-slate-200 rounded-full" />
						<div className="h-1.5 w-4 bg-slate-100 rounded-full" />
					</div>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
					{cards.map((card, index) => (
						<div
							key={index}
							className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-white p-8 md:p-12 transition-all duration-500 border border-slate-100 ${card.colorClass} hover:shadow-2xl ${card.shadowClass} hover:-translate-y-2`}
						>
							{/* Decorative Background Circle on Hover */}
							<div className="absolute -top-12 -right-12 size-32 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />

							<div
								className={`mb-8 md:mb-12 ${card.iconClass} group-hover:text-white transition-colors duration-300 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-white/20`}
							>
								<card.icon
									className="size-10 md:size-12"
									strokeWidth={2}
								/>
							</div>

							<h3
								className={`text-2xl md:text-3xl font-black mb-4 group-hover:text-white transition-colors duration-300 tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{card.title}
							</h3>

							<p
								className={`text-sm md:text-lg text-slate-500 group-hover:text-white/80 transition-colors duration-300 mb-10 leading-relaxed grow ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{card.desc}
							</p>

							<button className="group/btn w-full py-4 md:py-5 bg-white text-brand-black font-black rounded-2xl shadow-sm border border-slate-100 group-hover:border-transparent group-hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer">
								<span
									className={
										locale === "kn" ? "font-kannada" : ""
									}
								>
									{card.btn}
								</span>
								<ArrowRight
									size={18}
									className="group-hover/btn:translate-x-1 transition-transform"
								/>
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
