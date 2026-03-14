import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for Luxey Perfumes website and purchases.",
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-violet-50 to-pink-50 border-b border-violet-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
            Legal
          </p>
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            <span className="gradient-text">Terms</span> &amp; Conditions
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-sm max-w-none">
        <p className="text-sm text-gray-500 mb-8">Effective Date: March 14, 2026</p>

        <p>
          Welcome to Luxey Perfumes. These Terms &amp; Conditions govern your use of our website and any purchases made
          through it. By accessing this website or placing an order, you agree to be bound by these Terms &amp; Conditions.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">1. About Us</h2>
        <p>
          Luxey Perfumes is an independent fragrance retail startup operating in Ghana. The website offers perfumes and
          related fragrance products for personal purchase and delivery.
        </p>
        <p>
          For any questions regarding these Terms &amp; Conditions, please contact us at:<br />
          Email: <a href="mailto:info@luxeyperfumes.com" className="text-violet-600 hover:text-violet-800">info@luxeyperfumes.com</a><br />
          Phone/WhatsApp: 0200211226<br />
          Address: Kiravi Street, Asokwa, Kumasi, Ashanti Region, Ghana
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">2. Eligibility to Use the Website</h2>
        <p>
          By using this website, you confirm that you are at least 18 years old or are using the website under the
          supervision of a parent or legal guardian.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">3. Products and Descriptions</h2>
        <p>
          We aim to ensure that all product descriptions, images, prices, and availability information are accurate.
          However, slight differences may occur in packaging, bottle design, or presentation. We reserve the right to
          correct errors, inaccuracies, or omissions at any time without prior notice.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">4. Pricing</h2>
        <p>
          All prices displayed on this website are listed in the currency stated on the website at the time of purchase.
          Prices may be changed at any time without notice. Delivery fees, where applicable, will be shown at checkout
          before payment is made.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">5. Orders</h2>
        <p>
          Placing an order on this website does not guarantee acceptance. All orders are subject to availability and
          confirmation. Luxey Perfumes reserves the right to refuse or cancel any order for reasons including product
          unavailability, pricing errors, suspected fraud, or payment issues.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">6. Payments</h2>
        <p>
          Payments on this website are processed securely through Paystack. By making a purchase, you agree that payment
          authorization and processing may be handled by Paystack through its secure payment systems. Orders will only be
          confirmed after successful payment authorization and verification.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">7. Shipping and Delivery</h2>
        <p>
          We aim to process and dispatch orders within the timelines stated in our Shipping &amp; Delivery Policy. Delivery
          times are estimates only and may be affected by factors beyond our control, including courier delays, weather,
          public holidays, or incorrect address details provided by the customer.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">8. Returns, Refunds, and Exchanges</h2>
        <p>
          Returns, refunds, and exchanges are governed by our Refund / Return / Exchange Policy. Customers are encouraged
          to read that policy before placing an order.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">9. Cancellations</h2>
        <p>
          Orders may only be cancelled before they are processed or dispatched. Once an order has been processed or
          shipped, cancellation may no longer be possible.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">10. Intellectual Property</h2>
        <p>
          All content on this website, including text, logos, graphics, product images, branding, and design elements, is
          the property of Luxey Perfumes unless otherwise stated. You may not reproduce, copy, distribute, or use any
          content from this website without prior written permission.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">11. Prohibited Use</h2>
        <p>You agree not to use this website:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>for unlawful purposes</li>
          <li>to interfere with the website&apos;s operation or security</li>
          <li>to submit false information</li>
          <li>to attempt fraud or unauthorized transactions</li>
          <li>to copy or exploit content without permission</li>
        </ul>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">12. Limitation of Liability</h2>
        <p>
          Luxey Perfumes shall not be liable for indirect, incidental, special, or consequential damages arising from the
          use of this website, delays in delivery, or inability to use the website or products, except where such
          limitation is not permitted by law.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">13. Privacy</h2>
        <p>
          Your use of this website is also subject to our Privacy Policy, which explains how your personal information is
          collected, used, and protected.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">14. Changes to These Terms</h2>
        <p>
          We may update these Terms &amp; Conditions from time to time. Any changes will be posted on this page with an
          updated effective date. Continued use of the website after such changes means you accept the revised terms.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">15. Governing Law</h2>
        <p>
          These Terms &amp; Conditions shall be governed by and interpreted in accordance with the laws applicable in Ghana.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">16. Contact</h2>
        <p>
          For customer support, legal notices, or complaints, contact:<br />
          Email: <a href="mailto:info@luxeyperfumes.com" className="text-violet-600 hover:text-violet-800">info@luxeyperfumes.com</a><br />
          Phone/WhatsApp: 0200211226<br />
          Address: Kiravi Street, Asokwa, Kumasi, Ashanti Region, Ghana
        </p>
      </div>
    </div>
  );
}
