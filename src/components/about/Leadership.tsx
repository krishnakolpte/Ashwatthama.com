import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";

export default async function Leadership() {
	const t = await getTranslations("leadership");
	const locale = await getLocale();

	const team = [
		{ id: "rajesh", color: "bg-slate-200" },
		{ id: "lakshmi", color: "bg-slate-300" },
		{ id: "arjun", color: "bg-slate-400" },
		{ id: "vijay", color: "bg-slate-200" },
	];

	return (
		<section className="py-24 bg-slate-50">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="mb-16">
					<span
						className={`text-primary font-bold tracking-widest uppercase text-xs block mb-3 ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("badge")}
					</span>
					<h2
						className={`text-5xl font-black text-brand-black tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("title")}
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{team.map((member) => (
						<div key={member.id} className="group cursor-pointer">
							<div className="relative h-[400px] rounded-[2rem] overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-2">
								{/* Placeholder/Background */}
								<div
									className={`absolute inset-0 ${member.color}`}
								/>

								{/* Image Component - Replace src with actual paths */}
								{/* <Image 
                                    src={`/images/team/${member.id}.jpg`} 
                                    alt={t(`members.${member.id}.name`)}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                /> */}

								{/* Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

								<div className="absolute bottom-8 left-6 right-6 text-white transform transition-transform duration-500">
									<p
										className={`font-black text-xl mb-1 ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t(`members.${member.id}.name`)}
									</p>
									<p
										className={`text-sm font-bold opacity-80 tracking-wide uppercase ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t(`members.${member.id}.role`)}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
