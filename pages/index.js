import Projects from "@/pages/projects";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Home function to render the main page
export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
