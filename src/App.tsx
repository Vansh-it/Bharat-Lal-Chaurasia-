import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { LawQuotes } from "./components/sections/LawQuotes";
import { MotivationalQuotes } from "./components/sections/MotivationalQuotes";
import { Stats } from "./components/sections/Stats";
import { Testimonials } from "./components/sections/Testimonials";
import { WorkingArea } from "./components/sections/WorkingArea";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <LawQuotes />
        <MotivationalQuotes />
        <Stats />
        <Testimonials />
        <WorkingArea />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
