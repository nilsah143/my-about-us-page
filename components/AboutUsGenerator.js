'use client'
import React, { useState, useEffect } from 'react';

const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const AboutUsGenerator = () => {
    const [websiteName, setWebsiteName] = useState('');
    const [websiteType, setWebsiteType] = useState('');
    const [websiteSpeciality, setWebsiteSpeciality] = useState('');
    const [htmlOutput, setHtmlOutput] = useState('');
    const [isDarkTheme, setIsDarkTheme] = useState(false);



    // --- Define the HowTo Schema ---
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Generate an About Us Page HTML Code",
        "description": "Use our free tool to quickly generate a professional, SEO-optimized 'About Us' page for your website or blog.",
        "totalTime": "PT0M10S", // Total time is 10 seconds
        "tool": [
            { "@type": "Tool", "name": "Free About Us Page Generator" }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "name": "Enter Details",
                "text": "Fill in the required inputs: Website Name, Website Type, and Unique Speciality.",
                "url": "https://yourdomain.com/about-us-page-generator#form" // Link to the form section
            },
            {
                "@type": "HowToStep",
                "name": "Generate Code",
                "text": "Click the 'Generate Code' button to instantly process your inputs and create the HTML output.",
            },
            {
                "@type": "HowToStep",
                "name": "Copy and Publish",
                "text": "Use the 'Copy HTML Code' button and paste the professional, mobile-friendly code into your website's HTML editor or CMS block.",
            }
        ]
    };

    useEffect(() => {
        const theme = isDarkTheme ? '#212529' : '#f8f9fa';
        const textColor = isDarkTheme ? 'white' : 'black';
        const nameCap = capitalize(websiteName);

        if (nameCap && websiteType && websiteSpeciality) {
            
            // --- UPDATED AND EXPANDED HTML CONTENT HERE ---
            const generatedHtml = `
<div style="font-family: Arial, sans-serif; background-color:${theme}; padding:30px; color:${textColor}; border-radius: 12px; line-height: 1.6;">
    <h1 style="text-align: center; color:${textColor}; font-weight: 800; font-size: 2.5em; margin-bottom: 25px;">
        Discover <span id="W_Name1">${nameCap}</span>: Our Mission and Story
    </h1>
    <h2 style="color:${textColor}; margin-top: 25px; font-size: 1.8em; border-bottom: 2px solid ${textColor === 'white' ? '#4dabf7' : '#ccc'}; padding-bottom: 10px;">
        Our Mission
    </h2>
    <p style="font-size: 1.1em;">
        Welcome to <span id="W_Name2">${nameCap}</span>, a dedicated <span id="W_Type1">${websiteType}</span> platform founded with the vision of becoming the most trusted and comprehensive resource for **<span id="W_Spec">${websiteSpeciality}</span>**. Our mission is simple: to empower our community by providing high-quality, reliable, and accessible content and services. We believe that true success comes from delivering exceptional value and fostering a genuine connection with every visitor.
    </p>

    <h2 style="color:${textColor}; margin-top: 25px; font-size: 1.8em; border-bottom: 2px solid ${textColor === 'white' ? '#4dabf7' : '#ccc'}; padding-bottom: 10px;">
        Who We Are
    </h2>
    <p>
        We are a passionate team of experts and enthusiasts committed to excellence in the field of <span id="W_Type3">${websiteType}</span>. Our journey started with a simple observation: a need for clear, actionable, and specialized information focusing on ${websiteSpeciality}. From that insight, <span id="W_Name3">${nameCap}</span> was born. We strive for transparency and maintain rigorous standards to ensure the information we provide is always accurate and relevant.
    </p>
    
    <h2 style="color:${textColor}; margin-top: 25px; font-size: 1.8em; border-bottom: 2px solid ${textColor === 'white' ? '#4dabf7' : '#ccc'}; padding-bottom: 10px;">
        Our Commitment to You
    </h2>
    <p>
        Every day, we work to uphold the values of **integrity, innovation, and user-centric design**. We are not just a website; we are a community dedicated to helping you achieve your goals related to ${websiteSpeciality}. Your trust is our highest priority, and we are constantly evolving our platform based on your feedback.
    </p>
    <p>
        **Special Note:** This very text was generated using our incredibly helpful tool, the 
        <a href="https://yourdomain.com/about-us-page-generator" style="color: ${textColor === 'white' ? '#4dabf7' : 'blue'}; font-weight: bold; text-decoration: none;">About Us Page Generator</a>, 
        demonstrating our commitment to making high-quality web content accessible to everyone.
    </p>

    <p style="font-weight: bold; text-align: center; margin-top: 40px; font-size: 1.2em;">
        Thank you for visiting <span id="W_Name4">${nameCap}</span>. We look forward to being your partner in success!
    </p>
</div>`;
// --- END UPDATED HTML CONTENT ---

            setHtmlOutput(generatedHtml);
        } else {
            setHtmlOutput('');
        }
    }, [websiteName, websiteType, websiteSpeciality, isDarkTheme]);

    const handleSubmit = (e) => { e.preventDefault(); };
    
    const copyCode = () => {
        navigator.clipboard.writeText(htmlOutput);
        alert('Code Copied! You can now paste it into your website.');
    };

    return (
        <div>

    
                <script 
                    type="application/ld+json" 
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} 
                />
            

            {/* 1. Optimized Generator Form */}
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-xl shadow-2xl border-4 border-primary-blue/30 mb-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-black text-primary-blue">🚀 Instant About Us Page Generator</h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">Complete these **3 simple steps** to generate your SEO-ready HTML code.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Input 1: Website Name */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">1. Your Website Name</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent-green focus:border-accent-green text-lg transition duration-150" value={websiteName} onChange={(e) => setWebsiteName(e.target.value)} placeholder="e.g., Global Finance Pro" required />
                        <p className="mt-1 text-xs text-gray-500">Ex: Mearn tech, Tech Insights.</p>
                    </div>
                    {/* Input 2: Website Type */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">2. Website Type/Category</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent-green focus:border-accent-green text-lg transition duration-150" value={websiteType} onChange={(e) => setWebsiteType(e.target.value)} placeholder="e.g., Investment Blog, Educational Platform" required />
                        <p className="mt-1 text-xs text-gray-500">Ex: Educational, Financial News.</p>
                    </div>
                    {/* Input 3: Website Speciality */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">3. Your Unique Speciality</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-accent-green focus:border-accent-green text-lg transition duration-150" value={websiteSpeciality} onChange={(e) => setWebsiteSpeciality(e.target.value)} placeholder="e.g., SEO Consulting, Online Learning Tips" required />
                        <p className="mt-1 text-xs text-gray-500">Ex: Tech Tutorial, Learning Tips.</p>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <button type="submit" className={`px-12 py-4 text-xl font-bold rounded-full transition-all duration-300 shadow-xl ${
                        !websiteName || !websiteType || !websiteSpeciality
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        : 'bg-accent-green text-white hover:bg-primary-blue hover:scale-[1.02]'
                    }`} disabled={!websiteName || !websiteType || !websiteSpeciality}>
                        {htmlOutput ? 'Re-Generate Code' : '🚀 Generate Code'}
                    </button>
                </div>
            </form>

            {/* 2. Optimized Output Area */}
            {htmlOutput && (
                <div className="mt-12 p-6 bg-gray-50 rounded-xl shadow-2xl border-2 border-green-500/50">
                    <h2 className="text-3xl font-bold text-green-700 border-b pb-3 mb-6">✅ Code Ready for Use!</h2>

                    <div className="flex justify-between items-center mb-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="toggle toggle-success" 
                                checked={isDarkTheme} 
                                onChange={() => setIsDarkTheme(!isDarkTheme)}
                            />
                            <span className="font-semibold text-gray-700">Toggle {isDarkTheme ? 'Light' : 'Dark'} Theme Preview</span>
                        </label>
                        <button 
                            className="px-6 py-2 text-lg font-bold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-150" 
                            onClick={copyCode}>
                            📋 **Copy HTML Code**
                        </button>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-3">HTML Code Output</h4>
                    <div className="relative">
                        <textarea 
                            className="w-full p-4 border border-gray-400 rounded-lg resize-none font-mono bg-gray-100 text-gray-900 focus:outline-none h-96 text-sm" 
                            value={htmlOutput} 
                            readOnly 
                            style={{ whiteSpace: 'pre-wrap' }} 
                        />
                        <div className="absolute top-0 right-0 m-4 p-2 bg-gray-800 text-white rounded-md text-xs">Read-Only Code</div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-700 mt-8 border-t pt-4">Live Preview</h4>
                    <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-inner mt-4" dangerouslySetInnerHTML={{ __html: htmlOutput }} />
                </div>
            )}
        </div>
    );
};

export default AboutUsGenerator;