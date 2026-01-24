import { getTranslations, getLocale } from "next-intl/server";
import { TrendingUp, Coins, Lock, BadgeCheck, ShieldCheck } from "lucide-react";

export default async function InvestmentSection() {
	const t = await getTranslations("Invest");
	const locale = await getLocale();

	return (
		<section className="py-24 md:py-32 bg-gradient-to-br from-[#064E3B] via-[#043d2e] to-[#022c22] text-white relative overflow-hidden">
			{/* Background Texture & Orbs */}
			<div className="absolute inset-0 opacity-[0.05] pointer-events-none topography-pattern"></div>
			<div className="absolute -top-24 -left-24 size-96 bg-emerald-500/10 blur-[100px] rounded-full" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
					{/* Left Content - Information */}
					<div>
						<h2
							className={`text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tighter ${locale === "kn" ? "font-kannada lg:text-6xl" : ""}`}
						>
							{t("title")} <br />
							<span
								className={`text-emerald-400 relative inline-block ${locale === "en" ? "font-serif italic font-normal" : "font-kannada"}`}
							>
								{t("withYou")}
								<svg
									className="absolute -bottom-2 left-0 w-full h-2 text-emerald-400/30"
									viewBox="0 0 100 12"
									preserveAspectRatio="none"
								>
									<path
										d="M0,10 Q50,0 100,10"
										stroke="currentColor"
										strokeWidth="6"
										fill="transparent"
									/>
								</svg>
							</span>
						</h2>

						<p
							className={`text-white/70 text-lg md:text-xl mb-12 leading-relaxed max-w-md font-medium ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("description")}
						</p>

						<div className="space-y-6">
							{/* FD Card */}
							<div className="flex items-center gap-6 bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all group cursor-default">
								<div className="size-14 rounded-2xl bg-emerald-400 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-emerald-400/20">
									<TrendingUp className="text-[#064E3B] size-7" />
								</div>
								<div>
									<h4
										className={`font-black text-xl mb-1 ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t("fd_title")}
									</h4>
									<p
										className={`text-sm text-white/50 font-medium ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t("fd_desc")}
									</p>
								</div>
							</div>

							{/* Pigmy Card */}
							<div className="flex items-center gap-6 bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all group cursor-default">
								<div className="size-14 rounded-2xl bg-emerald-400 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-emerald-400/20">
									<Coins className="text-[#064E3B] size-7" />
								</div>
								<div>
									<h4
										className={`font-black text-xl mb-1 ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t("pigmy_title")}
									</h4>
									<p
										className={`text-sm text-white/50 font-medium ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t("pigmy_desc")}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Content - Modern Stats Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative">
						{/* Decorative background for stats */}
						<div className="absolute inset-0 bg-emerald-400/5 blur-[120px] rounded-full -z-10" />

						{/* Stat 1 */}
						<div className="text-center p-10 bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] border border-white/10 relative overflow-hidden group hover:border-emerald-400/40 transition-all duration-500 hover:-translate-y-2">
							<Lock className="absolute top-6 right-6 text-white/10 size-6" />
							<p className="text-6xl font-black mb-3 text-emerald-400 tracking-tighter">
								5+
							</p>
							<p
								className={`text-[10px] md:text-xs font-black text-white/40 uppercase tracking-[0.2em] ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("stat_trust")}
							</p>
						</div>

						{/* Stat 2 */}
						<div className="text-center p-10 bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] border border-white/10 relative overflow-hidden group hover:border-emerald-400/40 transition-all duration-500 hover:-translate-y-2">
							<BadgeCheck className="absolute top-6 right-6 text-white/10 size-7" />
							<p className="text-6xl font-black mb-3 text-emerald-400 tracking-tighter">
								1L+
							</p>
							<p
								className={`text-[10px] md:text-xs font-black text-white/40 uppercase tracking-[0.2em] ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("stat_members")}
							</p>
						</div>

						{/* Stat 3 - Hero Stat */}
						<div className="text-center p-12 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-2xl rounded-[3.5rem] border border-white/10 relative overflow-hidden group sm:col-span-2 hover:border-emerald-400/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
							<ShieldCheck className="absolute top-8 right-10 text-emerald-400/20 size-12" />
							<p className="text-7xl md:text-8xl font-black mb-4 text-emerald-400 tracking-tighter drop-shadow-2xl">
								50+
							</p>
							<p
								className={`text-xs md:text-sm font-black text-white/60 uppercase tracking-[0.3em] ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("stat_branches")}
							</p>
							{/* Subtle Glow Effect */}
							<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-10 bg-emerald-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
