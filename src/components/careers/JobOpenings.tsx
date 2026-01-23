import { MapPin, Briefcase, Building2 } from "lucide-react";
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
		},
		{
			title: t("roles.branchManager"),
			meta: t("roles.branchManagerMeta"),
			dept: t("depts.ops"),
			location: "Hassan HO",
		},
		{
			title: t("roles.itSupport"),
			meta: t("roles.itSupportMeta"),
			dept: t("depts.tech"),
			location: "Hassan",
		},
	];

	return (
		<section className="py-12 md:py-24 bg-slate-50" id="jobs">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				{/* Header Section */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
					<div>
						<span
							className={`text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs block mb-3 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("badge")}
						</span>
						<h2
							className={`text-4xl md:text-5xl font-black text-brand-black tracking-tight ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("title")}
						</h2>
					</div>
					<div className="w-full md:w-auto">
						<select className="w-full md:w-auto rounded-xl border-slate-200 text-sm font-bold px-4 py-3 bg-white focus:ring-primary focus:border-primary outline-none shadow-sm cursor-pointer">
							<option>{t("filterAll")}</option>
							<option>Hassan</option>
							<option>Channarayapatna</option>
							<option>Sakleshpur</option>
						</select>
					</div>
				</div>

				{/* Mobile View: Stacked Cards (Visible < 1024px) */}
				<div className="grid grid-cols-1 gap-4 lg:hidden">
					{jobs.map((job, index) => (
						<div
							key={index}
							className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-4"
						>
							<div>
								<h3
									className={`font-black text-xl text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{job.title}
								</h3>
								<p
									className={`text-xs font-medium text-slate-400 mt-1 ${locale === "kn" ? "font-kannada" : ""}`}
								>
									{job.meta}
								</p>
							</div>

							<div className="flex flex-wrap gap-3">
								<div className="flex items-center gap-1.5 text-slate-500 font-bold text-xs bg-slate-50 px-3 py-1.5 rounded-full">
									<Building2
										size={14}
										className="text-primary"
									/>
									{job.dept}
								</div>
								<div className="flex items-center gap-1.5 text-slate-500 font-bold text-xs bg-slate-50 px-3 py-1.5 rounded-full">
									<MapPin
										size={14}
										className="text-primary"
									/>
									{job.location}
								</div>
							</div>

							<button
								className={`w-full py-4 bg-slate-100 text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all text-sm ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("applyBtn")}
							</button>
						</div>
					))}
				</div>

				{/* Desktop View: Table (Visible > 1024px) */}
				<div className="hidden lg:block bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="border-b border-slate-50">
								<th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
									{t("tableHead.position")}
								</th>
								<th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
									{t("tableHead.department")}
								</th>
								<th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
									{t("tableHead.location")}
								</th>
								<th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">
									{t("tableHead.action")}
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-50">
							{jobs.map((job, index) => (
								<tr
									key={index}
									className="hover:bg-slate-50/50 transition-colors group"
								>
									<td className="px-10 py-8">
										<p
											className={`font-black text-lg text-brand-black group-hover:text-primary transition-colors ${locale === "kn" ? "font-kannada" : ""}`}
										>
											{job.title}
										</p>
										<p
											className={`text-xs font-medium text-slate-400 mt-1 ${locale === "kn" ? "font-kannada" : ""}`}
										>
											{job.meta}
										</p>
									</td>
									<td className="px-10 py-8">
										<span
											className={`px-3 py-1 rounded-full bg-emerald-50 text-secondary text-[10px] font-black uppercase tracking-wider ${locale === "kn" ? "font-kannada" : ""}`}
										>
											{job.dept}
										</span>
									</td>
									<td className="px-10 py-8">
										<div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
											<MapPin
												size={14}
												className="text-slate-400"
											/>
											{job.location}
										</div>
									</td>
									<td className="px-10 py-8 text-right">
										<button
											className={`px-6 py-2.5 bg-slate-100 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all text-sm ${locale === "kn" ? "font-kannada" : ""}`}
										>
											{t("applyBtn")}
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
