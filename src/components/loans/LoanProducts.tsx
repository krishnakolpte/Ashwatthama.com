import { getTranslations, getLocale } from "next-intl/server";
import {
	Home,
	Tractor,
	Car,
	User,
	Briefcase,
	Dog,
	ArrowUpRight,
} from "lucide-react";

export default async function LoanProducts() {
	const t = await getTranslations("loan-products");
	const locale = await getLocale();

	const products = [
		{ key: "home", icon: Home },
		{ key: "agri", icon: Tractor },
		{ key: "vehicle", icon: Car },
		{ key: "personal", icon: User },
		{ key: "business", icon: Briefcase },
		{ key: "animal", icon: Dog },
	];

	return (
		<section
			id="all"
			className="relative py-24 md:py-32 bg-[#FCFCFD] overflow-hidden"
		>
			{/* Background Accents */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full geometric-pattern opacity-[0.02] pointer-events-none" />
			<div className="absolute top-40 right-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
			<div className="absolute bottom-40 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				{/* Header Section */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white shadow-sm border border-slate-100 mb-6 transition-transform hover:scale-105">
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
						{t("description")}
					</p>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((item, index) => {
						const Icon = item.icon;
						return (
							<div
								key={item.key}
								className="group bg-white p-8 md:p-10 rounded-[3rem] flex flex-col transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-3 border border-slate-100/50 hover:border-primary/10 relative overflow-hidden"
							>
								{/* Decorative Card Background */}
								<div className="absolute -bottom-12 -right-12 size-32 bg-slate-50 rounded-full group-hover:scale-[3] group-hover:bg-primary/[0.03] transition-transform duration-700" />

								<div className="relative z-10">
									<div className="size-16 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-[10deg] transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20">
										<Icon className="text-primary size-8 group-hover:text-white transition-colors duration-500" />
									</div>

									<h3
										className={`text-2xl font-black mb-4 text-brand-black tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t(`items.${item.key}.title`)}
									</h3>

									<p
										className={`text-slate-500 mb-10 flex-1 leading-relaxed font-medium ${locale === "kn" ? "font-kannada text-base" : "text-sm"}`}
									>
										{t(`items.${item.key}.desc`)}
									</p>

									<button
										className={`group/btn w-full py-4 bg-slate-50 text-primary font-black rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-primary/20 active:scale-95 ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t("applyBtn")}
										<ArrowUpRight className="size-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
