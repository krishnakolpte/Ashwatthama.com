import Image from "next/image";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function Leadership() {
	const t = await getTranslations("leadership");
	const locale = await getLocale();

	const team = [
		{ id: "rajesh", color: "bg-slate-200", linkedin: "#", email: "#" },
		{ id: "lakshmi", color: "bg-slate-300", linkedin: "#", email: "#" },
		{ id: "arjun", color: "bg-slate-400", linkedin: "#", email: "#" },
		{ id: "vijay", color: "bg-slate-200", linkedin: "#", email: "#" },
	];

	return (
		<section
			className="py-20 md:py-32 bg-white relative overflow-hidden"
			id="leadership"
		>
			{/* Background Decorative Element */}
			<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
					<div className="max-w-2xl">
						<span
							className={`text-primary font-black tracking-[0.3em] uppercase text-[10px] md:text-xs block mb-4 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("badge")}
						</span>
						<h2
							className={`text-4xl md:text-6xl font-black text-brand-black tracking-tighter leading-none ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("title")}
						</h2>
					</div>
					<div className="h-px flex-1 bg-slate-100 hidden lg:block mx-12 mb-4" />
					<p
						className={`text-slate-500 font-medium max-w-xs ${locale === "kn" ? "font-kannada text-lg" : ""}`}
					>
						{t("subtitle") ||
							"Guided by experience, driven by innovation."}
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
					{team.map((member) => (
						<div key={member.id} className="group">
							<div className="relative h-[450px] md:h-[500px] rounded-[2.5rem] overflow-hidden mb-6 transition-all duration-700 ease-in-out group-hover:-translate-y-3 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
								{/* Background Placeholder */}
								<div
									className={`absolute inset-0 ${member.color} transition-transform duration-1000 group-hover:scale-110`}
								/>

								{/* Image Component (Uncomment when you have actual images) */}
								{/* <Image 
                                    src={`/images/team/${member.id}.jpg`} 
                                    alt={t(`members.${member.id}.name`)}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                /> */}

								{/* Gradient Overlays */}
								<div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

								{/* Hover Glass Actions */}
								<div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
									<a
										href={member.linkedin}
										className="size-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-brand-black transition-all"
									>
										<Linkedin size={20} />
									</a>
									<a
										href={member.email}
										className="size-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-brand-black transition-all"
									>
										<Mail size={20} />
									</a>
								</div>

								{/* Identity Info */}
								<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
									<div className="flex items-end justify-between overflow-hidden">
										<div>
											<p
												className={`font-black text-2xl md:text-3xl mb-1 tracking-tight transform transition-transform duration-500 group-hover:-translate-y-1 ${locale === "kn" ? "font-kannada" : ""}`}
											>
												{t(`members.${member.id}.name`)}
											</p>
											<p
												className={`text-xs md:text-sm font-bold opacity-70 tracking-[0.2em] uppercase ${locale === "kn" ? "font-kannada" : ""}`}
											>
												{t(`members.${member.id}.role`)}
											</p>
										</div>
										<div className="size-10 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45 group-hover:rotate-0">
											<ArrowUpRight size={20} />
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
