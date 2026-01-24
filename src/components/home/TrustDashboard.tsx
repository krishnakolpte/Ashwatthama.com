import { getTranslations, getLocale } from "next-intl/server";
import {
	Users,
	UsersRound,
	Landmark,
	PiggyBank,
	Wallet,
	TrendingUp,
	ShieldCheck,
	HeartHandshake,
	ArrowUpCircle,
	CheckCircle2,
} from "lucide-react";

export default async function TrustDashboard() {
	const t = await getTranslations("Dashboard");
	const locale = await getLocale();

	const stats = [
		{
			label: t("stat1"),
			value: "300+",
			icon: <Users className="size-7" />,
			color: "bg-blue-600",
			lightColor: "bg-blue-50",
			textColor: "text-blue-600",
		},
		{
			label: t("stat2"),
			value: "25+",
			icon: <UsersRound className="size-7" />,
			color: "bg-emerald-600",
			lightColor: "bg-emerald-50",
			textColor: "text-emerald-600",
		},
		{
			label: t("stat3"),
			value: "20+",
			icon: <Landmark className="size-7" />,
			color: "bg-amber-600",
			lightColor: "bg-amber-50",
			textColor: "text-amber-600",
		},
		{
			label: t("stat4"),
			value: "80+",
			icon: <PiggyBank className="size-7" />,
			color: "bg-rose-600",
			lightColor: "bg-rose-50",
			textColor: "text-rose-600",
		},
	];

	const services = [
		{ title: t("service1"), icon: <Wallet className="size-6" /> },
		{ title: t("service2"), icon: <Landmark className="size-6" /> },
		{ title: t("service3"), icon: <TrendingUp className="size-6" /> },
		{ title: t("service4"), icon: <PiggyBank className="size-6" /> },
		{ title: t("service5"), icon: <ArrowUpCircle className="size-6" /> },
		{ title: t("service6"), icon: <ShieldCheck className="size-6" /> },
	];

	const features = t.raw("feature_list") as string[];

	return (
		<section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
			{/* Elegant Background Accents */}
			<div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
				<Landmark className="absolute top-10 left-10 size-96 -rotate-12" />
				<ShieldCheck className="absolute bottom-10 right-10 size-96 rotate-12" />
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* 1. Stats Grid - Optimized for Mobile (2x2) and Desktop (1x4) */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24 md:mb-32">
					{stats.map((s, i) => (
						<div
							key={i}
							className="group bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-2"
						>
							<div className="flex items-start justify-between mb-8">
								<div
									className={`${s.lightColor} ${s.textColor} size-16 rounded-[1.5rem] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
								>
									{s.icon}
								</div>
								<div className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-primary transition-colors">
									Metrics
								</div>
							</div>
							<h3 className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">
								{s.value}
							</h3>
							<p
								className={`text-slate-500 font-bold text-xs md:text-sm uppercase tracking-wider leading-snug ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{s.label}
							</p>
						</div>
					))}
				</div>

				{/* 2. Services & Features Section */}
				<div className="grid lg:grid-cols-12 gap-12 items-start">
					{/* Services Grid (Left) */}
					<div className="lg:col-span-8">
						<div className="flex items-center gap-4 mb-12">
							<div className="h-1.5 w-12 bg-primary rounded-full" />
							<h2
								className={`text-3xl md:text-4xl font-black text-brand-black tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("services_title")}
							</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
							{services.map((ser, i) => (
								<div
									key={i}
									className="flex items-center gap-6 p-6 md:p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer group"
								>
									<div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
										{ser.icon}
									</div>
									<span
										className={`font-black text-lg md:text-xl text-slate-800 ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{ser.title}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Special Features (Right) - Premium Sidebar Look */}
					<div className="lg:col-span-4 bg-brand-black rounded-[3.5rem] p-10 md:p-12 text-white relative overflow-hidden shadow-2xl group/card">
						{/* Interactive Sparkle effect */}
						<div className="absolute -top-10 -right-10 size-40 bg-primary/20 rounded-full blur-3xl group-hover/card:bg-primary/40 transition-colors" />

						<div className="relative z-10">
							<HeartHandshake className="text-primary size-12 mb-8 group-hover/card:scale-110 transition-transform" />
							<h2
								className={`text-2xl md:text-3xl font-black mb-10 leading-tight ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("features_title")}
							</h2>
							<ul className="space-y-6">
								{features.map((f, i) => (
									<li
										key={i}
										className="flex items-start gap-4 text-slate-300 group/item hover:text-white transition-colors"
									>
										<CheckCircle2 className="size-5 text-primary shrink-0 mt-1 transition-transform group-hover/item:scale-125" />
										<span
											className={`font-medium leading-relaxed ${locale === "kn" ? "font-kannada text-lg" : "text-base"}`}
										>
											{f}
										</span>
									</li>
								))}
							</ul>

							<div className="mt-12 pt-8 border-t border-white/10">
								<p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
									Member Portal
								</p>
								<button className="text-primary font-black hover:underline cursor-pointer">
									Access Dashboard →
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
