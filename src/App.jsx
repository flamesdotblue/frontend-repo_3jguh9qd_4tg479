import Hero from './components/Hero';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import ChatDemo from './components/ChatDemo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1020] via-[#0B1020] to-[#0E1226] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B1020]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold">Convo App</div>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#chat" className="hover:text-white">Chat</a>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <ChatDemo />
        <Roadmap />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <p>
          Built with React + Tailwind. Swap in your NLP/LLM and backend integrations when you're ready.
        </p>
      </footer>
    </div>
  );
}

export default App;
