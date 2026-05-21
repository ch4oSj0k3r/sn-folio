import FadeIn from '@/components/FadeIn';

const projects = [
    {
        title: 'Projekt Alpha',
        description:
            'Kurze Beschreibung des Projekts — was es macht, welche Technologien verwendet wurden und was besonders daran ist.',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
        href: '#',
    },
    {
        title: 'Projekt Beta',
        description:
            'Kurze Beschreibung des Projekts — was es macht, welche Technologien verwendet wurden und was besonders daran ist.',
        tags: ['React', 'Node.js', 'Docker'],
        href: '#',
    },
    {
        title: 'Projekt Gamma',
        description:
            'Kurze Beschreibung des Projekts — was es macht, welche Technologien verwendet wurden und was besonders daran ist.',
        tags: ['Tailwind CSS', 'REST API', 'Linux'],
        href: '#',
    },
];

export default function Projects() {
    return (
        <FadeIn>
            <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-zinc-100 mb-12">Projekte</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <a
                            key={project.title}
                            href={project.href}
                            className="group block rounded-xl border border-zinc-800 hover:border-indigo-500 bg-zinc-900 p-6 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-indigo-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
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
                    ))}
                </div>
            </section>
        </FadeIn>
    );
}
