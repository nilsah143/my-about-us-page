'use client'
import React, { useState } from 'react';
import Head from 'next/head';

const faqData = [
    { 
        question: "Is this About Us Page Generator truly free?", 
        answer: "Yes, our tool is **100% free forever**. You can generate unlimited 'About Us' pages without registration, sign-up, or hidden costs. We are committed to providing value to small businesses and bloggers." 
    },
    { 
        question: "Is the generated code compatible with WordPress, Blogger, and other CMS platforms?", 
        answer: "**Absolutely.** The output is clean, standard HTML5 code. You can paste it directly into the Custom HTML block (WordPress/Gutenberg), the HTML editor (Blogger), or any standard web builder that allows custom code insertion." 
    },
    { 
        question: "How do I make the generated page fully SEO-optimized?", 
        answer: "The code provides a perfect foundation. To truly optimize it, ensure you replace the placeholder text with **unique, detailed content** about your company's mission, team history, and founder experience. Use relevant long-tail keywords naturally within your story to boost E-E-A-T." 
    },
    { 
        question: "Can I use a different font or color scheme in the final HTML code?", 
        answer: "Yes! The generated HTML uses inline CSS for theme options (Light/Dark). You can easily modify the `font-family`, `background-color`, and `color` values within the `<div style=\"...\">` tag to match your website's existing stylesheet and branding." 
    },
    { 
        question: "Why is an 'About Us' page important for E-E-A-T?", 
        answer: "The About Us page is critical for establishing **Trust** and **Expertise**. Google uses E-E-A-T signals (Experience, Expertise, Authoritativeness, and Trustworthiness) to rank content. Showing the *who* and *why* behind your business proves you are a legitimate and knowledgeable source in your niche." 
    },
    { 
        question: "How long does it take to generate the 'About Us' page code?", 
        answer: "The generation process is **instantaneous**. Once you fill in the three required fields (Name, Type, and Speciality), the HTML code appears instantly in the output box. The whole process takes less than 10 seconds." 
    },
    { 
        question: "What is the best way to integrate the code into my WordPress site?", 
        answer: "The simplest method is to create a new page, select the **Custom HTML** block in the Gutenberg editor, and paste the code directly into that block. Alternatively, you can use a Shortcode or Page Builder widget that supports raw HTML input." 
    },
    { 
        question: "Does the generated code support mobile responsiveness?", 
        answer: "Yes, the HTML output is built using basic, flexible HTML elements and CSS properties that ensure the text and structure reflow correctly on all screen sizes, making it **fully mobile-friendly** by design." 
    },
];

const FaqItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-300 rounded-lg mb-3 shadow-md overflow-hidden">
            <h3 
                className={`text-lg font-semibold cursor-pointer p-4 transition duration-150 flex justify-between items-center ${isOpen ? 'bg-primary-blue text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`} 
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <span className={`transform transition-transform duration-300 text-xl ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {isOpen ? '▲' : '▼'}
                </span>
            </h3>
            {isOpen && (
                <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }} />
                </div>
            )}
        </div>
    );
};

const FaqSection = () => {
    // Construct the JSON-LD object dynamically for Google Rich Snippets
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <div id="faq" className="mt-12">
            <Head>
                {/* Inject the enhanced JSON-LD Schema Markup */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </Head>
            
            <h2 className="text-3xl font-bold text-info border-b-2 border-gray-300 pb-3 mb-6">❓ Essential FAQs & Integration Tips</h2>
            
            <div>
                {faqData.map((item, index) => (
                    <FaqItem key={index} question={item.question} answer={item.answer} index={index} />
                ))}
            </div>
        </div>
    );
};

export default FaqSection;