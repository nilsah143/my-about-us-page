// pages/_app.js


// Ensure this path points correctly to your CSS file where @tailwind directives are placed
import '../styles/globals.css'; 
// OR import '../styles/main.css'; // depending on your setup

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}