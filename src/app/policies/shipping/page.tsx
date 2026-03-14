import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: "Shipping and delivery policy for Luxey Perfumes orders.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-violet-50 to-pink-50 border-b border-violet-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
            Policy
          </p>
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            <span className="gradient-text">Shipping</span> &amp; Delivery
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-sm max-w-none">
        <p className="text-sm text-gray-500 mb-8">Effective Date: March 14, 2026</p>

        <p>Thank you for shopping with Luxey Perfumes. This Shipping &amp; Delivery Policy explains how we process and deliver orders.</p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">1. Processing Time</h2>
        <p>
          Orders are usually processed within 1 to 3 business days after payment has been successfully confirmed, unless
          otherwise stated.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">2. Delivery Time</h2>
        <p>
          Estimated delivery times depend on location and courier availability. Delivery timelines shown on the website
          are estimates only and are not guaranteed.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">3. Delivery Areas</h2>
        <p>
          We deliver to locations specified on the website or confirmed during checkout. If your location falls outside
          our normal delivery area, additional time or charges may apply.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">4. Shipping Fees</h2>
        <p>Shipping costs, if applicable, will be displayed during checkout before payment is completed.</p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">5. Delays</h2>
        <p>Delivery may be delayed due to:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>weather conditions</li>
          <li>courier issues</li>
          <li>public holidays</li>
          <li>high order volumes</li>
          <li>incomplete or incorrect delivery details</li>
          <li>circumstances beyond our reasonable control</li>
        </ul>
        <p>
          We are not responsible for delays caused by third-party courier services once an order has been dispatched.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">6. Customer Responsibility</h2>
        <p>
          Customers are responsible for providing accurate delivery information, including full address, phone number, and
          any necessary instructions. We are not liable for failed delivery caused by incorrect information provided by the
          customer.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">7. Missed Deliveries</h2>
        <p>
          If delivery cannot be completed because the customer is unavailable or unreachable, additional delivery attempts
          or charges may apply depending on the courier arrangement.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">8. Delivery Confirmation</h2>
        <p>
          An order is considered delivered when it has been handed over to the customer, left at the delivery address based
          on agreed instruction, or marked delivered by the assigned courier.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">9. Damaged Packages</h2>
        <p>
          If your package arrives visibly damaged, please report it to us as soon as possible and provide supporting photos
          where available.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">10. Contact</h2>
        <p>
          For delivery questions, contact:<br />
          Email: <a href="mailto:info@luxeyperfumes.com" className="text-violet-600 hover:text-violet-800">info@luxeyperfumes.com</a><br />
          Phone/WhatsApp: 0200211226
        </p>
      </div>
    </div>
  );
}
