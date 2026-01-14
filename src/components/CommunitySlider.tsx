"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export default function CommunitySlider() {
	const t = useTranslations("Community");

	const events = [
		{
			id: 1,
			tag: t("event1_tag"),
			title: t("event1_title"),
			info: t("event1_info"),
			img: "/event1.png",
			color: "text-primary",
			dot: "bg-primary",
		},
		{
			id: 2,
			tag: t("event2_tag"),
			title: t("event2_title"),
			info: t("event2_info"),
			img: "/event1.png",
			color: "text-secondary",
			dot: "bg-secondary",
		},
		{
			id: 3,
			tag: t("event3_tag"),
			title: t("event3_title"),
			info: t("event3_info"),
			img: "/event1.png",
			color: "text-brand-black",
			dot: "bg-brand-black",
		},
		{
			id: 4,
			tag: t("event1_tag"),
			title: "Community Outreach",
			info: "Jan 10, 2024",
			img: "/event1.png",
			color: "text-primary",
			dot: "bg-primary",
		},
	];

	return (
		<section className="py-16 md:py-24 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				{/* Responsive Header */}
				<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
					<div>
						<span className="text-primary font-bold tracking-widest uppercase text-xs block mb-3 font-kannada">
							{t("tag")}
						</span>
						<h2 className="text-3xl md:text-4xl font-black text-brand-black tracking-tight font-kannada leading-tight">
							{t("title")}
						</h2>
					</div>

					<div className="flex gap-3">
						<button className="prev-btn size-12 md:size-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95">
							<ArrowLeft size={22} />
						</button>
						<button className="next-btn size-12 md:size-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
							<ArrowRight size={22} />
						</button>
					</div>
				</div>

				{/* Centered Swiper Configuration */}
				<Swiper
					modules={[Navigation, Autoplay]}
					spaceBetween={20}
					slidesPerView={1.2} // Mobile: shows center slide + peeks of sides
					centeredSlides={true}
					loop={true}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					navigation={{
						prevEl: ".prev-btn",
						nextEl: ".next-btn",
					}}
					breakpoints={{
						// Tablet
						640: {
							slidesPerView: 1.8,
							spaceBetween: 24,
						},
						// Desktop
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
							centeredSlides: false, // Standard 3-column grid on large screens
						},
					}}
					className="overflow-visible"
				>
					{events.map((event) => (
						<SwiperSlide key={event.id}>
							<div className="group cursor-grab active:cursor-grabbing pb-4 flex flex-col">
								<div className="relative h-64 md:h-72 rounded-4xl md:rounded-[2.5rem] overflow-hidden mb-6 shadow-sm border border-slate-100">
									<Image
										alt={event.title}
										src={event.img}
										fill
										sizes="(max-width: 768px) 100vw, 33vw"
										className="object-cover group-hover:scale-105 transition-transform duration-700"
									/>
								</div>

								<div
									className={`inline-flex items-center gap-2 ${event.color} font-bold text-xs uppercase mb-3 font-kannada`}
								>
									<span
										className={`size-1.5 rounded-full ${event.dot}`}
									></span>
									{event.tag}
								</div>

								<h4 className="text-lg md:text-xl font-black mb-2 text-brand-black font-kannada line-clamp-2 min-h-14">
									{event.title}
								</h4>

								<p className="text-sm md:text-base text-slate-500 font-medium font-kannada">
									{event.info}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
