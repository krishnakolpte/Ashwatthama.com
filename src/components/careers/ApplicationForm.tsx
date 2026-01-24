"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { CloudUpload, CheckCircle2, Loader2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function ApplicationForm() {
	const t = useTranslations("apply");
	const locale = useLocale();

	// Form State
	const [status, setStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");
	const [fileName, setFileName] = useState<string | null>(null);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFileName(e.target.files[0].name);
		}
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("submitting");

		// Simulate API Call
		const formData = new FormData(e.currentTarget);
		console.log("Form Data:", Object.fromEntries(formData));

		setTimeout(() => {
			setStatus("success");
		}, 2000);
	};

	if (status === "success") {
		return (
			<section className="py-20 md:py-32 bg-white text-center">
				<div className="max-w-md mx-auto px-6">
					<div className="size-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
						<CheckCircle2 size={40} />
					</div>
					<h2
						className={`text-3xl font-black mb-4 ${locale === "kn" ? "font-kannada" : ""}`}
					>
						{t("successTitle") || "Application Sent!"}
					</h2>
					<p className="text-slate-500 mb-8">
						We will review your profile and get back to you soon.
					</p>
					<button
						onClick={() => setStatus("idle")}
						className="text-primary font-bold hover:underline"
					>
						Send another application
					</button>
				</div>
			</section>
		);
	}

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
					className={`text-3xl md:text-5xl lg:text-6xl font-black text-brand-black tracking-tight mb-6 ${locale === "kn" ? "font-kannada" : ""}`}
				>
					{t("title")}
				</h2>
				<p
					className={`text-slate-500 text-base md:text-lg mb-10 md:mb-16 max-w-2xl mx-auto leading-relaxed ${locale === "kn" ? "font-kannada" : ""}`}
				>
					{t("description")}
				</p>

				<form
					onSubmit={handleSubmit}
					className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-slate-100 text-left grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 shadow-sm"
				>
					{/* Full Name */}
					<div className="space-y-2">
						<label
							className={`text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("labels.name")}
						</label>
						<input
							required
							name="full_name"
							type="text"
							placeholder={t("placeholders.name")}
							className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none font-medium transition-all text-sm md:text-base"
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
							required
							name="email"
							type="email"
							placeholder={t("placeholders.email")}
							className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none font-medium transition-all text-sm md:text-base"
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
							required
							name="phone"
							type="tel"
							placeholder={t("placeholders.phone")}
							className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none font-medium transition-all text-sm md:text-base"
						/>
					</div>

					{/* Dept Select */}
					<div className="space-y-2">
						<label
							className={`text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("labels.dept")}
						</label>
						<div className="relative">
							<select
								required
								name="department"
								defaultValue=""
								className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none font-medium appearance-none cursor-pointer text-sm md:text-base pr-12"
							>
								<option value="" disabled>
									{t("placeholders.select")}
								</option>
								<option value="credit">Credit & Sales</option>
								<option value="ops">Operations</option>
								<option value="tech">Technology</option>
								<option value="hr">HR & Admin</option>
							</select>
							<div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
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
						<div
							className={`w-full border-2 border-dashed rounded-2xl p-6 md:p-10 text-center bg-white transition-all cursor-pointer group relative ${fileName ? "border-primary bg-primary/5" : "border-slate-200 hover:border-primary"}`}
						>
							<input
								required
								name="resume"
								type="file"
								onChange={handleFileChange}
								className="absolute inset-0 opacity-0 cursor-pointer z-10"
								accept=".pdf"
							/>
							<CloudUpload
								className={`mx-auto mb-3 transition-colors ${fileName ? "text-primary" : "text-slate-300 group-hover:text-primary"}`}
								size={48}
							/>
							<p
								className={`text-sm font-bold px-4 ${fileName ? "text-primary" : "text-slate-500"} ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{fileName || t("placeholders.upload")}
							</p>
							<p className="text-[10px] text-slate-400 mt-2 uppercase tracking-wider">
								{t("placeholders.maxSize")}
							</p>
						</div>
					</div>

					{/* Submit Button */}
					<div className="md:col-span-2 pt-4">
						<button
							type="submit"
							disabled={status === "submitting"}
							className={`w-full h-16 bg-primary text-white font-extrabold text-lg rounded-2xl hover:bg-brand-black transition-all shadow-xl shadow-primary/10 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{status === "submitting" && (
								<Loader2 className="animate-spin" size={20} />
							)}
							{status === "submitting"
								? "Sending..."
								: t("submit")}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
