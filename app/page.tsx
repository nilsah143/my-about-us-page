
import Head from 'next/head';
import Layout from '../components/Layout';
import AboutUsGenerator from '../components/AboutUsGenerator';
import FaqSection from '../components/FaqSection'
import { nichePages } from '../lib/nicheData';
import Link from 'next/link';
export default function HomePage() {
  return (
    
    <Layout>
      {/* ... Head component with proper SEO tags */}

      <AboutUsGenerator />
        {/* 2. NEW SECTION: Niche Dynamic Page Navigation Grid */}
      {/* ---------------------------------------------------- */}
      <div id="niche-tools" className="mt-16 p-8 bg-gray-50 rounded-xl shadow-2xl border border-primary-blue/30">
        <h2 className="text-3xl font-black text-primary-blue mb-6 text-center border-b pb-3">
          Specialized About Us Generators by Niche
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Find the perfect, SEO-optimized template tailored specifically for your industry.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {nichePages.map((niche) => (
            <Link key={niche.slug} 
              href={`/${niche.slug}`} // <-- Dynamic link path
              className="block p-4 bg-white border border-gray-200 rounded-lg text-center font-semibold text-gray-800 transition duration-200 hover:bg-accent-green hover:text-white hover:shadow-lg"
            >
              <span className="text-xl">🛠️</span> 
              <span className="block mt-1">{niche.title} Generator</span>
              <small className="block font-normal opacity-80 mt-1">({niche.specialty.split('&')[0]})</small>
            </Link>
          ))}
        </div>
      </div>


      {/* --- SEO Article Section --- */}
<div id="article" className="mt-12 p-8 bg-white rounded-xl shadow-2xl border border-gray-200">
        <h2 className="text-4xl font-black text-accent-green mb-6 border-b-4 border-primary-blue/50 pb-3">
            Why Every Website Needs an SEO-Optimized "About Us" Page
        </h2>
        
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The About Us page is often the most critical, yet most overlooked, element of a successful website. It’s your chance to move beyond products and services and establish a deep connection, building the trust and credibility necessary to convert a visitor into a long-term customer.
        </p>

        {/* SECTION 1: What is an About Us Page? */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">
                Defining the Purpose: What Exactly is the "About Us" Page?
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Fundamentally, the "About Us" page is a narrative—a concise story that gives customers a clear understanding of the individuals behind the business and the core mission that drives their work. It goes far beyond a simple corporate statement. This page often includes:
            </p>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-gray-700">
                <li>Business History: A brief timeline of how the company started and its milestones.</li>
                <li>Team Introduction: Photographs and short bios of key personnel to humanize the brand.</li>
                <li>Core Values: Insight into the intentions, attitudes, and cultural aspects that guide the business.</li>
                <li>Contact & Location: Clear details on how and where to reach you.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
                In essence, this page reveals the purpose and personality of the business. It’s the second place visitors typically click, right after the homepage, seeking validation and introductory content—the who, what, when, and how of your operation.
            </p>
        </div>

        {/* SECTION 2: Importance and Benefits (SEO Focus) */}
        <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">
                The Invaluable Benefits: Why Trust Signals Trump Keywords
            </h3>
            <p className="text-gray-700 leading-relaxed">
                Many businesses focus exclusively on improving service or product pages for SEO (Search Engine Optimization), often neglecting the "About Us" section because it isn't traditionally keyword-heavy. This is a missed opportunity. While it may not rank for product terms, its content is invaluable for user experience and indirectly impacts your overall SEO score by boosting E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness).
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="p-4 border-l-4 border-accent-green bg-green-50 rounded-md shadow-sm">
                    <h4 className="font-semibold text-lg text-green-800">1. Boosts Trust and Conversion</h4>
                    <p className="text-sm text-gray-700 mt-1">Answers the fundamental question: "Do I want to do business with these people?" It turns anonymous visitors into potential leads or customers.</p>
                </div>
                <div className="p-4 border-l-4 border-accent-green bg-green-50 rounded-md shadow-sm">
                    <h4 className="font-semibold text-lg text-green-800">2. Enhances E-E-A-T</h4>
                    <p className="text-sm text-gray-700 mt-1">By detailing your team's expertise and history, you prove your authority to Google, which is crucial for high rankings, especially in YMYL topics.</p>
                </div>
                <div className="p-4 border-l-4 border-accent-green bg-green-50 rounded-md shadow-sm">
                    <h4 className="font-semibold text-lg text-green-800">3. Increases Engagement</h4>
                    <p className="text-sm text-gray-700 mt-1">A compelling narrative engages users. An ignored page is a wasted page. Maximize its power beyond just a simple technology statement.</p>
                </div>
            </div>
        </div>

        {/* SECTION 3: How to Use the Generator Tool */}
        <div className="bg-primary-blue/10 p-8 rounded-xl shadow-lg border border-primary-blue/30 mt-10">
            <h3 className="text-3xl font-extrabold text-primary-blue mb-4">
                Generate Your Custom, SEO-Friendly "About Us" Page Instantly
            </h3>
            <p className="text-gray-800 leading-relaxed mb-6">
                We understand that crafting the initial HTML for your "About Us" page can be time-consuming. That's why we built this **free About Us Generator Tool**. We empower you to quickly generate a clean, customizable HTML foundation in just seconds, allowing you to focus on the high-value content—your unique story.
            </p>
            
            <h4 className="text-xl font-bold text-gray-800 mb-3">Steps for Generating Your Code:</h4>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
                <li>Fill in the Three Inputs:Enter your Website Name, Website Type, and Unique Speciality in the columns above.</li>
                <li>Click 'Generate Code': Our tool processes the information instantly to create the customized HTML.</li>
                <li>Copy the HTML: Use the high-visibility "Copy HTML Code" button to grab the code.</li>
                <li>Paste and Publish:Paste the code into the HTML editor or Custom HTML block of your CMS (WordPress, Blogger, etc.).</li>
            </ol>
            
            <p className="text-gray-800 leading-relaxed mt-6 font-semibold">
                Mobile Friendly: Whether you are on a computer, LAPTOP, or mobile phone, our generator tool is fully responsive and ensures you can generate and copy the code easily from any device.
            </p>
        </div>

        {/* SECTION 4: Conclusion and Call to Action */}
        <div className="mt-10 text-center border-t pt-6">
            <p className="text-2xl font-bold text-accent-green">
                Stop overlooking one of your website's most powerful pages.
            </p>
            <p className="text-lg text-gray-700 mt-2">
                Use our tool today to start building trust and authority. If you have any doubts or problems with the tool, please feel free to contact us.
            </p>
        </div>

      </div>
      {/* --- SEO Article Section ---end */}

      



      {/* --- FAQ Section --- */}
      <FaqSection />
    </Layout>
  );
}