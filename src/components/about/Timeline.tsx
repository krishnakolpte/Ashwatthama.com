import { getTranslations, getLocale } from "next-intl/server";

export default async function Timeline() {
	const t = await getTranslations("timeline");
	const locale = await getLocale();

	const milestones = [
		{
			year: "2019",
			color: "bg-primary",
			ring: "ring-primary/10",
			text: "text-primary/10",
			reverse: false,
		},
		{
			year: "2021",
			color: "bg-secondary",
			ring: "ring-secondary/10",
			text: "text-secondary/10",
			reverse: true,
		},
		{
			year: "2023",
			color: "bg-primary",
			ring: "ring-primary/10",
			text: "text-primary/10",
			reverse: false,
		},
		{
			year: "2024",
			color: "bg-secondary",
			ring: "ring-secondary/10",
			text: "text-secondary/10",
			reverse: true,
		},
	];

	return (
		<section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
			{/* Background Accent */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-content)_1px,_transparent_1px)] bg-[size:24px_24px] [content:'']" />

			<div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="text-center mb-24">
					<span
						className={`text-secondary font-black tracking-[0.4em] uppercase text-[10px] md:text-xs block mb-4 ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("badge")}
					</span>
					<h2
						className={`text-4xl md:text-6xl font-black text-brand-black tracking-tighter ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("title")}
					</h2>
				</div>

				<div className="relative">
					{/* Vertical Line with Gradient */}
					<div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full opacity-20" />

					<div className="space-y-20 md:space-y-32 relative">
						{milestones.map((item, index) => (
							<div
								key={item.year}
								className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${item.reverse ? "md:flex-row-reverse" : ""}`}
							>
								{/* Text Content Card */}
								<div
									className={`w-full md:w-[45%] pl-12 md:pl-0 ${item.reverse ? "md:pl-16 text-left" : "md:pr-16 text-left md:text-right"}`}
								>
									<div className="group relative">
										<span
											className={`text-6xl md:text-8xl font-black absolute -top-10 md:-top-16 ${item.reverse ? "-left-4 md:-left-8" : "-left-4 md:left-auto md:-right-8"} ${item.text} select-none -z-10 group-hover:scale-110 transition-transform duration-500`}
										>
											{item.year}
										</span>

										<div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
											<h4
												className={`text-xl md:text-2xl font-black mb-3 text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
											>
												{t(`years.${item.year}.label`)}
											</h4>
											<p
												className={`text-slate-500 font-medium leading-relaxed text-sm md:text-base ${locale === "kn" ? "font-kannada text-lg" : ""}`}
											>
												{t(
													`years.${item.year}.description`,
												)}
											</p>
										</div>
									</div>
								</div>

								{/* Timeline Dot */}
								<div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
									<div
										className={`size-10 md:size-12 rounded-2xl rotate-45 ${item.color} ${item.ring} ring-[12px] md:ring-[16px] border-4 border-white shadow-xl z-20 transition-transform hover:rotate-90 duration-500`}
									/>
									<div className="hidden md:block absolute size-3 bg-white rounded-full z-30" />
								</div>

								{/* Empty Spacer Column for Desktop */}
								<div className="hidden md:block md:w-[45%]" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
