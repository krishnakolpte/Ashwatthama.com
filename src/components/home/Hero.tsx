import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server"; // Added getLocale
import { ArrowUpRight, PlayCircle, Verified, Wallet } from "lucide-react";

export default async function Hero() {
	const t = await getTranslations("Hero");
	const locale = await getLocale(); // Detect the current language server-side

	return (
		<section className="relative min-h-[90vh] flex items-center bg-brand-white overflow-hidden hampi-line-art">
			{/* Visual Side */}
			<div className="absolute top-20 right-[5%] w-[45%] h-[80%] z-10 hidden lg:block">
				<Image
					src="/herobg.png"
					alt={t("imageAlt")}
					fill
					priority
					className="object-contain object-bottom drop-shadow-2xl"
					sizes="45vw"
				/>

				{/* Floating Card: Approval */}
				<div
					className="absolute top-1/4 -left-12 floating-card flex items-center gap-4 animate-bounce hover:pause transition-all bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl"
					style={{ animationDuration: "4s" }}
				>
					<div className="size-10 bg-emerald-50 rounded-full flex items-center justify-center text-secondary">
						<Verified size={20} />
					</div>
					<div>
						<p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
							{t("cardApproval_label")}
						</p>
						<p className="text-sm font-extrabold text-brand-black font-kannada">
							{t("cardApproval_value")}
						</p>
					</div>
				</div>

				{/* Floating Card: Savings */}
				<div
					className="absolute bottom-1/3 -right-6 floating-card flex items-center gap-4 animate-bounce hover:pause transition-all bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl"
					style={{ animationDuration: "5s" }}
				>
					<div className="size-10 bg-red-50 rounded-full flex items-center justify-center text-primary">
						<Wallet size={20} />
					</div>
					<div>
						<p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
							{t("cardSavings_label")}
						</p>
						<p className="text-sm font-extrabold text-brand-black font-kannada">
							{t("cardSavings_value")}
						</p>
					</div>
				</div>
			</div>

			{/* Content Side */}
			<div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
				<div className="max-w-2xl">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
						<span className="text-secondary text-[11px] font-black uppercase tracking-widest font-kannada">
							{t("badge")}
						</span>
					</div>

					{/* Logic: Apply font-serif only for English to prevent Anek override */}
					<h1 className="text-6xl md:text-8xl font-black text-brand-black leading-[0.95] tracking-tighter mb-8">
						{t("titleLine1")} <br />
						<span
							className={`text-primary italic ${
								locale === "en" ? "font-serif" : "font-kannada"
							}`}
						>
							{t("titleLine2")}
						</span>
						<br />
						{t("titleLine3")}
					</h1>

					<p className="text-xl font-medium text-slate-500 max-w-lg mb-12 leading-relaxed font-kannada">
						{t("description")}
					</p>

					<div className="flex flex-wrap gap-5">
						<button className="h-16 px-10 rounded-2xl bg-primary text-white font-extrabold text-lg shadow-2xl shadow-red-900/20 hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95 cursor-pointer font-kannada">
							{t("ctaStart")}
							<ArrowUpRight size={24} />
						</button>
						<button className="h-16 px-10 rounded-2xl bg-white border border-slate-200 text-brand-black font-extrabold text-lg hover:border-secondary hover:text-secondary transition-all flex items-center gap-3 active:scale-95 cursor-pointer font-kannada">
							<PlayCircle size={24} />
							{t("ctaWork")}
						</button>
					</div>

					{/* Stats Section */}
					<div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-slate-100 pt-10">
						<div>
							<p className="text-3xl font-black text-secondary">
								{t("stat1_val")}
							</p>
							<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 font-kannada">
								{t("stat1_label")}
							</p>
						</div>
						<div>
							<p className="text-3xl font-black text-primary">
								{t("stat2_val")}
							</p>
							<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 font-kannada">
								{t("stat2_label")}
							</p>
						</div>
						<div className="hidden sm:block">
							<p className="text-3xl font-black text-brand-black">
								{t("stat3_val")}
							</p>
							<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 font-kannada">
								{t("stat3_label")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
