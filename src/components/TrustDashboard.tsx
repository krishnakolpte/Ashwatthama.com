import { getTranslations } from "next-intl/server";
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
} from "lucide-react";

export default async function TrustDashboard() {
	const t = await getTranslations("Dashboard");

	const stats = [
		{
			label: t("stat1"),
			value: "300+",
			icon: <Users />,
			color: "bg-blue-500",
		},
		{
			label: t("stat2"),
			value: "25+",
			icon: <UsersRound />,
			color: "bg-emerald-500",
		},
		{
			label: t("stat3"),
			value: "20+",
			icon: <Landmark />,
			color: "bg-amber-500",
		},
		{
			label: t("stat4"),
			value: "80+",
			icon: <PiggyBank />,
			color: "bg-rose-500",
		},
	];

	const services = [
		{ title: t("service1"), icon: <Wallet /> },
		{ title: t("service2"), icon: <Landmark /> },
		{ title: t("service3"), icon: <TrendingUp /> },
		{ title: t("service4"), icon: <PiggyBank /> },
		{ title: t("service5"), icon: <ArrowUpCircle /> },
		{ title: t("service6"), icon: <ShieldCheck /> },
	];

	// FIX: Pulling the array directly from JSON
	const features = t.raw("feature_list") as string[];

	return (
		<section className="py-24 bg-slate-50 relative overflow-hidden">
			{/* Creative Background Elements */}
			<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
				<Landmark className="absolute top-10 left-10 size-64 -rotate-12" />
				<ShieldCheck className="absolute bottom-10 right-10 size-64 rotate-12" />
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* 1. Stats Grid */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
					{stats.map((s, i) => (
						<div
							key={i}
							className="group bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
						>
							<div
								className={`${s.color} size-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-12 transition-transform`}
							>
								{s.icon}
							</div>
							<h3 className="text-4xl font-black text-slate-900 mb-1">
								{s.value}
							</h3>
							<p className="text-slate-500 font-medium text-sm uppercase tracking-wider">
								{s.label}
							</p>
						</div>
					))}
				</div>

				{/* 2. Services & Features Section */}
				<div className="grid lg:grid-cols-3 gap-12">
					{/* Services Grid (Left 2 Columns) */}
					<div className="lg:col-span-2">
						<h2 className="text-3xl font-black mb-10 flex items-center gap-4">
							<span className="w-12 h-1 bg-primary rounded-full"></span>
							{t("services_title")}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{services.map((ser, i) => (
								<div
									key={i}
									className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 hover:border-primary/30 hover:bg-primary/2 transition-all cursor-pointer group"
								>
									<div className="size-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
										{ser.icon}
									</div>
									<span className="font-bold text-lg text-slate-800">
										{ser.title}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Special Features (Right 1 Column) */}
					<div className="bg-brand-black rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
						<div className="absolute top-0 right-0 p-8 opacity-10">
							<HeartHandshake size={120} />
						</div>
						<h2 className="text-2xl font-bold mb-8 relative z-10">
							{t("features_title")}
						</h2>
						<ul className="space-y-4 relative z-10">
							{features.map((f, i) => (
								<li
									key={i}
									className="flex items-center gap-3 text-slate-300 font-medium hover:text-white transition-colors font-kannada"
								>
									<div className="size-2 rounded-full bg-primary" />
									{f}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
