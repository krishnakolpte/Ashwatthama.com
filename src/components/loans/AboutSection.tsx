import { useTranslations } from "next-intl";
import {
	MoveRight,
	Terminal,
	Users,
	Headphones,
	ShieldCheck,
} from "lucide-react";

export default function AboutSection() {
	const t = useTranslations("about-section");

	const features = [
		{
			icon: <Terminal className="text-primary size-9 mb-4" />,
			title: t("features.it.title"),
			desc: t("features.it.desc"),
		},
		{
			icon: <Users className="text-primary size-9 mb-4" />,
			title: t("features.people.title"),
			desc: t("features.people.desc"),
		},
		{
			icon: <Headphones className="text-primary size-9 mb-4" />,
			title: t("features.support.title"),
			desc: t("features.support.desc"),
		},
		{
			icon: <ShieldCheck className="text-primary size-9 mb-4" />,
			title: t("features.trust.title"),
			desc: t("features.trust.desc"),
		},
	];

	return (
		<section className="py-24 bg-white" id="about">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="grid lg:grid-cols-2 gap-20 items-center">
					{/* Left Side: Content */}
					<div>
						<span className="text-primary font-bold tracking-[0.3em] uppercase text-xs block mb-4">
							{t("badge")}
						</span>
						<h2 className="text-5xl font-black text-brand-black tracking-tight mb-8 leading-tight">
							{t("title")}
						</h2>
						<p className="text-lg text-slate-500 leading-relaxed mb-8">
							{t("description")}
						</p>
						<button className="group flex items-center gap-3 font-bold text-primary hover:text-red-900 transition-colors cursor-pointer">
							{t("linkText")}
							<MoveRight className="transition-transform group-hover:translate-x-2 size-5" />
						</button>
					</div>

					{/* Right Side: Feature Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{features.map((feature, index) => (
							<div
								key={index}
								className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all hover:shadow-md"
							>
								{feature.icon}
								<h4 className="font-bold text-lg mb-2 text-brand-black">
									{feature.title}
								</h4>
								<p className="text-sm text-slate-500 leading-relaxed">
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
