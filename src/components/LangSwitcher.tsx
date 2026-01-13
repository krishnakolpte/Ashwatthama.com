"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname, routing } from "@/i18n/routing";

export default function LangSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const handleLocaleChange = (newLocale: string) => {
		// router.replace maintains the same page but changes the prefix (/en to /kn)
		router.replace(pathname, { locale: newLocale as string });
	};

	return (
		<div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
			{routing.locales.map((l) => (
				<button
					key={l}
					onClick={() => handleLocaleChange(l)}
					className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
						locale === l
							? "bg-white text-primary shadow-sm"
							: "text-slate-500 hover:text-primary"
					}`}
				>
					{l.toUpperCase()}
				</button>
			))}
		</div>
	);
}
