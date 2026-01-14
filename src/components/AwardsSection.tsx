import { getTranslations } from "next-intl/server";
import { Medal, MapPinned, Users2 } from "lucide-react";

export default async function AwardsSection() {
	const t = await getTranslations("Awards");

	const data = [
		{
			icon: <Medal className="size-12 text-primary" />,
			value: "10+",
			label: t("awards_label"),
			borderColor: "border-primary/20",
		},
		{
			icon: <MapPinned className="size-12 text-secondary" />,
			value: "50+",
			label: t("branches_label"),
			borderColor: "border-secondary/20",
		},
		{
			icon: <Users2 className="size-12 text-brand-black" />,
			value: "1 Lakh+",
			label: t("members_label"),
			borderColor: "border-slate-200",
		},
	];

	return (
		<section className="py-24 bg-white border-y border-slate-100">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center max-w-2xl mx-auto mb-20">
					<h2 className="text-4xl font-black text-brand-black mb-4 font-kannada">
						{t("title")}
					</h2>
					<p className="text-slate-500 font-medium font-kannada">
						{t("subtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{data.map((item, i) => (
						<div key={i} className="group text-center">
							<div className="mb-8 flex justify-center transition-transform duration-500 group-hover:scale-110">
								<div
									className={`p-6 rounded-full bg-slate-50 border-2 ${item.borderColor}`}
								>
									{item.icon}
								</div>
							</div>
							<h3 className="text-6xl font-black text-brand-black mb-3 tracking-tighter transition-colors group-hover:text-primary">
								{item.value}
							</h3>
							<p className="text-sm font-bold text-slate-400 uppercase tracking-[0.25em] font-kannada">
								{item.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
