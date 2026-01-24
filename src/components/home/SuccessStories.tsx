"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Star, Quote } from "lucide-react"; // Added Quote for a cleaner look

interface TestimonialCardProps {
	quote: string;
	author: string;
	img: string;
	isStaggered?: boolean;
	locale: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
	quote,
	author,
	img,
	isStaggered,
	locale,
}) => (
	<div
		className={`bg-slate-50 p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all duration-500 relative group ${
			isStaggered ? "md:mt-16" : ""
		}`}
	>
		{/* Subtle Quote Icon on Hover */}
		<Quote className="absolute top-8 right-8 size-8 text-slate-200 group-hover:text-primary/20 transition-colors" />

		<div className="flex gap-1 text-amber-500 mb-6">
			{[...Array(5)].map((_, i) => (
				<Star key={i} size={14} fill="currentColor" />
			))}
		</div>

		<p
			className={`text-slate-600 font-medium mb-8 leading-relaxed text-sm lg:text-base ${locale === "kn" ? "font-kannada" : ""}`}
		>
			“{quote}”
		</p>

		<div className="flex items-center gap-4 border-t border-slate-200/60 pt-6">
			<div className="relative size-12 rounded-2xl overflow-hidden shrink-0 shadow-md">
				<Image
					alt={author}
					src={img}
					fill
					sizes="48px"
					className="object-cover group-hover:scale-110 transition-transform duration-500"
				/>
			</div>
			<p
				className={`font-black text-sm md:text-base text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
			>
				{author}
			</p>
		</div>
	</div>
);

export default function SuccessStories() {
	const t = useTranslations("Testimonials");
	const locale = useLocale();

	return (
		<section className="py-24 md:py-32 bg-white relative overflow-hidden">
			{/* Background Decorative Blob */}
			<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 size-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
				<div className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-center">
					{/* Main Featured Testimonial (Left) */}
					<div className="relative">
						{/* Decorative Giant Quote Mark */}
						<div className="absolute -top-24 -left-16 text-[200px] lg:text-[300px] text-primary/5 font-serif leading-none select-none -z-10 pointer-events-none">
							“
						</div>

						<div className="relative z-10">
							<span
								className={`text-primary font-black tracking-[0.2em] uppercase text-xs block mb-6 ${locale === "kn" ? "font-kannada" : ""}`}
							>
								{t("tag")}
							</span>

							<h2
								className={`text-3xl md:text-5xl font-black text-brand-black leading-[1.2] mb-12 tracking-tight ${locale === "kn" ? "font-kannada" : "italic"}`}
							>
								“{t("main_quote")}”
							</h2>

							<div className="flex items-center gap-6 p-2">
								<div className="relative size-16 md:size-24 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl rotate-3">
									<Image
										alt={t("main_author")}
										fill
										sizes="(max-width: 768px) 80px, 120px"
										src="/u1.webp"
										className="object-cover"
									/>
								</div>
								<div>
									<h5
										className={`font-black text-xl md:text-2xl text-brand-black ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t("main_author")}
									</h5>
									<p
										className={`text-primary font-bold uppercase text-[10px] md:text-xs tracking-widest mt-2 ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{t("main_role")}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Staggered Grid (Right) */}
					<div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
						<TestimonialCard
							quote={t("card1_text")}
							author="Manjunath K."
							img="/u2.webp"
							locale={locale}
						/>
						<TestimonialCard
							quote={t("card2_text")}
							author="Rukmini Rao"
							img="/u3.webp"
							isStaggered={true}
							locale={locale}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
