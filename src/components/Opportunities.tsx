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
		<section className="py-24 bg-white relative">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="flex items-end justify-between mb-12">
					<div>
						<span className="text-primary font-bold tracking-widest uppercase text-xs block mb-3">
							{t("badge")}
						</span>
						<h2 className="text-4xl font-black text-brand-black tracking-tight font-kannada">
							{t("title")}
						</h2>
					</div>
					<div className="hidden md:flex gap-2">
						<div className="h-1 w-12 bg-primary rounded-full" />
						<div className="h-1 w-6 bg-slate-100 rounded-full" />
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{cards.map((card, index) => (
						<div
							key={index}
							className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-50 p-10 transition-all ${card.colorClass} hover:shadow-2xl ${card.shadowClass}`}
						>
							<div
								className={`mb-10 ${card.iconClass} group-hover:text-white transition-colors`}
							>
								<card.icon size={48} strokeWidth={2.5} />
							</div>
							<h3 className="text-2xl font-black mb-3 group-hover:text-white transition-colors font-kannada">
								{card.title}
							</h3>
							<p className="text-slate-500 group-hover:text-white/80 transition-colors mb-8 leading-relaxed font-kannada">
								{card.desc}
							</p>
							<button className="w-full py-4 bg-white text-brand-black font-bold rounded-2xl shadow-sm border border-slate-100 group-hover:border-transparent cursor-pointer active:scale-95 transition-transform font-kannada">
								{card.btn}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
