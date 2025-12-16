import Layout from '../components/Layout';
import Head from 'next/head';


const PrivacyPolicyPage = () => {
  return (
    <Layout title="Privacy Policy - About Us Page Generator">
      
    <div className="font-sans bg-gray-50 p-4 sm:p-6 text-black">
      {/* The original code had a <br>, but Tailwind often manages spacing better with margin/padding utilities. 
          I'll keep the text content as-is. */}
      
      {/* Equivalent to: font-family: Sans-serif; color: black; */}
      <h2 className="font-sans text-black text-2xl font-bold">About Us!</h2>
      
      {/* Equivalent to: font-family: Sans-serif; text-align: center; */}
      <h2 className="font-sans text-center text-xl sm:text-2xl mt-4">
        Welcome To <span id="W_Name1">About us page generator</span>
      </h2>
      
      <p className="mt-4 text-base leading-relaxed">
        <span id="W_Name2">About us page generator</span> is a Professional{' '}
        <span id="W_Type1">about us page generator</span> Platform. Here we will
        only provide you with interesting content that you will enjoy very much.
        We are committed to providing you the best of{' '}
        <span id="W_Type2">about us page generator</span>, with a focus on
        reliability and <span id="W_Spec">about us page generator</span>. we
        strive to turn our passion for <span id="W_Type3">about us page generator</span>{' '}
        into a thriving website. We hope you enjoy our{' '}
        <span id="W_Type4">about us page generator</span> as much as we enjoy
        giving them to you.
      </p>
      
      <p className="mt-4 text-base leading-relaxed">
        I will keep on posting such valuable and knowledgeable information on my
        Website for all of you. Your love and support matters a lot.
      </p>
      
      {/* Equivalent to: font-weight: bold; text-align: center; */}
      <p className="font-bold text-center mt-6">
        Thank you For Visiting Our Site
        <br />
        <br />
        {/* Equivalent to: color: blue; font-size: 16px; font-weight: bold; text-align: center; */}
        <span className="text-blue-600 text-base font-bold text-center block mt-1">
          Have a great day!
        </span>
      </p>
      
    </div>



    </Layout>

  );
};

export default PrivacyPolicyPage;