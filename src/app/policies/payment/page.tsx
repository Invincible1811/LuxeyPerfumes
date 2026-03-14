import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Information",
  description: "Payment information and security details for Luxey Perfumes.",
};

export default function PaymentInfoPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-violet-50 to-pink-50 border-b border-violet-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
            Information
          </p>
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            <span className="gradient-text">Payment</span> Information
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-sm max-w-none">
        <p>Payments on this website are processed securely through <strong>Paystack</strong>.</p>

        <p>
          When you place an order, your payment may be authorized, processed, and verified through Paystack&apos;s secure
          payment infrastructure. Luxey Perfumes does not store your full card details on its own servers.
        </p>

        <p>
          Accepted payment methods will be shown at checkout. Orders are only confirmed after successful payment
          authorization and verification.
        </p>

        <p>
          If a payment fails, is declined, or cannot be verified, the order may not be processed.
        </p>

        <div className="bg-violet-50/80 border border-violet-100 rounded-2xl p-6 mt-8">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Accepted Payment Methods</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Visa &amp; Mastercard</li>
            <li>Mobile Money (MTN MoMo, Vodafone Cash, AirtelTigo)</li>
            <li>Bank Transfer</li>
          </ul>
        </div>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">Contact</h2>
        <p>
          For payment-related questions, contact:<br />
          Email: <a href="mailto:info@luxeyperfumes.com" className="text-violet-600 hover:text-violet-800">info@luxeyperfumes.com</a><br />
          Phone/WhatsApp: 0200211226
        </p>
      </div>
    </div>
  );
}
