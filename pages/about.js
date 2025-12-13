import Layout from '../components/Layout';
import Head from 'next/head';


const PrivacyPolicyPage = () => {
  return (
    <Layout title="Privacy Policy - About Us Page Generator">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-black text-primary-blue mb-6 border-b pb-3">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          This Privacy Policy describes how [Your Company Name] collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-3">1. Information Collection</h2>
        <p className="text-gray-700">
          We collect non-personal data, such as your IP address and browser type, solely for analytics purposes to improve our free tool. We do not store any personal inputs from the generator form.
        </p>
        
        {/* ... (Add remaining policy content here) ... */}
      </div>
    </Layout>

  );
};

export default PrivacyPolicyPage;