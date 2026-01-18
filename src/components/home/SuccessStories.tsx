"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

interface TestimonialCardProps {
	quote: string;
	author: string;
	img: string;
	isStaggered?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
	quote,
	author,
	img,
	isStaggered,
}) => (
	<div
		className={`bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
			isStaggered ? "md:mt-12" : ""
		}`}
	>
		<div className="flex gap-1 text-amber-500 mb-6">
			{[...Array(5)].map((_, i) => (
				<Star key={i} size={14} fill="currentColor" />
			))}
		</div>
		<p className="text-slate-600 font-medium mb-8 leading-relaxed font-kannada text-sm lg:text-base">
			`&quot;`{quote}`&quot;`
		</p>
		<div className="flex items-center gap-4">
			<div className="relative size-10 rounded-full overflow-hidden shrink-0 shadow-sm">
				<Image
					alt={author}
					src={img}
					fill
					sizes="(max-width: 768px) 80px, 100px"
					className="object-cover"
				/>
			</div>
			<p className="font-bold text-sm text-brand-black font-kannada">
				{author}
			</p>
		</div>
	</div>
);

export default function SuccessStories() {
	const t = useTranslations("Testimonials");

	return (
		<section className="py-24 md:py-32 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
					{/* Main Featured Testimonial (Left) */}
					<div className="relative">
						{/* Decorative Quote Mark */}
						<div className="absolute -top-16 -left-12 text-[180px] lg:text-[240px] text-slate-100 font-serif leading-none select-none -z-10 pointer-events-none opacity-80">
							“
						</div>

						<div className="relative z-10">
							<span className="text-primary font-bold tracking-[0.25em] uppercase text-xs block mb-8 font-kannada">
								{t("tag")}
							</span>
							<h2 className="text-3xl md:text-5xl font-black text-brand-black leading-[1.15] mb-12 italic font-kannada">
								`&quot;`{t("main_quote")}`&quot;`
							</h2>

							<div className="flex items-center gap-5">
								<div className="relative size-16 md:size-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
									<Image
										alt="Lakshmi Devi"
										fill
										sizes="(max-width: 768px) 80px, 100px"
										src="/u1.webp"
										className="object-cover"
									/>
								</div>
								<div>
									<h5 className="font-black text-xl md:text-2xl text-brand-black font-kannada">
										{t("main_author")}
									</h5>
									<p className="text-slate-500 font-bold uppercase text-[10px] md:text-xs tracking-widest font-kannada mt-1">
										{t("main_role")}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Staggered Grid (Right) */}
					<div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
						<TestimonialCard
							quote={t("card1_text")}
							author="Manjunath K."
							img="/u2.webp"
						/>
						<TestimonialCard
							quote={t("card2_text")}
							author="Rukmini Rao"
							img="/u3.webp"
							isStaggered={true}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
