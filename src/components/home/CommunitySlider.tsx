"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useTranslations, useLocale } from "next-intl"; // Added useLocale
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

interface EventItem {
	id: number;
	tag: string;
	title: string;
	info: string;
	img: string;
	color: string;
	dot: string;
}

export default function CommunitySlider() {
	const t = useTranslations("Community");
	const locale = useLocale();

	const displayEvents = useMemo(() => {
		const baseEvents: EventItem[] = [
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
				img: "/event2.png",
				color: "text-secondary",
				dot: "bg-secondary",
			},
			{
				id: 3,
				tag: t("event3_tag"),
				title: t("event3_title"),
				info: t("event3_info"),
				img: "/event3.png",
				color: "text-brand-black",
				dot: "bg-brand-black",
			},
			{
				id: 4,
				tag: t("event4_tag"),
				title: t("event4_title"),
				info: t("event4_info"),
				img: "/event4.png",
				color: "text-primary",
				dot: "bg-primary",
			},
		];

		return baseEvents.length < 8
			? [...baseEvents, ...baseEvents]
			: baseEvents;
	}, [t]);

	return (
		<section className="py-16 md:py-24 bg-brand-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				{/* Header Section */}
				<div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
					<div className="max-w-2xl">
						<span
							className={`text-primary font-black tracking-widest uppercase text-[10px] md:text-xs block mb-4 ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("tag")}
						</span>
						<h2
							className={`text-3xl md:text-5xl font-black text-brand-black tracking-tighter leading-[1.1] ${locale === "kn" ? "font-kannada" : ""}`}
						>
							{t("title")}
						</h2>
					</div>

					<div className="flex gap-4">
						<button className="prev-btn size-12 md:size-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm active:scale-90 cursor-pointer group">
							<ArrowLeft
								size={24}
								className="group-hover:-translate-x-1 transition-transform"
							/>
						</button>
						<button className="next-btn size-12 md:size-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-red-900/20 hover:bg-primary/90 transition-all active:scale-90 cursor-pointer group">
							<ArrowRight
								size={24}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</button>
					</div>
				</div>

				{/* Slider Section */}
				<Swiper
					modules={[Navigation, Autoplay]}
					spaceBetween={20}
					slidesPerView={1.1} // Show peek of next slide on mobile
					centeredSlides={true}
					loop={true}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
					breakpoints={{
						640: {
							slidesPerView: 1.8,
							spaceBetween: 24,
							centeredSlides: true,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 32,
							centeredSlides: false,
						},
					}}
					className="!overflow-visible"
				>
					{displayEvents.map((event, index) => (
						<SwiperSlide
							key={`${event.id}-${index}`}
							className="h-full"
						>
							<div className="group cursor-grab active:cursor-grabbing pb-8 flex flex-col h-full transition-all duration-500">
								{/* Image Container */}
								<div className="relative h-72 md:h-80 rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-6 shadow-xl shadow-slate-200/50 border border-slate-100">
									<Image
										alt={event.title}
										src={event.img}
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
										className="object-cover group-hover:scale-110 transition-transform duration-1000"
									/>
									{/* Overlay Gradient */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								</div>

								{/* Content Section */}
								<div className="px-2">
									<div
										className={`inline-flex items-center gap-2 ${event.color} font-black text-[10px] md:text-xs uppercase mb-3 ${locale === "kn" ? "font-kannada" : ""}`}
									>
										<span
											className={`size-2 rounded-full ${event.dot} animate-pulse`}
										></span>
										{event.tag}
									</div>
									<h4
										className={`text-xl md:text-2xl font-black mb-3 text-brand-black leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2 min-h-[3.5rem] ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{event.title}
									</h4>
									<p
										className={`text-sm md:text-base text-slate-500 font-medium leading-relaxed line-clamp-3 ${locale === "kn" ? "font-kannada" : ""}`}
									>
										{event.info}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
