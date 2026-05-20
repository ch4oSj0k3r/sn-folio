const badges = [
  { label: "iSAQB CPSA-F", description: "Certified Professional for Software Architecture" },
  { label: "E-Government", description: "Erfahrung im Bereich digitale Verwaltungslösungen" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-zinc-100 mb-8">Über mich</h2>
      <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
        <p>
          Ich bin ein leidenschaftlicher Web-Entwickler mit Fokus auf moderne,
          performante und wartbare Web-Applikationen. Mit mehreren Jahren
          Erfahrung in der Softwareentwicklung bringe ich Ideen zum Leben —
          von der Konzeption bis zum Deployment.
        </p>
        <p>
          Wenn ich nicht code, beschäftige ich mich mit Open-Source-Projekten
          oder lerne neue Technologien kennen.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 mt-8">
        {badges.map(({ label, description }) => (
          <span
            key={label}
            title={description}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-700 bg-indigo-950/60 text-indigo-300 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
