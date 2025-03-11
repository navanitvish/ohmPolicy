import React, { useState } from 'react';
import Navbar from './Navbar';

const PrivacyPolicy = () => {
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
      <main className="w-full mx-auto px-4 md:px-6 py-8">
        <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-indigo-900 text-center mb-6">Privacy Policy</h2>
          
          <p className="text-center mb-6"><strong>Effective Date:</strong> {currentDate}</p>
          
          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">Introduction</h3>
            <p className="mb-4">
              Welcome to <strong>Ohm Astro</strong> ("we," "us," or "our"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our online astrology services, which include chatting or video calling with astrologers, paying for services, and interacting with the platform.
            </p>
            <p className="mb-4">
              By using <strong>Ohm Astro</strong> (the "App" or "Service"), you consent to the data practices described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">1. Information We Collect</h3>
            <p className="mb-3">We collect the following types of information when you use the Service:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Personal Information:</strong> When you register or create an account with <strong>Ohm Astro</strong>, you may be required to provide personal details, such as your name, email address, phone number, and payment information.
              </li>
              <li>
                <strong>Payment Information:</strong> To process payments for services, we may collect and store payment information such as credit card details, billing address, and other transaction-related information. This data may be processed by third-party payment processors.
              </li>
              <li>
                <strong>Communication Information:</strong> If you choose to chat or video call with an astrologer, we collect the content of your communication, including text chat, video, audio, and any other information shared during the session.
              </li>
              <li>
                <strong>Device and Usage Information:</strong> We may automatically collect certain technical information, such as your device type, operating system, browser type, IP address, and usage data regarding your interactions with the Service.
              </li>
              <li>
                <strong>Location Information:</strong> With your consent, we may collect location data to tailor the service or provide location-based features (e.g., time zone adjustments).
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">2. How We Use Your Information</h3>
            <p className="mb-3">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Provide and improve our services:</strong> We use your information to process and facilitate your sessions with astrologers, provide customer support, and improve the overall user experience on the platform.
              </li>
              <li>
                <strong>Payment Processing:</strong> Your payment information is used to process transactions for the services you purchase. We use third-party payment processors to securely handle these transactions.
              </li>
              <li>
                <strong>Communication:</strong> We may use your email address or phone number to send you important information about your account, payment receipts, service updates, promotional offers, or other relevant updates.
              </li>import Navbar from './Navbar';

              <li>
                <strong>Customization:</strong> We may use your data to personalize your experience, such as recommending astrologers based on your preferences or past interactions.
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may use your information to comply with legal obligations, resolve disputes, or enforce our terms and conditions.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">3. Sharing Your Information</h3>
            <p className="mb-3">We do not sell or rent your personal information. However, we may share your data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>With astrologers:</strong> In order to provide you with astrology consultations, your communication with the astrologer will be shared in the course of providing the service.
              </li>
              <li>
                <strong>Payment Processors:</strong> We may share your payment information with third-party payment processors to facilitate transactions.
              </li>
              <li>
                <strong>With service providers:</strong> We may share your information with third-party vendors or service providers who help us operate, maintain, and improve the Service (e.g., hosting, customer support, data analytics).
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may disclose your information if required by law or in response to a valid request by public authorities, such as a court order or government agency.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">4. Data Security</h3>
            <p className="mb-4">
              We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that no security system is entirely secure, and we cannot guarantee the absolute protection of your data.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">5. Your Rights and Choices</h3>
            <p className="mb-3">Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Access and correction:</strong> You can request access to your personal data and ask for corrections or updates if necessary.
              </li>
              <li>
                <strong>Deletion:</strong> You may request the deletion of your personal data, subject to applicable legal exceptions.
              </li>
              <li>
                <strong>Opt-out of marketing communications:</strong> You may opt out of receiving promotional or marketing communications by following the unsubscribe instructions in the communication.
              </li>
            </ul>
            <p className="mb-4">
              To exercise your rights, please contact us at [email address or contact link].
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">6. Children's Privacy</h3>
            <p className="mb-4">
              The Service is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">7. Cookies and Tracking Technologies</h3>
            <p className="mb-4">
              We may use cookies and similar tracking technologies to improve your experience with the Service. These technologies help us analyze usage patterns, customize content, and deliver advertisements. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">8. Data Retention</h3>
            <p className="mb-4">
              We retain your personal data only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements. After that, we may delete or anonymize your data.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">9. Changes to This Privacy Policy</h3>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your data.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">10. Contact Us</h3>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
            </p>
            <div className="pl-4 border-l-4 border-indigo-300 py-2">
              <p>Ohm Astro</p>
              <p>[Company Address]</p>
              <p>[Email Address]</p>
              <p>[Phone Number]</p>
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

export default PrivacyPolicy;