import AppShowcase from "@/components/AppShowcase";
import Hero from "@/components/Hero";
import Opportunities from "@/components/Opportunities";
import WhyUs from "@/components/WhyUs";

export default function HomePage() {
	return (
		<>
			<Hero />
			<Opportunities />
			<WhyUs />
			<AppShowcase />
		</>
	);
}
