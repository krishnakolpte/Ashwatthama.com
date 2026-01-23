import Image from "next/image";
import { Quote, Play, User } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function Testimonials() {
	const t = await getTranslations("Ctestimonials");
	const locale = await getLocale();

	return (
		<section className="py-20 md:py-32 bg-gradient-to-br from-[#064E3B] via-[#043d2e] to-[#022c22] text-white relative overflow-hidden">
			{/* Topography Pattern Overlay */}
			<div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/patterns/topography.svg')] bg-repeat" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
					{/* Text Content */}
					<div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
						<h2
							className={`text-5xl lg:text-7xl font-black mb-10 leading-tight tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("titleMain")} <br />
							{t("titleSub")}{" "}
							<span className="text-emerald-400 font-serif italic font-normal">
								{t("titleItalic")}
							</span>
						</h2>

						<div className="space-y-12">
							<div className="relative pl-10 md:pl-14">
								<Quote className="absolute left-0 top-0 text-4xl md:text-6xl text-emerald-400/30 -translate-y-2" />

								<p
									className={`text-xl md:text-2xl font-serif italic mb-8 leading-relaxed text-emerald-50/90 ${locale === "kn" ? "font-kannada leading-normal" : ""}`}
								>
									{t("quote")}
								</p>

								<div className="flex items-center gap-4">
									<div className="size-14 rounded-full bg-emerald-400/20 flex items-center justify-center border border-emerald-400/30">
										<User
											className="text-emerald-400"
											size={24}
										/>
									</div>
									<div>
										<p
											className={`font-bold text-lg ${locale === "kn" ? "font-kannada" : ""}`}
										>
											{t("author")}
										</p>
										<p
											className={`text-sm text-white/50 ${locale === "kn" ? "font-kannada" : ""}`}
										>
											{t("role")}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Video Thumbnail Section */}
					<div className="relative aspect-video bg-black/40 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 flex items-center justify-center group overflow-hidden shadow-2xl transition-all duration-500 hover:border-emerald-400/30">
						<Image
							alt="Video thumbnail"
							fill
							className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
							src="/images/video-thumb.jpg"
						/>

						<button className="relative z-10 size-20 md:size-28 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 active:scale-95 transition-transform shadow-2xl group/btn">
							<Play
								className="ml-1 fill-current group-hover:text-emerald-600 transition-colors"
								size={40}
							/>
						</button>

						<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 md:right-10 pointer-events-none">
							<p
								className={`font-black uppercase tracking-widest text-[10px] text-emerald-400 mb-1 ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("videoBadge")}
							</p>
							<p
								className={`font-bold text-lg md:text-xl text-white ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("videoTitle")}
							</p>
						</div>

						{/* Subtle inner glow on hover */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
					</div>
				</div>
			</div>
		</section>
	);
}
