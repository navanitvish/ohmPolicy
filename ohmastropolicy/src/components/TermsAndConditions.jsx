import React, { useState } from 'react';
import Navbar from './Navbar';
const TermsAndConditions = () => {
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
          <h2 className="text-2xl font-bold text-indigo-900 text-center mb-6">Terms and Conditions</h2>
          
          <p className="text-center mb-6"><strong>Effective Date:</strong> {currentDate}</p>
          
          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">Introduction</h3>
            <p className="mb-4">
              Welcome to <strong>Ohm Astro</strong> ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of the <strong>Ohm Astro</strong> mobile application (the "App") and the services offered through the App, including astrology consultations via chat or video call ("Services"). By accessing or using the App, you agree to comply with and be bound by these Terms.
            </p>
            <p className="mb-4">
              If you do not agree to these Terms, you should not use the App or Services.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">1. Acceptance of Terms</h3>
            <p className="mb-4">
              By accessing or using the App, you acknowledge that you have read, understood, and agree to these Terms. We reserve the right to modify or update these Terms at any time, and any changes will be posted in the App or on our website. You are responsible for reviewing these Terms periodically to stay informed of any updates.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">2. Eligibility</h3>
            <p className="mb-4">
              You must be at least 18 years of age to use the App and access our Services. If you are under 18, you may only use the App and Services with the consent and supervision of a parent or legal guardian.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">3. Account Registration</h3>
            <p className="mb-4">
              To use certain features of the App, including booking astrology consultations, you must create an account. When registering, you agree to provide accurate, current, and complete information, and to maintain the security of your account credentials. You are responsible for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">4. Services</h3>
            <p className="mb-4">
              Ohm Astro provides astrology consultations via chat or video call with experienced astrologers. You agree that the Services provided are for informational purposes only and should not be considered as medical, legal, or financial advice.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Consultation Fees:</strong> All consultations are subject to fees, which will be clearly indicated before you proceed with the session. Payments must be made through the App before the consultation begins.
              </li>
              <li>
                <strong>Payment Methods:</strong> You agree to provide accurate payment information and authorize us to charge you for the Services rendered. Payment processing is handled by third-party providers, and you agree to comply with their terms and conditions.
              </li>
              <li>
                <strong>Service Availability:</strong> We make no guarantees regarding the availability of astrologers, and consultations may be subject to availability based on the astrologer's schedule.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">5. User Conduct</h3>
            <p className="mb-3">By using the App and Services, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Submit any false, misleading, or inappropriate content during consultations.</li>
              <li>Engage in any abusive, harassing, or discriminatory behavior toward astrologers or other users.</li>
              <li>Attempt to circumvent the payment process or fraudulently use the Services.</li>
              <li>Share personal information that you are not authorized to share or engage in activities that violate applicable laws or third-party rights.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">6. Confidentiality</h3>
            <p className="mb-4">
              We respect your privacy and confidentiality. All communication during consultations will be treated as confidential, and we will not share your personal information or the content of your session with third parties, except as required by law or as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">7. Payment, Refund, and Cancellation Policy</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Payments:</strong> All payments for consultations must be made in advance through the payment methods provided on the App. We may use third-party payment processors to handle transactions.
              </li>
              <li>
                <strong>Refunds:</strong> Refunds are generally not provided for completed consultations. However, if you experience technical issues or other issues beyond your control that prevent you from accessing the session, please contact customer support for assistance.
              </li>
              <li>
                <strong>Cancellations:</strong> You may cancel or reschedule your consultation if it is done within the time frame specified during booking. Cancellations or rescheduling may incur a fee depending on the timing.
              </li>
            </ul>
            <p className="mb-4">
              For full details on cancellations and refunds, please refer to our <em>Cancellation Policy</em>.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">8. Intellectual Property</h3>
            <p className="mb-4">
              All content available in the App, including text, images, logos, graphics, and software, is the property of Ohm Astro or its licensors and is protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-transferable license to access and use the App for personal, non-commercial purposes.
            </p>
            <p className="mb-4">
              You may not copy, modify, distribute, or create derivative works of the App or its content without our express permission.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">9. Disclaimers and Limitation of Liability</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>No Guarantees:</strong> The Services provided by the App, including astrology consultations, are for informational purposes only and we make no guarantees about the accuracy, reliability, or effectiveness of the advice provided.
              </li>
              <li>
                <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, Ohm Astro, its affiliates, employees, and agents will not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App or Services, even if we have been advised of the possibility of such damages.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">10. Termination</h3>
            <p className="mb-4">
              We reserve the right to suspend or terminate your access to the App and Services at our discretion, without notice, if you violate these Terms or engage in activities that we believe may harm the App, its users, or its reputation.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">11. Privacy</h3>
            <p className="mb-4">
              Your use of the App is governed by our <em>Privacy Policy</em>, which describes how we collect, use, and protect your personal information. By using the App, you consent to our Privacy Policy.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">12. Changes to Terms</h3>
            <p className="mb-4">
              We may update these Terms from time to time. Any changes will be posted on this page with an updated effective date. By continuing to use the App after such changes, you agree to the revised Terms.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">13. Governing Law</h3>
            <p className="mb-4">
              These Terms and your use of the App will be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">14. Severability</h3>
            <p className="mb-4">
              If any provision of these Terms is found to be unlawful, void, or unenforceable, the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">15. Contact Us</h3>
            <p className="mb-4">
              If you have any questions or concerns regarding these Terms, please contact us at:
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

export default TermsAndConditions;