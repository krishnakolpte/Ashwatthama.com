import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, BadgeCheck, Zap } from "lucide-react";

export default function LoansHero() {
	const t = useTranslations("loan-section");

	return (
		<section className="relative min-h-[85vh] flex items-center bg-[#FDFDFD] overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 items-center gap-12 py-20">
				{/* Left Content */}
				<div className="relative z-10">
					<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
						<span className="size-2 rounded-full bg-primary animate-ping"></span>
						<span className="text-primary text-[11px] font-black uppercase tracking-widest">
							{t("badge")}
						</span>
					</div>

					<h1 className="text-6xl lg:text-7xl font-black text-brand-black leading-[1.05] tracking-tighter mb-8">
						{t("titlePart1")} <br />
						<span className="text-primary">{t("titlePart2")}</span>
						<br />
						{t("titlePart3")}
					</h1>

					<p className="text-xl font-medium text-slate-500 max-w-lg mb-12 leading-relaxed">
						{t("description")}
					</p>

					<div className="flex flex-wrap gap-5">
						<button className="h-16 px-10 rounded-2xl bg-primary text-white font-extrabold text-lg shadow-2xl shadow-red-900/20 hover:-translate-y-1 transition-all flex items-center gap-3 cursor-pointer">
							{t("btnExplore")}
							<ArrowRight className="size-5" />
						</button>
						<button className="h-16 px-10 rounded-2xl bg-white border border-slate-200 text-brand-black font-extrabold text-lg hover:border-secondary hover:text-secondary transition-all flex items-center gap-3 cursor-pointer">
							{t("btnJoin")}
						</button>
					</div>
				</div>

				{/* Right Image Section */}
				<div className="relative h-150 hidden lg:flex items-center justify-center">
					<div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-secondary/5 rounded-[4rem] -rotate-3"></div>

					<Image
						src="/herobg.png"
						alt="Local family"
						width={600}
						height={600}
						className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
						priority
					/>

					{/* Floating Card 1: KYC */}
					<div
						className="absolute top-20 left-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce"
						style={{ animationDuration: "4s" }}
					>
						<div className="size-10 bg-emerald-50 rounded-full flex items-center justify-center text-secondary">
							<BadgeCheck className="size-6" />
						</div>
						<div>
							<p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
								{t("kycLabel")}
							</p>
							<p className="text-sm font-extrabold text-brand-black">
								{t("kycValue")}
							</p>
						</div>
					</div>

					{/* Floating Card 2: Disbursal */}
					<div
						className="absolute bottom-20 right-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce"
						style={{ animationDuration: "5s" }}
					>
						<div className="size-10 bg-red-50 rounded-full flex items-center justify-center text-primary">
							<Zap className="size-6 fill-current" />
						</div>
						<div>
							<p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
								{t("disbursalLabel")}
							</p>
							<p className="text-sm font-extrabold text-brand-black">
								{t("disbursalValue")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
