import { getTranslations } from "next-intl/server";
import { Bell, CreditCard, History, QrCode } from "lucide-react";

export default async function AppShowcase() {
	const t = await getTranslations("AppShowcase");

	return (
		<section className="py-24 px-6 overflow-hidden">
			<div className="max-w-7xl mx-auto bg-secondary rounded-[3rem] overflow-hidden relative shadow-2xl">
				{/* Decorative Background Pattern */}
				<div
					className="absolute inset-0 opacity-10 pointer-events-none"
					style={{
						backgroundImage:
							"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
						backgroundSize: "24px 24px",
					}}
				></div>

				<div className="grid lg:grid-cols-2 items-center gap-12 p-12 lg:p-24 relative z-10">
					<div className="text-white">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
							<span className="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
							<span className="text-[10px] font-bold tracking-widest uppercase">
								{t("badge")}
							</span>
						</div>

						<h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight font-kannada">
							{t("title")}
						</h2>

						<p className="text-xl text-white/80 mb-10 leading-relaxed max-w-md font-kannada">
							{t("description")}
						</p>

						<div className="flex flex-wrap gap-4 mb-12">
							<button className="h-14 px-8 bg-brand-black text-white rounded-2xl flex items-center gap-3 hover:bg-black/80 transition-all border border-white/10">
								<span className="text-xs uppercase font-bold tracking-tighter">
									Get it on
								</span>
								<span className="text-xl font-bold">
									Google Play
								</span>
							</button>
						</div>

						<div className="flex items-center gap-6 p-5 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 w-fit">
							<div className="bg-white p-2 rounded-xl">
								<QrCode className="text-secondary size-12" />
							</div>
							<div>
								<p className="font-bold text-lg font-kannada">
									{t("scanText")}
								</p>
								<p className="text-sm text-white/60 font-medium font-kannada">
									{t("scanSubtext")}
								</p>
							</div>
						</div>
					</div>

					{/* Phone Mockup Section */}
					<div className="relative flex justify-center py-10 lg:py-0">
						{/* Background Rings */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-125 border border-white/5 rounded-full scale-110 lg:scale-150"></div>
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-100 border border-white/10 rounded-full scale-100 lg:scale-125"></div>

						<div className="relative z-10 w-72 h-145 bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-[0_50px_100px_rgba(0,0,0,0.6)] overflow-hidden">
							<div className="w-full h-full p-6 flex flex-col bg-linear-to-b from-slate-900 to-black">
								{/* Status Bar Mockup */}
								<div className="flex justify-between items-center mb-10">
									<div className="size-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center">
										<span className="size-2 rounded-full bg-secondary"></span>
									</div>
									<Bell className="text-white/30 size-5" />
								</div>

								{/* Balance Card */}
								<div className="bg-white/10 rounded-3xl p-6 mb-6 border border-white/10 backdrop-blur-md">
									<p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">
										{t("mockup.savings")}
									</p>
									<p className="text-2xl font-black text-white tracking-tight">
										₹45,280.00
									</p>
								</div>

								{/* Quick Actions */}
								<div className="grid grid-cols-2 gap-4 mb-8">
									<div className="aspect-square bg-primary/20 rounded-3xl border border-primary/30 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-primary/30 transition-colors">
										<CreditCard className="text-primary size-6" />
										<p className="text-[10px] text-white/70 font-bold">
											{t("mockup.deposit")}
										</p>
									</div>
									<div className="aspect-square bg-secondary/20 rounded-3xl border border-secondary/30 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-secondary/30 transition-colors">
										<History className="text-secondary size-6" />
										<p className="text-[10px] text-white/70 font-bold">
											{t("mockup.passbook")}
										</p>
									</div>
								</div>

								{/* Goal Tracker */}
								<div className="mt-auto bg-white/5 p-5 rounded-3xl border border-white/5">
									<p className="text-[10px] text-white/50 font-bold mb-3 uppercase tracking-tighter">
										{t("mockup.goal")}
									</p>
									<div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
										<div className="w-3/4 h-full bg-primary rounded-full shadow-[0_0_10px_rgba(183,33,54,0.5)]"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
