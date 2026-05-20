const experiences = [
  {
    role: "Senior Web-Entwickler",
    company: "Unternehmen GmbH",
    period: "2022 — heute",
    description:
      "Full-Stack-Entwicklung moderner Web-Applikationen. Verantwortlich für Architektur, Performance-Optimierung und Mentoring von Junior-Entwicklern.",
  },
  {
    role: "Web-Entwickler",
    company: "Agentur AG",
    period: "2019 — 2022",
    description:
      "Entwicklung von Kundenprojekten mit React und Node.js. Enge Zusammenarbeit mit Design- und Produktteams.",
  },
  {
    role: "Junior Developer",
    company: "Startup XYZ",
    period: "2017 — 2019",
    description:
      "Einstieg in die professionelle Softwareentwicklung. Frontend-fokussiert, erste Erfahrungen mit modernen JavaScript-Frameworks.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-zinc-100 mb-12">Erfahrung</h2>
      <div className="relative border-l border-zinc-800 pl-8 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.role} className="relative">
            <span className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-zinc-950" />
            <p className="text-xs font-mono text-zinc-500 mb-1">{exp.period}</p>
            <h3 className="text-lg font-semibold text-zinc-100">{exp.role}</h3>
            <p className="text-indigo-400 text-sm mb-2">{exp.company}</p>
            <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
