import {
	MapPin,
	Briefcase,
	Building2,
	ChevronRight,
	Filter,
} from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function JobOpenings() {
	const t = await getTranslations("jobs");
	const locale = await getLocale();

	const jobs = [
		{
			title: t("roles.seniorLoan"),
			meta: t("roles.seniorLoanMeta"),
			dept: t("depts.credit"),
			location: "Channarayapatna",
			type: "Full-time",
		},
		{
			title: t("roles.branchManager"),
			meta: t("roles.branchManagerMeta"),
			dept: t("depts.ops"),
			location: "Hassan HO",
			type: "Full-time",
		},
		{
			title: t("roles.itSupport"),
			meta: t("roles.itSupportMeta"),
			dept: t("depts.tech"),
			location: "Hassan",
			type: "Full-time",
		},
	];

	return (
		<section className="relative py-24 bg-[#F8F9FB]" id="jobs">
			{/* Background Texture */}
			<div className="absolute inset-0 geometric-pattern opacity-[0.02] pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				{/* Header Section */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
					<div className="max-w-2xl">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/5 border border-primary/10 mb-4">
							<Briefcase size={14} className="text-primary" />
							<span
								className={`text-primary font-black uppercase tracking-[0.2em] text-[10px] ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("badge")}
							</span>
						</div>
						<h2
							className={`text-4xl md:text-6xl font-black text-brand-black tracking-tighter leading-tight ${locale === "kn" ? "font-kannada" : ""}`}
						>
							<span className="relative">
								{t("title")}
								<svg
									className="absolute -bottom-2 left-0 w-full h-2 text-primary/20"
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
					</div>

					<div className="group relative w-full md:w-72">
						<Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-4 group-hover:text-primary transition-colors" />
						<select
							className={`w-full appearance-none rounded-2xl border border-slate-200 pl-11 pr-10 py-4 bg-white font-black text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none shadow-sm transition-all cursor-pointer ${locale === "kn" ? "font-kannada" : ""}`}
						>
							<option>{t("filterAll")}</option>
							<option>Hassan</option>
							<option>Channarayapatna</option>
							<option>Sakleshpur</option>
						</select>
						<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
							<ChevronRight size={18} className="rotate-90" />
						</div>
					</div>
				</div>

				{/* Mobile View: High-End Cards */}
				<div className="grid grid-cols-1 gap-6 lg:hidden">
					{jobs.map((job, index) => (
						<div
							key={index}
							className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
						>
							<div className="mb-6">
								<span className="px-3 py-1 rounded-full bg-emerald-50 text-secondary text-[10px] font-black uppercase tracking-widest border border-emerald-100">
									{job.dept}
								</span>
								<h3
									className={`font-black text-2xl text-brand-black mt-3 leading-tight ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{job.title}
								</h3>
								<p
									className={`text-sm font-medium text-slate-400 mt-2 ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{job.meta}
								</p>
							</div>

							<div className="flex items-center gap-4 mb-8 text-slate-500 font-bold text-xs">
								<div className="flex items-center gap-1.5">
									<MapPin
										size={14}
										className="text-primary"
									/>
									{job.location}
								</div>
								<div className="size-1 bg-slate-200 rounded-full" />
								<div>{job.type}</div>
							</div>

							<button
								className={`w-full py-4 bg-slate-50 text-primary font-black rounded-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95 ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("applyBtn")}
								<ChevronRight size={16} />
							</button>
						</div>
					))}
				</div>

				{/* Desktop View: Polished Table */}
				<div className="hidden lg:block bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden">
					<table className="w-full text-left">
						<thead>
							<tr className="bg-slate-50/50">
								<th
									className={`px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{t("tableHead.position")}
								</th>
								<th
									className={`px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{t("tableHead.department")}
								</th>
								<th
									className={`px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{t("tableHead.location")}
								</th>
								<th className="px-10 py-6 text-right"></th>
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-50">
							{jobs.map((job, index) => (
								<tr
									key={index}
									className="group hover:bg-slate-50/30 transition-all duration-300"
								>
									<td className="px-10 py-10">
										<div className="flex flex-col">
											<span
												className={`font-black text-xl text-brand-black group-hover:text-primary transition-colors mb-1 ${locale === "kn" ? "font-kannada" : ""}`}
											>
												{job.title}
											</span>
											<span
												className={`text-sm font-medium text-slate-400 ${locale === "kn" ? "font-kannada" : ""}`}
											>
												{job.meta}
											</span>
										</div>
									</td>
									<td className="px-10 py-10">
										<span
											className={`px-4 py-1.5 rounded-xl bg-emerald-50 text-secondary text-[11px] font-black uppercase tracking-widest border border-emerald-100 group-hover:bg-emerald-100 transition-colors ${locale === "kn" ? "font-kannada" : ""}`}
										>
											{job.dept}
										</span>
									</td>
									<td className="px-10 py-10">
										<div className="flex items-center gap-2.5 text-slate-600 font-bold text-sm">
											<div className="size-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-white transition-colors shadow-sm">
												<MapPin
													size={14}
													className="text-primary"
												/>
											</div>
											{job.location}
										</div>
									</td>
									<td className="px-10 py-10 text-right">
										<button
											className={`inline-flex items-center gap-2 px-8 py-3.5 bg-slate-100 text-primary font-black rounded-2xl hover:bg-primary hover:text-white transition-all group/btn shadow-sm hover:shadow-lg hover:shadow-primary/20 ${locale === "kn" ? "font-kannada" : ""}`}
										>
											{t("applyBtn")}
											<ChevronRight
												size={16}
												className="transition-transform group-hover/btn:translate-x-1"
											/>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}
