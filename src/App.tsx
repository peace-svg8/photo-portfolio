import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statement from './components/Statement';
import SelectedWork from './components/SelectedWork';

import Approach from './components/Approach';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F4F4F5] font-sans selection:bg-[#F4F4F5] selection:text-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <SelectedWork />

        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
