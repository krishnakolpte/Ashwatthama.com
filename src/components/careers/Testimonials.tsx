"use client"; // Required for the play button functionality
import { useState } from "react";
import Image from "next/image";
import { Quote, Play, User, Sparkles, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function Testimonials() {
	const t = useTranslations("Ctestimonials");
	const locale = useLocale();
	const [isPlaying, setIsPlaying] = useState(false);

	// Replace with your actual YouTube ID or Video URL
	const videoId = "dQw4w9WgXcQ";

	return (
		<section
			className="relative py-20 md:py-32 bg-gradient-to-br from-[#064E3B] via-[#043d2e] to-[#022c22] text-white overflow-hidden"
			id="testimonials"
		>
			<div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('/patterns/topography.svg')] bg-repeat mix-blend-overlay" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left Side: Text */}
					<div className="order-2 lg:order-1">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 mb-6 backdrop-blur-md">
							<Sparkles size={14} className="text-emerald-400" />
							<span
								className={`text-emerald-400 font-black uppercase tracking-[0.2em] text-[10px] ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("videoBadge")}
							</span>
						</div>

						<h2
							className={`text-4xl sm:text-5xl lg:text-7xl font-black mb-8 md:mb-12 leading-[1.1] tracking-tighter ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("titleMain")} <br />
							<span className="text-emerald-400">
								{t("titleSub")}
							</span>
						</h2>

						<div className="relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl">
							<Quote className="absolute -left-2 -top-6 size-12 md:size-20 text-emerald-400/10 -rotate-12" />
							<p
								className={`relative z-10 text-lg md:text-2xl font-serif italic mb-8 text-emerald-50/90 ${locale === "kn" ? "font-kannada leading-normal" : ""}`}
							>
								{t("quote")}
							</p>
							<div className="flex items-center gap-4">
								<div className="size-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30">
									<User
										className="text-emerald-400"
										size={24}
									/>
								</div>
								<div>
									<p
										className={`font-black text-lg ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t("author")}
									</p>
									<p
										className={`text-xs font-bold text-emerald-400/60 uppercase tracking-widest ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t("role")}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side: Responsive Video Player */}
					<div className="order-1 lg:order-2 group relative">
						<div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/5] bg-black rounded-[2.5rem] md:rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl">
							{!isPlaying ? (
								<>
									<Image
										alt="Staff story thumbnail"
										fill
										className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
										src="/images/video-thumb.jpg"
									/>
									<div className="absolute inset-0 flex items-center justify-center z-20">
										<button
											onClick={() => setIsPlaying(true)}
											className="relative size-20 md:size-28 bg-white rounded-full flex items-center justify-center text-emerald-900 transition-all hover:scale-110 hover:bg-emerald-400 hover:text-white"
										>
											<Play
												className="ml-1.5 fill-current"
												size={32}
											/>
										</button>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 pointer-events-none" />
									<div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
										<p
											className={`font-black text-xl md:text-2xl text-white ${locale === "kn" ? "font-kannada" : ""}`}
										>
											{t("videoTitle")}
										</p>
									</div>
								</>
							) : (
								<div className="relative w-full h-full animate-in fade-in duration-500">
									<iframe
										className="w-full h-full"
										src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
										title="Video Player"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
									<button
										onClick={() => setIsPlaying(false)}
										className="absolute top-4 right-4 z-30 p-2 bg-black/50 rounded-full text-white hover:bg-emerald-500 transition-colors"
									>
										<X size={20} />
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
