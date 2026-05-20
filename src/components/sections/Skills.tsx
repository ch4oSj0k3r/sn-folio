const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "REST APIs", "PostgreSQL", "Docker"] },
  { category: "Tools", items: ["Git", "Linux", "CI/CD", "Raspberry Pi"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-zinc-100 mb-12">
        Skills &amp; Technologien
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map(({ category, items }) => (
          <div key={category}>
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
