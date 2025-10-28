const steps = [
  {
    step: '1. Define Goals',
    details:
      'Pick 2–3 high-value tasks (e.g., reset password, check order status) and define your audience & channels.',
  },
  {
    step: '2. Design Flows',
    details:
      'Map intents, entities, prompts, and fallbacks. Set the tone and personality of your assistant.',
  },
  {
    step: '3. Train the Model',
    details:
      'Choose a platform (Rasa, Dialogflow, LLM). Add training phrases and set up dialogue logic.',
  },
  {
    step: '4. Integrate & Build UI',
    details:
      'Connect to backends and implement a clean, accessible chat interface on web or mobile.',
  },
  {
    step: '5. Test & Iterate',
    details:
      'Ship to beta, track fallbacks and CSAT, then continuously refine with real-world data.',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Roadmap to launch
          </h2>
          <p className="mt-3 text-white/70">
            A practical path from idea to a production-ready conversational assistant.
          </p>
        </div>
        <ol className="mt-12 space-y-4">
          {steps.map((s, i) => (
            <li
              key={s.step}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 font-semibold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{s.step}</h3>
                  <p className="mt-1 text-sm text-white/70">{s.details}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
