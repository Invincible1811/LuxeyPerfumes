import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact / Legal Information",
  description: "Contact and legal information for Luxey Perfumes.",
};

export default function LegalInfoPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-violet-50 to-pink-50 border-b border-violet-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
            Information
          </p>
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            Contact / <span className="gradient-text">Legal</span> Information
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-gray prose-sm max-w-none">
        <p>
          Luxey Perfumes is an independent fragrance retail startup operating in Ghana.
        </p>

        <p>
          For customer service, order support, legal inquiries, or complaints, please contact us using the details below:
        </p>

        <div className="bg-violet-50/80 border border-violet-100 rounded-2xl p-6 mt-6 space-y-4">
          <div className="flex justify-between text-sm border-b border-violet-100/50 pb-3">
            <span className="text-gray-500">Business Name</span>
            <span className="font-medium text-gray-900">Luxey Perfumes</span>
          </div>
          <div className="flex justify-between text-sm border-b border-violet-100/50 pb-3">
            <span className="text-gray-500">Business Status</span>
            <span className="font-medium text-gray-900">Independent startup</span>
          </div>
          <div className="flex justify-between text-sm border-b border-violet-100/50 pb-3">
            <span className="text-gray-500">Address</span>
            <span className="font-medium text-gray-900">Kiravi Street, Asokwa, Kumasi, Ashanti Region, Ghana</span>
          </div>
          <div className="flex justify-between text-sm border-b border-violet-100/50 pb-3">
            <span className="text-gray-500">Phone / WhatsApp</span>
            <a href="tel:0200211226" className="font-medium text-violet-600 hover:text-violet-800">0200211226</a>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Email</span>
            <a href="mailto:info@luxeyperfumes.com" className="font-medium text-violet-600 hover:text-violet-800">info@luxeyperfumes.com</a>
          </div>
        </div>

        <p className="mt-8 text-gray-600">
          This website is operated as an early-stage retail business offering fragrance products for sale through online channels.
        </p>
      </div>
    </div>
  );
}
