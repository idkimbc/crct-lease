import LeasePaymentInterface from "@/components/lease-payment-interface";

export default function LessorPortal() {
	return (
		<div className="min-h-screen bg-gray-50">
			<nav className="bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex items-center">
							<h1 className="text-xl font-semibold">Lessor Portal</h1>
						</div>
					</div>
				</div>
			</nav>
			<main className="p-4">
				<LeasePaymentInterface />
			</main>
		</div>
	);
}
