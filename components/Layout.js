import Head from 'next/head';
import Link from 'next/link';

// No need for useEffect/js imports with Tailwind

const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Free About Us Page Generator Tool",
        "description": "Generate a professional, SEO-optimized 'About Us' page HTML instantly. Boost trust (E-E-A-T) and get mobile-friendly code for any CMS.",
        "url": "https://about-us-page-generator-free.vercel.app/", // REPLACE with your actual URL
        "inLanguage": "en-US",
        "primaryImageOfPage": "https://yourdomain.com/images/generator-screenshot.png", // Recommended: Path to a screenshot or logo
        "publisher": {
            "@type": "Organization",
            "name": "About us page generator", // REPLACE with your company or personal brand name
            "logo": {
                "@type": "ImageObject",
                "url": "https://yourdomain.com/images/logo.png" // REPLACE with your logo URL
            }
        }
    };

const Layout = ({ children, title = "Free About Us Page HTML Generator" }) => {
    return (
        <>
            <Head>
                {/* 1. Primary Title Tag */}
                <title>{title}</title>
                
                {/* Standard Meta Tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="icon" href="/favicon.ico" />

                {/* 2. Optimized Meta Description */}
                <meta name="description" content="Generate a professional, long-form 'About Us' page HTML instantly. Boost trust, improve E-E-A-T, and get mobile-friendly code for WordPress, Blogger, and all CMS, " />
                
                {/* 4. Keywords Meta Tag (Optional) */}
                <meta name="keywords" content="about us page generator, free about us html, generate about us page, about us tool, seo about us page, wordpress about us generator ,About us page generator free, About Us Generator, About Us page Generator for blogger, about us generator free, about us generator online, About us page generator for your website, free about us page html, free html about us page generator, About Us Generator for wordpress, about us page generator free, about us page generator for google blogger website, about us generator for wordpress website, about us page generator, Free About Us Page Generator tool for blogger and wordpress, Free About Me Page Generator tool, How to generate about us page, Create about us page, Generate about us page for blogger, About me page generator for website, about us free page generator, about us page generator for blog, about us page generator tool for bloggar, create about us page for your website, free about us page template, free about us page generator, generate about us page, about us generator for blogger free, about us generator for blogger" />

                {/* 3. Open Graph / Social Sharing Tags */}
                <meta property="og:title" content="Free About Us Page Generator - Instant HTML Code" />
                <meta property="og:description" content="Generate a free, detailed, and SEO-optimized 'About Us' page in under 10 seconds. Perfect for boosting site trust (E-E-A-T)." />
                <meta property="og:url" content="https://about-us-page-generator-free.vercel.app/" /> 
                <meta property="og:type" content="website" />
                {/* Add og:image tag if you have a branded image for sharing */}
                <meta name="google-site-verification" content="1phf06Nj_1PXSC0_3SnJDEBdBnnljfKs4g_RVNTXC7A" />

                {/* 1. WebPage Schema Markup */}
                <script 
                    type="application/ld+json" 
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} 
                />

               

            </Head>
            {/* Header: Fixed top, primary color */}
            <header className="bg-primary-blue text-white p-4 shadow-lg fixed top-0 w-full z-10"> 
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-white text-2xl font-extrabold hover:text-gray-100 transition-colors">
                        ✨ About Us Generator
                    </Link>
                    <nav className="space-x-6">
                        <Link href="#article" className="text-white font-semibold opacity-80 hover:opacity-100 transition-opacity">Article</Link>
                        <Link href="#faq" className="text-white font-semibold opacity-80 hover:opacity-100 transition-opacity">FAQ</Link>
                        <Link href="/contact" className="text-white font-semibold opacity-80 hover:opacity-100 transition-opacity">Contact</Link>
                        
                    </nav>
                </div>
            </header>






            {/* Main Content Area: Padding for fixed header */}
            <main className="container mx-auto mt-24 px-4 sm:px-6 lg:px-8">
                {children}
            </main>

            

           <footer className="bg-gray-100 text-center p-6 mt-12 border-t border-gray-200">
                <div className="container mx-auto">
                    <div className="flex justify-center space-x-6 mb-3 text-sm font-medium">
                        <Link href="/about" className="text-gray-600 hover:text-primary-blue transition-colors">About Us</Link>
                        <Link href="/privacy-policy" className="text-gray-600 hover:text-primary-blue transition-colors">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="text-gray-600 hover:text-primary-blue transition-colors">Terms & Conditions</Link>
                        <Link href="/disclaimer" className="text-gray-600 hover:text-primary-blue transition-colors">Disclaimer</Link>
                    </div>
                    <p className="mb-1 text-gray-700 font-medium">&copy; {new Date().getFullYear()} About Us Generator. All rights reserved.</p>
                    <small className="text-gray-500">Built for speed and SEO frendly about us pages.</small>
                </div>
            </footer>
        </>
    );
};

export default Layout;
