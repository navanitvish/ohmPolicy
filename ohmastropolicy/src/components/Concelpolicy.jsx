import React, { useState } from 'react';
import Navbar from './Navbar';
const CancellationPolicy = () => {
  const [currentDate] = useState(new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));

  return (
    <div className="min-h-screen bg-indigo-50 text-gray-800">
      {/* Header */}
      <header className="bg-indigo-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-center">Ohm Astro</h1>
          <div className="mt-4 flex justify-center">
            <Navbar />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-indigo-900 text-center mb-6">Cancellation Policy</h2>
          
          <p className="text-center mb-6"><strong>Effective Date:</strong> {currentDate}</p>
          
          <section className="mb-6">
            <p className="mb-4">
              Thank you for using <strong>Ohm Astro</strong>. We strive to provide a seamless experience for our users, and this Cancellation Policy outlines the process and conditions for canceling your astrology consultation.
            </p>
            <p className="mb-4 italic">
              By booking a consultation through <strong>Ohm Astro</strong>, you agree to the terms of this Cancellation Policy.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">1. Consultation Cancellation by Users</h3>
            <p className="mb-3">
              If you wish to cancel or reschedule your consultation with an astrologer, the following conditions apply:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Cancellation Window:</strong> You may cancel or reschedule your consultation free of charge up to 24 hours before the scheduled time.
              </li>
              <li>
                <strong>Cancellation Fee:</strong> If you cancel your consultation within 24 hours of the scheduled time, a cancellation fee of 25% of the total consultation fee will apply. This fee is charged to cover administrative costs.
              </li>
              <li>
                <strong>How to Cancel:</strong> To cancel or reschedule your consultation, please log into your account, navigate to your upcoming sessions, and select the cancellation option. Alternatively, you may contact our customer support team at support@ohmastro.com for assistance.
              </li>
              <li>
                <strong>Refunds:</strong> If you cancel your consultation within the allowable window, you will be eligible for a refund, minus the cancellation fee if applicable. Refunds will be processed within 5-7 business days after the cancellation.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">2. Consultation Cancellation by Ohm Astro</h3>
            <p className="mb-3">
              In rare cases, <strong>Ohm Astro</strong> may need to cancel or reschedule your consultation due to technical issues, astrologer availability, or other unforeseen circumstances. In such cases:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Notification:</strong> We will notify you as soon as possible regarding any cancellations or rescheduling, either by email or through the app.
              </li>
              <li>
                <strong>Refunds:</strong> If a consultation is canceled by <strong>Ohm Astro</strong> and no alternative session is available, you will receive a full refund for any fees paid.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">3. Non-Refundable Services</h3>
            <p className="mb-3">
              The following services are non-refundable:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Consultations that have already taken place.
              </li>
              <li>
                Any fees paid for non-cancellable services, such as special promotions or discounted sessions where the terms explicitly state no cancellations or refunds.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">4. No-Show Policy</h3>
            <p className="mb-4">
              If you do not show up for your scheduled consultation without prior notice or cancellation, you will not be eligible for a refund. We recommend notifying us in advance if you are unable to attend your session.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">5. Changes to the Cancellation Policy</h3>
            <p className="mb-4">
              <strong>Ohm Astro</strong> reserves the right to modify or update this Cancellation Policy at any time. Any changes will be communicated to you via email or within the app, and will be effective as of the date specified in the notification.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">6. Contact Us</h3>
            <p className="mb-4">
              If you have any questions or concerns regarding cancellations or refunds, please contact us at:
            </p>
            <div className="pl-4 border-l-4 border-indigo-300 py-2">
                  <p>Ohm Astro</p>
                  <p>Sector 17, Panchkula</p>
                  <p>Haryana, India - 134109</p>
                  <p>support@ohmastro.com</p>
                  <p>+91 8930701666</p>
                </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Ohm Astro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CancellationPolicy;