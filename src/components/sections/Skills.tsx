const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    highlight: true,
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "Express"],
    highlight: false,
  },
  {
    category: "Testing",
    items: ["Cypress", "Vitest", "Playwright"],
    highlight: false,
  },
  {
    category: "Datenbanken",
    items: ["MySQL", "MariaDB", "MongoDB", "PostgreSQL"],
    highlight: false,
  },
  {
    category: "Tools & Infra",
    items: ["Git", "Docker", "Linux", "CI/CD"],
    highlight: false,
  },
  {
    category: "Architektur",
    items: ["Software Architecture", "Domain-Driven Design", "API Design"],
    highlight: false,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-zinc-100 mb-12">
        Skills &amp; Technologien
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ category, items, highlight }) => (
          <div
            key={category}
            className={`rounded-2xl p-6 border ${
              highlight
                ? "border-indigo-600 bg-indigo-950/40"
                : "border-zinc-800 bg-zinc-900/40"
            }`}
          >
            <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="text-zinc-300 flex items-center gap-2 before:content-['▸'] before:text-indigo-500"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
