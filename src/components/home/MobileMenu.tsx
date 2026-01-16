"use client";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="lg:hidden">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="p-2 text-slate-600"
			>
				{isOpen ? <X size={28} /> : <Menu size={28} />}
			</button>

			{isOpen && (
				<div className="absolute top-full left-0 w-full bg-white border-b shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
					<details className="group">
						<summary className="list-none text-lg font-bold flex justify-between items-center">
							Loans <ChevronDown size={18} />
						</summary>
						<div className="pl-4 pt-4 flex flex-col gap-3 border-l-2 border-red-50 mt-2">
							<a
								href="#"
								className="font-semibold text-slate-600"
							>
								Home Loans
							</a>
							<a
								href="#"
								className="font-semibold text-slate-600"
							>
								MSME Credit
							</a>
						</div>
					</details>
					<a href="#" className="text-lg font-bold">
						Impact
					</a>
					<a href="#" className="text-lg font-bold">
						Contact
					</a>
					<button className="w-full mt-4 h-12 bg-red-900 text-white rounded-xl font-bold">
						Member Portal
					</button>
				</div>
			)}
		</div>
	);
}
