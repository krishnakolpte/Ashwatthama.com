import { getTranslations } from "next-intl/server";
import { Landmark, Share2, Globe, ShieldCheck, Cpu } from "lucide-react"; // Replacing material symbols for performance

export default async function Footer() {
	const t = await getTranslations("Footer");

	return (
		<footer className="bg-brand-black text-white py-24">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
					{/* Brand Section */}
					<div className="col-span-1">
						<div className="flex items-center gap-3 mb-8">
							<div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white">
								<Landmark size={24} />
							</div>
							<h2 className="text-2xl font-black tracking-tight">
								Ashwatthama
							</h2>
						</div>
						<p className="text-white/50 leading-relaxed font-medium mb-8 font-kannada">
							{t("brandDesc")}
						</p>
						<div className="flex gap-4">
							{[Share2, Globe].map((Icon, idx) => (
								<div
									key={idx}
									className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer border border-white/10"
								>
									<Icon size={18} />
								</div>
							))}
						</div>
					</div>

					{/* Links Section 1 */}
					<div>
						<h4 className="font-black text-sm uppercase tracking-widest mb-10 text-white/30">
							{t("productHeading")}
						</h4>
						<ul className="space-y-6 text-white/70 font-bold text-sm font-kannada">
							{["p1", "p2", "p3", "p4"].map((key) => (
								<li key={key}>
									<a
										className="hover:text-primary transition-colors"
										href="#"
									>
										{t(key)}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Links Section 2 */}
					<div>
						<h4 className="font-black text-sm uppercase tracking-widest mb-10 text-white/30">
							{t("companyHeading")}
						</h4>
						<ul className="space-y-6 text-white/70 font-bold text-sm font-kannada">
							{["c1", "c2", "c3", "c4"].map((key) => (
								<li key={key}>
									<a
										className="hover:text-primary transition-colors"
										href="#"
									>
										{t(key)}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Trust Badges */}
					<div>
						<h4 className="font-black text-sm uppercase tracking-widest mb-10 text-white/30">
							{t("trustHeading")}
						</h4>
						<div className="space-y-4">
							<div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
								<ShieldCheck className="text-white/40" />
								<span className="text-[10px] font-black uppercase text-white/40 tracking-wider">
									{t("nbfcLabel")}
								</span>
							</div>
							<div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
								<Cpu className="text-white/40" />
								<span className="text-[10px] font-black uppercase text-white/40 tracking-wider">
									{t("partnerLabel")}
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-white/30 text-[11px] font-bold uppercase tracking-widest">
						{t("copyright")}
					</p>
					<div className="flex items-center gap-6">
						<span className="text-[11px] font-bold text-white/20 uppercase tracking-widest">
							{t("settlementLabel")}
						</span>
						<div className="px-3 py-1 bg-white/5 rounded border border-white/10 opacity-30 hover:opacity-100 transition-opacity grayscale">
							<span className="text-xs font-black tracking-widest">
								NSDL
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
