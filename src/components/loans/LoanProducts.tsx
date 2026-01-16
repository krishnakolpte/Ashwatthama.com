import { useTranslations } from "next-intl";
import { Home, Tractor, Car, User, Briefcase, Dog } from "lucide-react";

export default function LoanProducts() {
	const t = useTranslations("loan-products");

	const products = [
		{ key: "home", icon: Home },
		{ key: "agri", icon: Tractor },
		{ key: "vehicle", icon: Car },
		{ key: "personal", icon: User },
		{ key: "business", icon: Briefcase },
		{ key: "animal", icon: Dog },
	];

	return (
		<section className="py-24 bg-brand-white">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				{/* Header */}
				<div className="text-center mb-16">
					<span className="text-primary font-bold tracking-widest uppercase text-xs block mb-3">
						{t("badge")}
					</span>
					<h2 className="text-5xl font-black text-brand-black tracking-tight mb-4">
						{t("title")}
					</h2>
					<p className="text-slate-500 max-w-2xl mx-auto text-lg">
						{t("description")}
					</p>
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((item) => {
						const Icon = item.icon;
						return (
							<div
								key={item.key}
								className="group bg-white p-10 rounded-[2.5rem] flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 border border-transparent hover:border-primary/10"
							>
								<div className="size-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
									<Icon className="text-primary size-8 group-hover:text-white" />
								</div>

								<h3 className="text-2xl font-black mb-4 text-brand-black">
									{t(`items.${item.key}.title`)}
								</h3>

								<p className="text-slate-500 mb-8 flex-1 leading-relaxed">
									{t(`items.${item.key}.desc`)}
								</p>

								<button className="w-full py-4 bg-slate-50 text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all cursor-pointer">
									{t("applyBtn")}
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
