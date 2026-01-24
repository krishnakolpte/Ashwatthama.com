import { getTranslations, getLocale } from "next-intl/server";
import {
	MoveRight,
	Terminal,
	Users,
	Headphones,
	ShieldCheck,
} from "lucide-react";

export default async function AboutSection() {
	const t = await getTranslations("about-section");
	const locale = await getLocale();

	const features = [
		{
			icon: <Terminal className="text-primary size-9 mb-6" />,
			title: t("features.it.title"),
			desc: t("features.it.desc"),
		},
		{
			icon: <Users className="text-secondary size-9 mb-6" />,
			title: t("features.people.title"),
			desc: t("features.people.desc"),
		},
		{
			icon: <Headphones className="text-primary size-9 mb-6" />,
			title: t("features.support.title"),
			desc: t("features.support.desc"),
		},
		{
			icon: <ShieldCheck className="text-secondary size-9 mb-6" />,
			title: t("features.trust.title"),
			desc: t("features.trust.desc"),
		},
	];

	return (
		<section
			className="py-24 md:py-32 bg-white relative overflow-hidden"
			id="about"
		>
			{/* Background Accent Blur */}
			<div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
					{/* Left Side: Content */}
					<div className="max-w-xl">
						<div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 mb-8">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
							</span>
							<span
								className={`text-primary font-black tracking-[0.2em] uppercase text-[10px] md:text-xs ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("badge")}
							</span>
						</div>

						<h2
							className={`text-4xl md:text-5xl lg:text-6xl font-black text-brand-black tracking-tighter mb-8 leading-[1.1] ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{/* Adding the hand-drawn style to the first part of the title if needed */}
							<span className="relative">
								{t("title")}
								<svg
									className="absolute -bottom-2 left-0 w-32 h-2 text-primary/20"
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
							className={`text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-10 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("description")}
						</p>

						<button
							className={`group flex items-center gap-4 font-black text-lg text-primary hover:text-brand-black transition-all cursor-pointer ${locale === "kn" ? "font-kannada" : ""}`}
						>
							<span className="border-b-2 border-primary/20 group-hover:border-brand-black pb-1">
								{t("linkText")}
							</span>
							<div className="size-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
								<MoveRight className="transition-transform group-hover:translate-x-1 size-5" />
							</div>
						</button>
					</div>

					{/* Right Side: Staggered Feature Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:mt-12">
						{features.map((feature, index) => (
							<div
								key={index}
								className={`p-10 bg-[#FCFCFD] rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 group
                                    ${index % 2 !== 0 ? "sm:translate-y-12" : ""}
                                `}
							>
								<div className="p-3 inline-block bg-white rounded-2xl shadow-sm mb-2 group-hover:scale-110 transition-transform duration-500">
									{feature.icon}
								</div>
								<h4
									className={`font-black text-xl mb-4 text-brand-black tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{feature.title}
								</h4>
								<p
									className={`text-slate-500 leading-relaxed font-medium ${locale === "kn" ? "font-kannada text-base" : "text-sm"}`}
								>
									{feature.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
