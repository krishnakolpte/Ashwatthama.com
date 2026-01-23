import { getTranslations, getLocale } from "next-intl/server";

export default async function Timeline() {
	const t = await getTranslations("timeline");
	const locale = await getLocale();

	const milestones = [
		{ year: "2019", color: "primary", reverse: false },
		{ year: "2021", color: "secondary", reverse: true },
		{ year: "2023", color: "primary", reverse: false },
		{ year: "2024", color: "secondary", reverse: true },
	];

	return (
		<section className="py-24 bg-slate-50">
			<div className="max-w-5xl mx-auto px-6 lg:px-10">
				<div className="text-center mb-20">
					<span
						className={`text-primary font-bold tracking-[0.3em] uppercase text-xs block mb-4 ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("badge")}
					</span>
					<h2
						className={`text-5xl font-black text-brand-black tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("title")}
					</h2>
				</div>

				<div className="relative">
					{/* Center Line */}
					<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full opacity-50" />

					<div className="space-y-24 relative">
						{milestones.map((item) => (
							<div
								key={item.year}
								className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${item.reverse ? "md:flex-row-reverse" : ""}`}
							>
								{/* Text Content */}
								<div
									className={`md:w-1/2 ${item.reverse ? "md:pl-16 text-center md:text-left" : "md:pr-16 text-center md:text-right"}`}
								>
									<span
										className={`text-5xl font-black mb-2 block ${item.color === "primary" ? "text-primary/20" : "text-secondary/20"}`}
									>
										{item.year}
									</span>
									<h4
										className={`text-2xl font-black mb-3 text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t(`years.${item.year}.label`)}
									</h4>
									<p
										className={`text-slate-500 font-medium leading-relaxed ${locale === "kn" ? "font-kannada text-lg" : ""}`}
									>
										{t(`years.${item.year}.description`)}
									</p>
								</div>

								{/* Timeline Dot */}
								<div
									className={`size-6 rounded-full border-4 border-white shadow-lg z-10 ring-8 ${item.color === "primary" ? "bg-primary ring-primary/5" : "bg-secondary ring-secondary/5"}`}
								/>

								{/* Empty Spacer Column */}
								<div className="md:w-1/2" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
