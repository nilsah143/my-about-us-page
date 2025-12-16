
import Layout from '../components/Layout';
import Head from 'next/head';

const CONTACT_EMAIL = "fastseohelp@gamail.com";
const BUSINESS_ADDRESS = "78 karji, surguja, chhatishgarh , 497001";

const PrivacyPolicyPage = () => {
  return (
    <Layout title="Privacy Policy - About Us Page Generator">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
      
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 border-b pb-4">
        Contact Us
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        We are here to help and answer any question you might have. We look forward to hearing from you.
      </p>

      {/* --- Contact Information Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">✉️ Email Support</h3>
          <p className="text-gray-700 mb-2">
            For general inquiries, support, or feedback, please send us an email. We strive to respond within 24 hours.
          </p>
          <a 
            href={`mailto:${CONTACT_EMAIL}`} 
            className="text-lg font-medium text-blue-600 hover:text-blue-800 underline break-words"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">📍 Business Address</h3>
          <p className="text-gray-700 mb-2">
            While we primarily operate online, our correspondence address is:
          </p>
          <address className="text-gray-700 not-italic font-medium">
            {BUSINESS_ADDRESS}
          </address>
        </div>
      </div>

      {/* --- Placeholder for Contact Form (Remove or replace with your form code) --- */}
     {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Send us a Message</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center text-gray-600 italic">
          [ Placeholder for your actual contact form component (e.g., using Formik or a custom component) ]
        </div>
      </section>   */}

    </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;