import { TrendingUp, HeartHandshake, Sprout } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function Culture() {
	const t = await getTranslations("culture");
	const locale = await getLocale();

	const cultureItems = [
		{
			icon: <TrendingUp className="size-8 md:size-9" />,
			title: t("growthTitle"),
			desc: t("growthDesc"),
			color: "bg-primary/5 text-primary",
			hoverIcon: "group-hover:bg-primary",
		},
		{
			icon: <HeartHandshake className="size-8 md:size-9" />,
			title: t("impactTitle"),
			desc: t("impactDesc"),
			color: "bg-secondary/5 text-secondary",
			hoverIcon: "group-hover:bg-secondary",
		},
		{
			icon: <Sprout className="size-8 md:size-9" />,
			title: t("balanceTitle"),
			desc: t("balanceDesc"),
			color: "bg-primary/5 text-primary",
			hoverIcon: "group-hover:bg-primary",
		},
	];

	return (
		<section
			className="relative py-24 md:py-32 bg-white overflow-hidden"
			id="culture"
		>
			{/* Design Accents */}
			<div className="absolute top-0 right-0 w-1/3 h-full geometric-pattern opacity-[0.03] pointer-events-none" />
			<div className="absolute -bottom-24 -left-24 size-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				{/* Header Section */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 mb-6 transition-transform hover:scale-105">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
						</span>
						<span
							className={`text-primary font-black tracking-[0.2em] uppercase text-[10px] md:text-xs ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("badge")}
						</span>
					</div>

					<h2
						className={`text-4xl md:text-5xl lg:text-6xl font-black text-brand-black tracking-tighter mb-6 leading-tight ${locale === "kn" ? "font-kannada" : ""}`}
					>
						<span className="relative inline-block">
							{t("title")}
							<svg
								className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
								viewBox="0 0 100 12"
								preserveAspectRatio="none"
							>
								<path
									d="M0,10 Q50,0 100,10"
									stroke="currentColor"
									strokeWidth="4"
									fill="transparent"
								/>
							</svg>
						</span>
					</h2>

					<p
						className={`text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("subtitle")}
					</p>
				</div>

				{/* Culture Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
					{cultureItems.map((item, index) => (
						<div
							key={index}
							className="group relative p-10 bg-[#FCFCFD] rounded-[3rem] border border-slate-100 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-3 overflow-hidden"
						>
							{/* Decorative Background Blob */}
							<div className="absolute -bottom-10 -right-10 size-32 bg-slate-50 rounded-full group-hover:scale-[3] group-hover:bg-primary/[0.02] transition-transform duration-700" />

							<div className="relative z-10">
								<div
									className={`size-18 ${item.color} rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm group-hover:shadow-lg ${item.hoverIcon} group-hover:text-white group-hover:rotate-[12deg]`}
								>
									{item.icon}
								</div>

								<h3
									className={`text-2xl font-black mb-4 text-brand-black tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{item.title}
								</h3>

								<p
									className={`text-slate-500 leading-relaxed font-medium ${locale === "kn" ? "font-kannada text-lg" : "text-base"}`}
								>
									{item.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
