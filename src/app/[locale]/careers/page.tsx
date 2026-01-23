import ApplicationForm from "@/components/careers/ApplicationForm";
import CareersHero from "@/components/careers/CareersHero";
import Culture from "@/components/careers/Culture";
import JobOpenings from "@/components/careers/JobOpenings";
import Testimonials from "@/components/careers/Testimonials";
import React from "react";

function page() {
	return (
		<>
			<CareersHero />
			<Culture />
			<JobOpenings />
			<Testimonials />
			<ApplicationForm />
		</>
	);
}

export default page;
