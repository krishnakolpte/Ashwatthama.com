import AppShowcase from "@/components/home/AppShowcase";
import AwardsSection from "@/components/home/AwardsSection";
import CommunitySlider from "@/components/home/CommunitySlider";
import Hero from "@/components/home/Hero";
import Opportunities from "@/components/home/Opportunities";
import SuccessStories from "@/components/home/SuccessStories";
import TrustDashboard from "@/components/home/TrustDashboard";
import WhyUs from "@/components/home/WhyUs";

export default function HomePage() {
	return (
		<>
			<Hero />
			<TrustDashboard />
			<Opportunities />
			<WhyUs />
			<AppShowcase />
			<AwardsSection />
			<CommunitySlider />
			<SuccessStories />
		</>
	);
}
