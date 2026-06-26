import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function Contact() {
  return (
    <div className="bg-white pb-24">
      <Helmet>
        <title>Contact Us - Glow & Glam</title>
        <meta name="description" content="Get in touch with the Glow & Glam team. We'd love to hear from you." />
      </Helmet>

      {/* Header */}
      <div className="bg-rose-50 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 tracking-tight">Contact Glow & Glam</h1>
        <p className="mt-4 text-lg text-rose-600 max-w-2xl mx-auto px-4">
          We'd love to hear from you. Get in touch with our team.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-rose-50 text-rose-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="mt-2 text-gray-600">
                    Glow & Glam Cosmetics Pvt. Ltd.<br />
                    123 Beauty Avenue<br />
                    New Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-rose-50 text-rose-600">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                  <p className="mt-2 text-gray-600">
                    Phone: <a href="tel:+919876543210" className="hover:text-rose-600 transition-colors">+91 98765 43210</a><br />
                    Email: <a href="mailto:support@glowandglam.com" className="hover:text-rose-600 transition-colors">support@glowandglam.com</a><br />
                    Website: <a href="#" className="hover:text-rose-600 transition-colors">www.glowandglam.com</a>
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-rose-50 text-rose-600">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                  <div className="mt-2 text-gray-600 space-y-1">
                    <p className="flex justify-between w-48"><span>Monday – Friday:</span> <span>9:00 AM – 6:00 PM</span></p>
                    <p className="flex justify-between w-48"><span>Saturday:</span> <span>10:00 AM – 4:00 PM</span></p>
                    <p className="flex justify-between w-48 text-rose-500 font-medium"><span>Sunday:</span> <span>Closed</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl shadow-rose-900/5">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Send a Message</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-2">
                  <input type="text" name="name" id="name" className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 bg-gray-50/50" placeholder="Jane Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <div className="mt-2">
                    <input type="email" name="email" id="email" className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 bg-gray-50/50" placeholder="jane@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="mt-2">
                    <input type="tel" name="phone" id="phone" className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 bg-gray-50/50" placeholder="+91" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <div className="mt-2">
                  <input type="text" name="subject" id="subject" className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 bg-gray-50/50" placeholder="How can we help?" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <div className="mt-2">
                  <textarea id="message" name="message" rows={4} className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 bg-gray-50/50" placeholder="Write your message here..."></textarea>
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full flex justify-center items-center rounded-xl bg-gray-900 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
