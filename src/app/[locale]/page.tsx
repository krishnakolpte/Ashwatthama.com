import AppShowcase from "@/components/AppShowcase";
import AwardsSection from "@/components/AwardsSection";
import CommunitySlider from "@/components/CommunitySlider";
import Hero from "@/components/Hero";
import Opportunities from "@/components/Opportunities";
import SuccessStories from "@/components/SuccessStories";
import TrustDashboard from "@/components/TrustDashboard";
import WhyUs from "@/components/WhyUs";

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
