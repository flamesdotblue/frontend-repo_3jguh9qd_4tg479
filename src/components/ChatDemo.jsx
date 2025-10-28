import { useMemo, useRef, useState } from 'react';
import { Send, User, Bot } from 'lucide-react';

const suggestions = [
  'Help me reset my password',
  'Check order status',
  'What can you do?',
  'Book a meeting tomorrow at 3pm',
];

export default function ChatDemo() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! I'm your conversational assistant. Ask me about goals, flows, or try a quick task from the suggestions below.",
    },
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  const handleSend = (text) => {
    const content = (text ?? input).trim();
    if (!content) return;

    const userMsg = { role: 'user', content };
    setMessages((m) => [...m, userMsg]);
    setInput('');

    // Simple, local rule-based response to simulate a bot.
    const reply = craftReply(content);
    const botMsg = { role: 'assistant', content: reply };
    // Simulate latency
    setTimeout(() => setMessages((m) => [...m, botMsg]), 450);
  };

  const craftReply = (text) => {
    const t = text.toLowerCase();
    if (t.includes('password'))
      return 'To reset your password, confirm your email. I can send a secure link right away.';
    if (t.includes('order'))
      return 'Sure — share your order ID and I’ll fetch the latest status from the system.';
    if (t.includes('meeting') || t.includes('book'))
      return 'I can create a calendar event. What date, time, and duration would you like?';
    if (t.includes('what can you do') || t.includes('help'))
      return 'I handle quick support questions, status lookups, and scheduling. Want to see the roadmap below?';
    return "Got it. I’ll route that through the appropriate flow. Provide any details I should know.";
  };

  const avatar = useMemo(
    () => ({
      user: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/80 text-white">
          <User size={16} />
        </div>
      ),
      assistant: (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
          <Bot size={16} />
        </div>
      ),
    }),
    []
  );

  return (
    <section id="chat">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Chat demo
            </h2>
            <p className="mt-3 max-w-prose text-white/70">
              This lightweight demo mimics an assistant without a backend. Swap in your real NLP/LLM API later.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSend(s)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 hover:bg-white/10"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div
              ref={listRef}
              className="h-80 overflow-y-auto rounded-lg border border-white/10 bg-black/20 p-4"
            >
              <ul className="space-y-4">
                {messages.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {avatar[m.role]}
                    <div
                      className={
                        m.role === 'assistant'
                          ? 'max-w-[80%] rounded-lg bg-white/10 p-3 text-sm text-white/90'
                          : 'ml-auto max-w-[80%] rounded-lg bg-indigo-500/80 p-3 text-right text-sm text-white'
                      }
                    >
                      {m.content}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="mt-4 flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
              >
                <Send size={16} />
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
