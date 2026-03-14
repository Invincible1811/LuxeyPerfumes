import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund / Return / Exchange Policy",
  description: "Refund, return, and exchange policy for Luxey Perfumes.",
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-violet-50 to-pink-50 border-b border-violet-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
            Policy
          </p>
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            <span className="gradient-text">Refund</span> / Return / Exchange
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-sm max-w-none">
        <p className="text-sm text-gray-500 mb-8">Effective Date: March 14, 2026</p>

        <p>At Luxey Perfumes, customer satisfaction matters to us. Please read this policy carefully before making a purchase.</p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">1. General Rule</h2>
        <p>
          Due to the nature of fragrance and personal care products, returns and exchanges are only accepted in limited
          situations, including where an item is:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>damaged on delivery</li>
          <li>defective</li>
          <li>incorrect</li>
          <li>materially different from what was ordered</li>
        </ul>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">2. Return Request Period</h2>
        <p>
          If you wish to request a return, refund, or exchange, you must contact us within 48 hours of delivery at{" "}
          <a href="mailto:info@luxeyperfumes.com" className="text-violet-600 hover:text-violet-800">info@luxeyperfumes.com</a>{" "}
          or 0200211226.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">3. Condition of Returned Items</h2>
        <p>To be eligible for a return or exchange, the item must:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>be unused or only minimally handled for inspection</li>
          <li>be in its original packaging where possible</li>
          <li>include proof of purchase</li>
          <li>not be intentionally damaged after delivery</li>
        </ul>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">4. Non-Returnable Items</h2>
        <p>We may refuse returns or exchanges for:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>opened or heavily used perfume items</li>
          <li>products damaged after delivery by misuse or mishandling</li>
          <li>clearance, promotional, or final-sale items unless defective</li>
          <li>items returned outside the stated return window without valid reason</li>
        </ul>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">5. Damaged or Incorrect Items</h2>
        <p>If you receive a damaged, defective, or wrong item, please send:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>your order number</li>
          <li>a short description of the issue</li>
          <li>clear photos or video evidence where possible</li>
        </ul>
        <p>Once reviewed, we may offer one of the following:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>replacement of the item</li>
          <li>exchange for another item</li>
          <li>store credit</li>
          <li>full or partial refund, depending on the situation</li>
        </ul>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">6. Refunds</h2>
        <p>
          Approved refunds will be processed to the original payment method where possible. Refund processing time may
          depend on your payment provider or bank.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">7. Exchanges</h2>
        <p>
          Exchanges are subject to stock availability. If the requested replacement item is not available, we may offer a
          refund or store credit instead.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">8. Return Shipping</h2>
        <p>
          Where the return is due to our error, defective goods, or wrong delivery, we may cover or reimburse the return
          cost where appropriate. In other cases, return shipping costs may be the customer&apos;s responsibility.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">9. Order Cancellations</h2>
        <p>
          Orders may only be cancelled before they are processed or dispatched. Once shipped, cancellations may no longer
          be possible.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">10. Contact</h2>
        <p>
          For all return, refund, or exchange requests, contact:<br />
          Email: <a href="mailto:info@luxeyperfumes.com" className="text-violet-600 hover:text-violet-800">info@luxeyperfumes.com</a><br />
          Phone/WhatsApp: 0200211226
        </p>
      </div>
    </div>
  );
}
