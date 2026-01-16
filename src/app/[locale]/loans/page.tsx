import AboutSection from "@/components/loans/AboutSection";
import InvestmentSection from "@/components/loans/InvestmentSection";
import LoanProducts from "@/components/loans/LoanProducts";
import LoansHero from "@/components/loans/LoansHero";

function page() {
	return (
		<>
			<LoansHero />
			<AboutSection />
			<LoanProducts />
			<InvestmentSection />
		</>
	);
}

export default page;
