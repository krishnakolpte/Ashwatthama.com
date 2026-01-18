import { useTranslations } from "next-intl";
import { TrendingUp, Coins, Lock, BadgeCheck, ShieldCheck } from "lucide-react";

export default function InvestmentSection() {
	const t = useTranslations("Invest");

	return (
		<section className="py-24 bg-linear-to-br from-[#064E3B] via-[#043d2e] to-[#022c22] text-white relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10 pointer-events-none topography-pattern"></div>

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="grid lg:grid-cols-2 gap-24 items-center">
					{/* Left Content */}
					<div>
						<h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">
							{t("title")} <br />
							<span className="text-emerald-400 font-serif italic font-normal">
								{t("withYou")}
							</span>
						</h2>
						<p className="text-white/70 text-lg mb-12 leading-relaxed max-w-md">
							{t("description")}
						</p>

						<div className="space-y-4">
							{/* FD Card */}
							<div className="flex items-center gap-5 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
								<div className="size-12 rounded-xl bg-emerald-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
									<TrendingUp className="text-emerald-400 size-7" />
								</div>
								<div>
									<h4 className="font-bold text-lg">
										{t("fd_title")}
									</h4>
									<p className="text-sm text-white/50">
										{t("fd_desc")}
									</p>
								</div>
							</div>

							{/* Pigmy Card */}
							<div className="flex items-center gap-5 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
								<div className="size-12 rounded-xl bg-emerald-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
									<Coins className="text-emerald-400 size-7" />
								</div>
								<div>
									<h4 className="font-bold text-lg">
										{t("pigmy_title")}
									</h4>
									<p className="text-sm text-white/50">
										{t("pigmy_desc")}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Content - Stats Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						{/* Stat 1 */}
						<div className="text-center p-12 bg-white/5 backdrop-blur-lg rounded-[3rem] border border-white/10 relative overflow-hidden group hover:border-emerald-400/30 transition-all">
							<Lock className="absolute top-6 right-6 text-white/20 size-5" />
							<p className="text-6xl font-black mb-2 text-emerald-400">
								5+
							</p>
							<p className="text-xs font-bold text-white/40 uppercase tracking-widest">
								{t("stat_trust")}
							</p>
						</div>

						{/* Stat 2 */}
						<div className="text-center p-12 bg-white/5 backdrop-blur-lg rounded-[3rem] border border-white/10 relative overflow-hidden group hover:border-emerald-400/30 transition-all">
							<BadgeCheck className="absolute top-6 right-6 text-white/20 size-6" />
							<p className="text-6xl font-black mb-2 text-emerald-400">
								1L+
							</p>
							<p className="text-xs font-bold text-white/40 uppercase tracking-widest">
								{t("stat_members")}
							</p>
						</div>

						{/* Stat 3 - Full Width */}
						<div className="text-center p-12 bg-white/5 backdrop-blur-lg rounded-[3rem] border border-white/10 relative overflow-hidden group sm:col-span-2 hover:border-emerald-400/30 transition-all">
							<ShieldCheck className="absolute top-6 right-6 text-white/20 size-6" />
							<p className="text-6xl font-black mb-2 text-emerald-400">
								50+
							</p>
							<p className="text-xs font-bold text-white/40 uppercase tracking-widest">
								{t("stat_branches")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
