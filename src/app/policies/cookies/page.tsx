import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Luxey Perfumes website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-violet-50 to-pink-50 border-b border-violet-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
            Policy
          </p>
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            <span className="gradient-text">Cookie</span> Policy
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-sm max-w-none">
        <p className="text-sm text-gray-500 mb-8">Effective Date: March 14, 2026</p>

        <p>
          This website may use cookies and similar technologies to improve your browsing experience, understand website
          traffic, remember preferences, and support website functionality and marketing efforts.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help websites function
          properly and collect certain information about user activity.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">2. Types of Cookies We May Use</h2>
        <p>We may use:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>Essential cookies to enable core website functions</li>
          <li>Performance cookies to analyze traffic and improve website performance</li>
          <li>Functional cookies to remember your preferences</li>
          <li>Marketing or analytics cookies to help measure campaigns or understand user behavior</li>
        </ul>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">3. Why We Use Cookies</h2>
        <p>We may use cookies to:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>keep the website working properly</li>
          <li>improve user experience</li>
          <li>remember settings or preferences</li>
          <li>understand how visitors use the site</li>
          <li>support advertising, remarketing, or analytics tools where applicable</li>
        </ul>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">4. Third-Party Cookies</h2>
        <p>
          Some cookies may be set by third-party services used on the website, such as analytics providers, payment tools,
          social media integrations, or marketing tools.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">5. Managing Cookies</h2>
        <p>
          You can control or disable cookies through your browser settings. Please note that disabling some cookies may
          affect how the website functions.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">6. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Changes will be posted on this page with a revised effective
          date.
        </p>

        <h2 className="text-lg font-medium text-gray-900 mt-10 mb-4">7. Contact</h2>
        <p>
          For questions about our use of cookies, contact:<br />
          Email: <a href="mailto:info@luxeyperfumes.com" className="text-violet-600 hover:text-violet-800">info@luxeyperfumes.com</a><br />
          Phone/WhatsApp: 0200211226
        </p>
      </div>
    </div>
  );
}
