import Layout from '../components/Layout';
import Head from 'next/head';

const PrivacyPolicyPage = () => {
  return (
    <Layout title="Privacy Policy - About Us Page Generator">
     <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
      
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 border-b pb-4">
        Disclaimer
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Effective Date: December 16, 2025
      </p>

      {/* --- Section 1: General Disclaimer --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. General Disclaimer</h2>
        <p className="text-gray-700 leading-relaxed">
          The information provided by About us page Generator ("we," "us" or "our") on <span className="font-medium text-gray-900">https://about-us-page-generator-free.vercel.app</span> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
        </p>
        <p className="text-red-600 font-bold leading-relaxed mt-4">
          UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
        </p>
      </section>

      {/* --- Section 2: External Links Disclaimer --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. External Links Disclaimer</h2>
        <p className="text-gray-700 leading-relaxed">
          The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
        </p>
      </section>

    </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;