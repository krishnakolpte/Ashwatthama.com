import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	// 1. Await the requestLocale (Required in Next.js 15)
	let locale = await requestLocale;

	// 2. Validate using the built-in hasLocale utility
	if (!locale || !hasLocale(routing.locales, locale)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		// 3. Ensure the path to your messages folder is correct
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
