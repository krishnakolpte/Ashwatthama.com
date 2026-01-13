import { getTranslations } from "next-intl/server";
import { Percent, Megaphone, Tally5 } from "lucide-react";

export default async function Opportunities() {
	const t = await getTranslations("Opportunities");

	const cards = [
		{
			title: t("card1_title"),
			desc: t("card1_desc"),
			btn: t("card1_btn"),
			icon: Percent,
			colorClass: "hover:bg-primary",
			iconClass: "text-primary",
			shadowClass: "hover:shadow-primary/20",
		},
		{
			title: t("card2_title"),
			desc: t("card2_desc"),
			btn: t("card2_btn"),
			icon: Megaphone,
			colorClass: "hover:bg-secondary",
			iconClass: "text-secondary",
			shadowClass: "hover:shadow-secondary/20",
		},
		{
			title: t("card3_title"),
			desc: t("card3_desc"),
			btn: t("card3_btn"),
			icon: Tally5,
			colorClass: "hover:bg-brand-black",
			iconClass: "text-brand-black",
			shadowClass: "hover:shadow-black/20",
		},
	];

	return (
		<section className="py-16 md:py-24 bg-white relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
				{/* Header: Centered on mobile, Left-aligned on desktop */}
				<div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 text-center md:text-left">
					<div className="mb-6 md:mb-0">
						<span className="text-primary font-bold tracking-widest uppercase text-[10px] sm:text-xs block mb-3">
							{t("badge")}
						</span>
						<h2 className="text-3xl sm:text-4xl font-black text-brand-black tracking-tight font-kannada">
							{t("title")}
						</h2>
					</div>
					{/* Decorative lines: Hidden on mobile to save space */}
					<div className="hidden md:flex gap-2 mb-2">
						<div className="h-1 w-12 bg-primary rounded-full" />
						<div className="h-1 w-6 bg-slate-100 rounded-full" />
					</div>
				</div>

				{/* Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{cards.map((card, index) => (
						<div
							key={index}
							className={`group relative flex flex-col overflow-hidden rounded-4xl md:rounded-[2.5rem] bg-slate-50 p-8 md:p-10 transition-all ${card.colorClass} hover:shadow-2xl ${card.shadowClass}`}
						>
							<div
								className={`mb-6 md:mb-10 ${card.iconClass} group-hover:text-white transition-colors`}
							>
								{/* Adjusted icon size for mobile responsiveness */}
								<card.icon
									className="size-10 md:size-12"
									strokeWidth={2.5}
								/>
							</div>

							<h3 className="text-xl md:text-2xl font-black mb-3 group-hover:text-white transition-colors font-kannada">
								{card.title}
							</h3>

							<p className="text-sm md:text-base text-slate-500 group-hover:text-white/80 transition-colors mb-8 leading-relaxed font-kannada grow">
								{card.desc}
							</p>

							<button className="w-full py-3.5 md:py-4 bg-white text-brand-black font-bold rounded-xl md:rounded-2xl shadow-sm border border-slate-100 group-hover:border-transparent cursor-pointer active:scale-95 transition-all font-kannada text-sm md:text-base">
								{card.btn}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
