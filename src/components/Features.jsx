import { Brain, Workflow, Database, Shield } from 'lucide-react';

const features = [
  {
    title: 'NLP Ready',
    description:
      'Structure aligned with modern NLP engines so you can plug in Dialogflow, Rasa, or an LLM with minimal friction.',
    icon: Brain,
  },
  {
    title: 'Dialogue Management',
    description:
      'Clear separation of intents, entities, and flows to keep conversations coherent and context-aware.',
    icon: Workflow,
  },
  {
    title: 'Backend Integrations',
    description:
      'Connect to CRMs, databases, and third-party APIs to turn conversations into actions.',
    icon: Database,
  },
  {
    title: 'Secure by Design',
    description:
      'Follow best practices for auth and data handling when you connect real user data.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section className="bg-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Core building blocks
          </h2>
          <p className="mt-3 text-white/70">
            Everything you need to design, build, and iterate on a modern conversational experience.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
