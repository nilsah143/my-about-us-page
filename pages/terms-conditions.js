import Layout from '../components/Layout';
import Head from 'next/head';

const PrivacyPolicyPage = () => {
  return (
    <Layout title="Privacy Policy - About Us Page Generator">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
      
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 border-b pb-4">
        Terms and Conditions
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Last updated: December 16, 2025
      </p>

      {/* --- Section 1: Agreement to Terms --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Agreement to Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and [Your Company Name] ("we," "us" or "our"), concerning your access to and use of the <span className="font-medium text-gray-900">https://about-us-page-generator-free.vercel.app</span> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms and Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
      </section>

      {/* --- Section 2: User Representations --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. User Representations</h2>
        <p className="text-gray-700 leading-relaxed">
          By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
        </p>
      </section>
      
      {/* --- Section 3: Governing Law (Placeholder) --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Governing Law</h2>
        <p className="text-gray-700 leading-relaxed">
          These Terms shall be governed by and defined in accordance with the laws of [Your Jurisdiction]. [Your Company Name] and yourself irrevocably consent that the courts of [Your Jurisdiction] shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
        </p>
      </section>

      {/* --- Section 4: Contact Us --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: [Your Contact Email Address].
        </p>
      </section>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;