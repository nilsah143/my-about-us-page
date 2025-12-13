
import Layout from '../components/Layout';
import AboutUsGenerator from '../components/AboutUsGenerator';
import FaqSection from '../components/FaqSection';
import { nichePages } from '../lib/nicheData';


// This function tells Next.js which paths to pre-render
export async function getStaticPaths() {
  const paths = nichePages.map((niche) => ({
    params: { niche: niche.slug },
  }));
  return { paths, fallback: false };
}

// This function fetches data for the specific page
export async function getStaticProps({ params }) {
  const nicheData = nichePages.find(n => n.slug === params.niche);
  return { props: { nicheData } };
}

const NicheGeneratorPage = ({ nicheData }) => {
  const pageTitle = `About Us Page Generator ${nicheData.description} - FREE Tool`;
  const pageDescription = `Instantly generate a custom, SEO-friendly 'About Us' page for your ${nicheData.title} website focusing on ${nicheData.specialty}. 100% free HTML code.`;
  
  // NOTE: You can pass nicheData to AboutUsGenerator 
  // to pre-fill the 'websiteType' or 'websiteSpeciality' fields if desired.

  return (
    <Layout title={pageTitle} description={pageDescription}>
      
      <div className="text-center mb-8 pt-4">
        <h1 className="text-5xl font-extrabold text-accent-green">
          {nicheData.title} About Us Page Generator
        </h1>
        <p className="mt-3 text-xl text-gray-600">
          The only tool you need to create a trust-building "About Us" page for your <span className="font-semibold">{nicheData.title}</span> site, specializing in {nicheData.specialty}.
        </p>
      </div>
      
      {/* Re-use the core component */}
      <AboutUsGenerator 
        // Example of pre-filling:
        initialWebsiteType={nicheData.title} 
        initialWebsiteSpeciality={nicheData.specialty}
      />

      {/* Re-use supporting sections */}
      <div id="article" className="mt-12 p-8 bg-white rounded-xl shadow-2xl border border-gray-200">
        {/* ... (Include your rewritten SEO Article content here, customizing the title/intro if possible) ... */}
        <p className="text-xl text-gray-700 leading-relaxed">
          This content is optimized specifically for generating high-trust pages for **{nicheData.title}** businesses.
        </p>
      </div>
      
      <FaqSection />
      
    </Layout>
  );
};

export default NicheGeneratorPage;