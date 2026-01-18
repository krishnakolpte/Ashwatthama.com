import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Anek_Kannada } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/home/Navbar";
import "../globals.css";
import { SupportedLocale } from "@/types/navbar";
import Footer from "@/components/home/Footer";

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta",
	display: "swap",
	weight: ["300", "400", "500", "600", "700", "800"],
});

const anekKannada = Anek_Kannada({
	subsets: ["kannada"],
	variable: "--font-anek",
	display: "swap",
	weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Ashwatthama Microfinance | Global Tech-Fin Partner",
	description:
		"Empowering rural growth with trusted financial services and micro-loans.",
	icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
	themeColor: "#800000",
	width: "device-width",
	initialScale: 1,
};

interface LocaleLayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
	children,
	params,
}: LocaleLayoutProps) {
	const { locale } = await params;
	const messages = await getMessages();

	return (
		<html
			lang={locale}
			className="scroll-smooth"
			data-scroll-behavior="smooth"
			suppressHydrationWarning
		>
			<body
				className={`
                    ${plusJakarta.variable} 
                    ${anekKannada.variable}
                `}
			>
				<NextIntlClientProvider messages={messages} locale={locale}>
					<Navbar locale={locale as SupportedLocale} />
					<main id="main-content">{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
