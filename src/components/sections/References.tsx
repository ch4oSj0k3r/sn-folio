import FadeIn from '@/components/FadeIn';

const references = [
    {
        company: 'publicplan GmbH',
        items: [
            {
                title: 'OZG-Plattform für Land NRW',
                description:
                    'Entwicklung einer innovativen Plattform im Rahmen des Onlinezugangsgesetzes unter Berücksichtigung des EfA-Prinzips (Einer für Alle).',
                tags: ['React', 'Symfony'],
            },
            {
                title: 'Administrationsanwendung',
                description:
                    'React-basierte Administrationsanwendung zur Verwaltung und Konfiguration der OZG-Plattform.',
                tags: ['React'],
            },
            {
                title: 'Kubernetes Deployment',
                description:
                    'Konfiguration und Deployment der Plattform-Anwendung mittels Kubernetes.',
                tags: ['Kubernetes'],
            },
        ],
    },
    {
        company: 'Q:marketing AG',
        items: [
            {
                title: 'Planungstools Smart-Home & Brandmeldeanlagen',
                description:
                    'Entwicklung mehrerer interaktiver Planungstools für Smart-Home- und Brandmeldeanlagen auf Basis von React und externen APIs.',
                tags: ['React'],
            },
            {
                title: 'Beratungstool für Elektroinstallateure',
                description:
                    'Umsetzung eines webbasierten Beratungstools zur Produktauswahl und Konfiguration für Elektroinstallateure.',
                tags: ['React', 'Golang'],
            },
            {
                title: 'Digitaler Musterkoffer Türsprechanlagen',
                description:
                    'Entwicklung eines digitalen Musterkoffers für Türsprechanlagen mit interaktiver Produktpräsentation.',
                tags: ['React'],
            },
        ],
    },
    {
        company: 'albit GmbH',
        items: [
            {
                title: 'Kundenspezifische Webseiten',
                description:
                    'Umsetzung und Pflege kundenspezifischer Webseiten mithilfe des TYPO3-CMS im Baukastenprinzip.',
                tags: ['TYPO3'],
            },
            {
                title: 'Online-Rechner',
                description:
                    'Entwicklung verschiedener Online-Rechner, z.B. Gehaltsrechner, auf Basis von TYPO3 Flow.',
                tags: ['TYPO3 Flow'],
            },
            {
                title: 'Kundenbetreuung & Anpassungen',
                description:
                    'Betreuung von Kundenanfragen sowie Umsetzung individueller Anpassungen bestehender Webanwendungen.',
                tags: ['TYPO3'],
            },
        ],
    },
];

export default function References() {
    return (
        <FadeIn>
            <section id="references" className="py-24 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-zinc-100 mb-12">Referenzen</h2>
                <div className="space-y-12">
                    {references.map((group) => (
                        <div key={group.company}>
                            <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-6">
                                {group.company}
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.items.map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-6"
                                    >
                                        <h4 className="text-base font-semibold text-zinc-100 mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-4">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-mono px-2 py-1 rounded bg-zinc-800 text-indigo-400"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </FadeIn>
    );
}
