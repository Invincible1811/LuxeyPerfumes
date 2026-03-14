import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Luxey Perfumes — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-violet-50 to-pink-50 border-b border-violet-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
            Legal
          </p>
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            <span className="gradient-text">Privacy</span> Policy
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-sm max-w-none">
        <p className="text-sm text-gray-500 mb-8">Effective Date: March 14, 2026</p>

        <p>
          Luxey Perfumes respects your privacy and is committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, store, and protect your information when you visit our website or place an order.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
        <p>We may collect the following types of personal information:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>name</li>
          <li>phone number</li>
          <li>email address</li>
          <li>delivery address</li>
          <li>billing details</li>
          <li>order history</li>
          <li>payment reference information</li>
          <li>messages sent through our contact form, email, or WhatsApp</li>
          <li>device, browser, and usage information collected through cookies or analytics tools</li>
        </ul>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">2. How We Collect Information</h2>
        <p>We collect personal information when you:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>place an order</li>
          <li>contact us</li>
          <li>subscribe to our newsletter</li>
          <li>browse our website</li>
          <li>use forms or communicate with us through available channels</li>
        </ul>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">3. How We Use Your Information</h2>
        <p>We may use your information to:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>process and deliver orders</li>
          <li>communicate with you about your purchase</li>
          <li>provide customer support</li>
          <li>verify payments</li>
          <li>prevent fraud and misuse</li>
          <li>improve our website, services, and customer experience</li>
          <li>send updates, offers, or marketing messages where permitted</li>
        </ul>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">4. Payment Processing</h2>
        <p>
          Payments on this website are processed securely through Paystack. We do not store your full card details on our
          own servers. Payment-related data may be collected and processed by Paystack in line with its own privacy and
          security procedures.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">5. Sharing of Information</h2>
        <p>We may share personal information only where necessary, including with:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>payment service providers such as Paystack</li>
          <li>delivery or courier partners</li>
          <li>technology service providers supporting the website</li>
          <li>legal or regulatory authorities where required by law</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">6. Data Retention</h2>
        <p>
          We retain personal information only for as long as reasonably necessary to fulfill orders, provide support,
          maintain records, resolve disputes, comply with legal obligations, and protect our business interests.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">7. Cookies and Tracking</h2>
        <p>
          Our website may use cookies and similar technologies to improve site performance, remember preferences, analyze
          traffic, and support marketing activities. You can control cookies through your browser settings where available.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">8. Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect your personal information from unauthorized
          access, misuse, loss, or disclosure. However, no online transmission or storage system can be guaranteed to be
          completely secure.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">9. Your Rights</h2>
        <p>Subject to applicable law, you may have the right to:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>request access to your personal information</li>
          <li>request correction of inaccurate information</li>
          <li>request deletion where appropriate</li>
          <li>withdraw consent to marketing communications</li>
          <li>object to certain uses of your information</li>
        </ul>
        <p>
          To make a request, contact us at{" "}
          <a href="mailto:info@luxeyperfumes.com" className="text-violet-600 hover:text-violet-800">info@luxeyperfumes.com</a>.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">10. Marketing Communications</h2>
        <p>
          If you subscribe to receive promotional messages from us, you may opt out at any time by following the
          unsubscribe option in the message or by contacting us directly.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">11. Third-Party Services</h2>
        <p>
          This website may contain links to third-party services or platforms. We are not responsible for the privacy
          practices of those third parties.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised
          effective date.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">13. Contact</h2>
        <p>
          If you have questions about this Privacy Policy or your personal data, contact:<br />
          Email: <a href="mailto:info@luxeyperfumes.com" className="text-violet-600 hover:text-violet-800">info@luxeyperfumes.com</a><br />
          Phone/WhatsApp: 0200211226<br />
          Address: Kiravi Street, Asokwa, Kumasi, Ashanti Region, Ghana
        </p>
      </div>
    </div>
  );
}
