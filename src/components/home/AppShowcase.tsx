import { getTranslations, getLocale } from "next-intl/server";
import { Bell, CreditCard, History, QrCode, ArrowRight } from "lucide-react";

export default async function AppShowcase() {
	const t = await getTranslations("AppShowcase");
	const locale = await getLocale();

	return (
		<section className="py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-brand-white">
			<div className="max-w-7xl mx-auto bg-secondary rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(15,118,110,0.3)]">
				{/* Decorative Background Pattern */}
				<div
					className="absolute inset-0 opacity-10 pointer-events-none"
					style={{
						backgroundImage:
							"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
						backgroundSize: "32px 32px",
					}}
				></div>

				{/* Decorative Glow Orbs */}
				<div className="absolute -top-24 -right-24 size-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
				<div className="absolute -bottom-24 -left-24 size-96 bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>

				<div className="grid lg:grid-cols-2 items-center gap-10 md:gap-16 p-8 md:p-16 lg:p-24 relative z-10">
					{/* Text Content */}
					<div className="text-white text-center lg:text-left order-2 lg:order-1">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 md:mb-8 backdrop-blur-md mx-auto lg:mx-0">
							<span className="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
							<span className="text-[10px] font-black tracking-widest uppercase">
								{t("badge")}
							</span>
						</div>

						<h2
							className={`text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("title")}
						</h2>

						<p
							className={`text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-md mx-auto lg:mx-0 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("description")}
						</p>

						<div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
							<button className="h-14 px-8 bg-brand-black text-white rounded-2xl flex items-center gap-3 hover:scale-105 transition-all border border-white/10 active:scale-95 group">
								<div className="text-left">
									<span className="text-[8px] uppercase block font-bold text-white/50 leading-none">
										Get it on
									</span>
									<span className="text-lg font-bold leading-none">
										Google Play
									</span>
								</div>
								<ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
							</button>
						</div>

						{/* Scan Area */}
						<div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 w-full sm:w-fit group hover:bg-white/15 transition-colors">
							<div className="bg-white p-3 rounded-2xl shadow-lg group-hover:rotate-3 transition-transform">
								<QrCode className="text-secondary size-12" />
							</div>
							<div className="text-center sm:text-left">
								<p
									className={`font-bold text-lg leading-tight ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{t("scanText")}
								</p>
								<p
									className={`text-sm text-white/60 font-medium ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{t("scanSubtext")}
								</p>
							</div>
						</div>
					</div>

					{/* Phone Mockup Section */}
					<div className="relative flex justify-center order-1 lg:order-2">
						{/* Background Aura */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-80 md:size-[500px] bg-white/10 rounded-full blur-3xl"></div>

						{/* Interactive Rings */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[350px] md:size-[550px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[280px] md:size-[400px] border border-white/10 rounded-full"></div>

						{/* The Phone Container */}
						<div className="relative z-10 w-64 md:w-72 h-[500px] md:h-[600px] bg-slate-950 rounded-[2.5rem] md:rounded-[3.5rem] p-3 md:p-4 shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-[6px] md:border-[8px] border-slate-800">
							{/* Camera Notch / Dynamic Island */}
							<div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30"></div>

							<div className="w-full h-full rounded-[1.8rem] md:rounded-[2.8rem] overflow-hidden flex flex-col bg-slate-900 relative">
								{/* Mockup Screen Content */}
								<div className="p-6 pt-10 flex flex-col h-full bg-gradient-to-b from-slate-800/50 to-black">
									<div className="flex justify-between items-center mb-8">
										<div className="size-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
											<div className="size-2 rounded-full bg-secondary shadow-[0_0_8px_#0f766e]"></div>
										</div>
										<Bell className="text-white/30 size-5" />
									</div>

									{/* Balance Card */}
									<div className="bg-gradient-to-br from-white/15 to-white/5 rounded-3xl p-5 mb-6 border border-white/10 backdrop-blur-md">
										<p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">
											{t("mockup.savings")}
										</p>
										<p className="text-2xl font-black text-white tracking-tight">
											₹45,280.00
										</p>
									</div>

									{/* Quick Actions */}
									<div className="grid grid-cols-2 gap-3 mb-8">
										<div className="aspect-square bg-primary/10 rounded-2xl border border-primary/20 flex flex-col items-center justify-center gap-2 hover:bg-primary/20 transition-all cursor-pointer">
											<div className="p-2 bg-primary/20 rounded-lg">
												<CreditCard className="text-primary size-5" />
											</div>
											<p className="text-[9px] text-white/70 font-bold uppercase tracking-tighter">
												{t("mockup.deposit")}
											</p>
										</div>
										<div className="aspect-square bg-secondary/10 rounded-2xl border border-secondary/20 flex flex-col items-center justify-center gap-2 hover:bg-secondary/20 transition-all cursor-pointer">
											<div className="p-2 bg-secondary/20 rounded-lg">
												<History className="text-secondary size-5" />
											</div>
											<p className="text-[9px] text-white/70 font-bold uppercase tracking-tighter">
												{t("mockup.passbook")}
											</p>
										</div>
									</div>

									{/* Goal Tracker */}
									<div className="mt-auto bg-white/5 p-4 rounded-2xl border border-white/5">
										<div className="flex justify-between items-end mb-2">
											<p className="text-[9px] text-white/50 font-black uppercase">
												{t("mockup.goal")}
											</p>
											<p className="text-[10px] text-primary font-bold">
												75%
											</p>
										</div>
										<div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
											<div className="w-3/4 h-full bg-primary rounded-full shadow-[0_0_15px_rgba(183,33,54,0.6)] animate-pulse"></div>
										</div>
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
