import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import Leadership from "@/components/about/Leadership";
import MissionVision from "@/components/about/MissionVision";
import Timeline from "@/components/about/Timeline";

function page() {
	return (
		<>
			<AboutHero />
			<MissionVision />
			<Timeline />
			<CoreValues />
			<Leadership />
		</>
	);
}

export default page;
