import FadeIn from '@/components/FadeIn';

const projects = [
    {
        title: 'HiH Planer',
        description:
            'Webbasiertes Planungstool für Termine und Mitarbeiter. Rollenbasierte Zugangskontrolle für Arbeitgeber und Mitarbeiter, Kundenstamm, Urlaubsverwaltung und Kalenderansicht. Entwickelt nach Clean Architecture mit umfassender Testabdeckung.',
        tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Docker', 'Playwright'],
        href: 'https://github.com/ch4oSj0k3r/hihPlaner',
        wip: false,
    },
    {
        title: 'Nordstern WebApp',
        description:
            'Vereins-App für eine Dart-Mannschaft. Verwaltung von Saisons, Spielen und Tabellen sowie detaillierte Wurfstatistiken für jeden Spieler.',
        tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL'],
        href: 'https://github.com/ch4oSj0k3r/nordsternApp',
        wip: false,
    },
    {
        title: 'Budgetplaner',
        description:
            'Persönliche Finanz-App zur Verwaltung von Einnahmen, Ausgaben und Budgets. Übersichtliche Auswertungen und Kategorisierung für den monatlichen Überblick.',
        tags: ['Next.js', 'TypeScript'],
        href: null,
        wip: true,
    },
];

export default function Projects() {
    return (
        <FadeIn>
            <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-zinc-100 mb-12">Projekte</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) =>
                        project.wip ? (
                            <div
                                key={project.title}
                                className="relative rounded-xl border border-dashed border-zinc-700 bg-zinc-900/50 p-6"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-lg font-semibold text-zinc-400">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-900/50 text-indigo-400 border border-indigo-800">
                                        In Entwicklung
                                    </span>
                                </div>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        ) : (
                            <a
                                key={project.title}
                                href={project.href!}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col rounded-xl border border-zinc-800 hover:border-indigo-500 bg-zinc-900 p-6 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 text-sm mb-4 leading-relaxed flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-mono px-2 py-1 rounded bg-zinc-800 text-indigo-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        )
                    )}
                </div>
            </section>
        </FadeIn>
    );
}
