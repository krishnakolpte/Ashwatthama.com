import { CloudUpload } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function ApplicationForm() {
	const t = await getTranslations("apply");
	const locale = await getLocale();

	return (
		<section
			className="py-16 md:py-28 bg-white relative overflow-hidden"
			id="apply"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/patterns/mandala.svg')] bg-center bg-no-repeat bg-contain" />

			<div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 text-center">
				<span
					className={`text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs block mb-3 ${locale === "kn" ? "font-kannada" : ""}`}
				>
					{t("badge")}
				</span>
				<h2
					className={`text-3xl md:text-5xl font-black text-brand-black tracking-tight mb-6 md:mb-8 ${locale === "kn" ? "font-kannada" : ""}`}
				>
					{t("title")}
				</h2>
				<p
					className={`text-slate-500 text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto ${locale === "kn" ? "font-kannada" : ""}`}
				>
					{t("description")}
				</p>

				<form className="bg-slate-50 p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 text-left grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 shadow-sm">
					{/* Full Name */}
					<div className="space-y-2">
						<label
							className={`text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("labels.name")}
						</label>
						<input
							type="text"
							placeholder={t("placeholders.name")}
							className="w-full h-14 bg-white border-slate-200 rounded-2xl px-6 focus:ring-2 focus:ring-primary focus:border-primary outline-none font-medium transition-all text-sm md:text-base"
						/>
					</div>

					{/* Email */}
					<div className="space-y-2">
						<label
							className={`text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("labels.email")}
						</label>
						<input
							type="email"
							placeholder={t("placeholders.email")}
							className="w-full h-14 bg-white border-slate-200 rounded-2xl px-6 focus:ring-2 focus:ring-primary focus:border-primary outline-none font-medium transition-all text-sm md:text-base"
						/>
					</div>

					{/* Phone */}
					<div className="space-y-2">
						<label
							className={`text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("labels.phone")}
						</label>
						<input
							type="tel"
							placeholder={t("placeholders.phone")}
							className="w-full h-14 bg-white border-slate-200 rounded-2xl px-6 focus:ring-2 focus:ring-primary focus:border-primary outline-none font-medium transition-all text-sm md:text-base"
						/>
					</div>

					{/* Dept Select - ERROR FIXED HERE */}
					<div className="space-y-2">
						<label
							className={`text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("labels.dept")}
						</label>
						<div className="relative">
							<select
								defaultValue=""
								className="w-full h-14 bg-white border-slate-200 rounded-2xl px-6 focus:ring-2 focus:ring-primary focus:border-primary outline-none font-medium appearance-none cursor-pointer text-sm md:text-base"
							>
								<option value="" disabled>
									{t("placeholders.select")}
								</option>
								<option value="credit">Credit & Sales</option>
								<option value="ops">Operations</option>
								<option value="tech">Technology</option>
								<option value="hr">HR & Admin</option>
							</select>
							{/* Custom arrow for appearance-none */}
							<div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.5 4.5L6 8L9.5 4.5"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>

					{/* Resume Upload */}
					<div className="md:col-span-2 space-y-2">
						<label
							className={`text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("labels.resume")}
						</label>
						<div className="w-full border-2 border-dashed border-slate-200 rounded-2xl p-6 md:p-10 text-center bg-white hover:border-primary transition-colors cursor-pointer group relative">
							<input
								type="file"
								className="absolute inset-0 opacity-0 cursor-pointer"
								accept=".pdf"
							/>
							<CloudUpload
								className="mx-auto text-slate-300 group-hover:text-primary mb-3 transition-colors"
								size={48}
							/>
							<p
								className={`text-sm font-bold text-slate-500 px-4 ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("placeholders.upload")}
							</p>
							<p className="text-[10px] text-slate-400 mt-2 uppercase tracking-wider">
								{t("placeholders.maxSize")}
							</p>
						</div>
					</div>

					{/* Submit Button */}
					<div className="md:col-span-2 pt-4">
						<button
							className={`w-full h-16 bg-primary text-white font-extrabold text-lg rounded-2xl hover:bg-brand-black transition-all shadow-xl shadow-primary/10 active:scale-[0.98] ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("submit")}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
