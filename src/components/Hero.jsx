import { Rocket, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <MessageSquare size={14} />
              Conversational AI Starter
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Build your Convo App faster
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              A clean, modern starter that showcases a chat UI, feature highlights, and a roadmap inspired by best practices in conversation design.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#chat"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                <Rocket size={18} />
                Try the Chat Demo
              </a>
              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                View Roadmap
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="mt-6 space-y-3">
                <div className="w-2/3 rounded-lg bg-white/10 p-3 text-sm text-white/80">
                  “Hey! Can you help me plan my launch?”
                </div>
                <div className="ml-auto w-5/6 rounded-lg bg-indigo-500/80 p-3 text-right text-sm text-white">
                  Absolutely. Let’s outline goals, design flows, and connect your data.
                </div>
                <div className="w-4/5 rounded-lg bg-white/10 p-3 text-sm text-white/80">
                  Nice. Can we preview a simple chat experience?
                </div>
              </div>
              <div className="mt-6 text-right">
                <a href="#chat" className="text-sm font-medium text-indigo-300 hover:text-indigo-200">
                  Open Chat Demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
