// Import the Navbar and global styles
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css"; // Optional: Global CSS styles

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar /> {/* This will be on every page */}
      <main>
        <Component {...pageProps} /> {/* This renders the current page */}
      </main>
      <Footer />
    </div>
  );
}
