const experiences = [
    {
        role: "Senior Frontend-Developer",
        company: "publicplan GmbH , Düsseldorf",
        period: "01/2026 - heute",
    },
    {
        role: "Frontend-Developer",
        company: "publicplan GmbH , Düsseldorf",
        period: "02/2023 - 12/2025",
        description: [
            "Entwicklung einer Web-Anwendung im eGovernment-Umfeld",
            "Umsetzung modernes Frontend mit React",
            "Umsetzung Backend mit Symfony",
            "DevOps-Tätigkeiten: Pipelines & Deployments",
            "Direkter Ansprechpartner / Vertretung der Product-Owner"
        ]
    },
    {
        role: "Fullstack-Developer",
        company: "Q:marketing AG, Mülheim a.d. Ruhr",
        period: "11/2017 - 01/2023",
        description: [
            "Entwicklung von Anwendungen im Smart-Home-Umfeld",
            "Frontend-Entwicklung mit React, Backend-Entwicklung mit PHP und Golang",
            "DevOps-Tätigkeiten: Automatisierung & Deployments mit Ansible",
        ]
    },
    {
        role: "Fullstack-Developer",
        company: "albit GmbH, Mülheim a.d. Ruhr",
        period: "07/2015 - 10/2017",
        description: [
            "Betreuung und Weiterentwicklung von Websites auf Basis von TYPO3 CMS",
            "Entwicklung individueller Web-Anwendungen mit TYPO3 Flow für Kunden aus dem Versicherungsbereich",
        ]
    },
    {
        role: "Auszubildender Fachinformatiker für Anwendungsentwicklung",
        company: "albit GmbH, Mülheim a.d. Ruhr",
        period: "08/2012 — 07/2015",
        description: [
            "Schwerpunkte: Webdesign, Webentwicklung & Entwicklung von Webanwendungen",
        ]
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-100 mb-12">Erfahrung</h2>
            <div className="relative border-l border-zinc-800 pl-8 space-y-10">
                {experiences.map((exp) => (
                    <div key={`${exp.role}-${exp.company}`} className="relative">
                        <span
                            className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-zinc-950"/>
                        <p className="text-xs font-mono text-zinc-500 mb-1">{exp.period}</p>
                        <h3 className="text-lg font-semibold text-zinc-100">{exp.role}</h3>
                        <p className="text-indigo-400 text-sm mb-2">{exp.company}</p>
                        {Array.isArray(exp.description) ? (
                            <ul className="list-disc list-inside text-zinc-400 leading-relaxed whitespace-pre-line">
                                {exp.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        ) : (
                            exp.description
                        )}
                        {/*<p className="text-zinc-400 leading-relaxed whitespace-pre-line">{exp.description}</p>*/}
                    </div>
                ))}
            </div>
        </section>
    );
}
