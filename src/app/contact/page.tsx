"use client";

import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "233548911324";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappMessage = `🛍️ *New Luxey Perfumes Inquiry*%0A%0A*Name:* ${form.firstName} ${form.lastName}%0A*Email:* ${form.email}%0A*Subject:* ${form.subject}%0A*Message:* ${form.message}`;

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
          from_name: "Luxey Perfumes Website",
          subject: `${form.subject} — ${form.firstName} ${form.lastName}`,
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          message: form.message,
        }),
      });
    } catch (err) {
      console.error("Email send error:", err);
    }

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`,
      "_blank"
    );

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-50 to-pink-50 border-b border-violet-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">
            Get in Touch
          </p>
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            <span className="gradient-text">Contact</span> Us
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl">
            We&apos;d love to hear from you. Whether you have a question about
            our fragrances or need assistance, our team is here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-xs tracking-[0.2em] text-gray-900 uppercase mb-6">
                Visit Us
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin
                    size={18}
                    className="text-violet-500 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-sm text-gray-900">Luxey Perfumes</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Kiravi Street, Asokwa
                      <br />
                      Kumasi, Ghana
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone
                    size={18}
                    className="text-pink-500 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-sm text-gray-900">Phone</p>
                    <p className="text-xs text-gray-500 mt-1">
                      +233 548 911 324
                      <br />
                      +233 020 021 1226
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail
                    size={18}
                    className="text-violet-500 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-sm text-gray-900">Email</p>
                    <p className="text-xs text-gray-500 mt-1">
                      bernardbarnieh@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock
                    size={18}
                    className="text-amber-500 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-sm text-gray-900">Opening Hours</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Mon – Fri: 8:00 AM – 8:00 PM
                      <br />
                      Saturday: Closed
                      <br />
                      Sunday: 11:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-gradient-to-r from-violet-50 to-pink-50 border border-violet-200 p-12 text-center rounded-2xl">
                <h3 className="text-xl font-light text-gray-900 mb-3">
                  Thank You!
                </h3>
                <p className="text-sm text-gray-500">
                  We&apos;ve received your message and will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm underline underline-offset-4 text-violet-600 hover:text-violet-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-wider text-gray-500 uppercase mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border border-violet-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 placeholder:text-gray-300 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider text-gray-500 uppercase mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border border-violet-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 placeholder:text-gray-300 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-wider text-gray-500 uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-violet-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 placeholder:text-gray-300 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider text-gray-500 uppercase mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-violet-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 text-gray-600 bg-white transition-all"
                  >
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Product Information</option>
                    <option>Wholesale</option>
                    <option>Press &amp; Media</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-wider text-gray-500 uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-violet-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 placeholder:text-gray-300 resize-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm tracking-[0.1em] uppercase px-10 py-4 rounded-full hover:from-violet-700 hover:to-pink-600 transition-all shadow-lg shadow-violet-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-full hover:bg-[#1da851] transition-all shadow-lg shadow-green-500/20"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
