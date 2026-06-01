import FadeIn from '@/components/FadeIn';

const badges = [
    { label: 'iSAQB CPSA-F', description: 'Certified Professional for Software Architecture' },
    { label: 'E-Government', description: 'Erfahrung im Bereich digitale Verwaltungslösungen' },
];

function calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    if (!hasHadBirthdayThisYear) age--;
    return age;
}

const age = calculateAge(new Date(1991, 10, 19));

export default function About() {
    return (
        <FadeIn>
            <section id="about" className="py-24 px-6 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-zinc-100 mb-8">Über mich</h2>
                <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
                    <p>
                        Hi, ich bin Web-Entwickler mit Fokus auf JavaScript &amp; TypeScript und
                        entwickle moderne Webanwendungen mit React und Next.js. Dabei bewege ich
                        mich gerne zwischen Frontend und Backend und arbeite an durchdachten,
                        performanten Lösungen – von der Benutzeroberfläche bis hin zu APIs und
                        Datenbanken.
                    </p>
                    <p>
                        Neben dem klassischen Web-Development bringe ich auch Erfahrung mit PHP und
                        Symfony mit und beschäftige mich intensiv mit DevOps-Themen wie Docker,
                        Kubernetes sowie CI/CD mit GitLab und GitHub.
                    </p>
                    <p>
                        Privat bin ich {age} Jahre alt, verheiratet und Vater von zwei kleinen
                        Söhnen. Einen großen Teil meiner Freizeit verbringe ich mit meiner Familie.
                        Darüber hinaus spiele ich aktiv Dart in einer Ligamannschaft und verfolge
                        leidenschaftlich verschiedene Sportarten – insbesondere Fußball, Formel 1
                        und Football. Für eine Runde Gaming zwischendurch bin ich natürlich
                        ebenfalls immer zu haben.
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
        </FadeIn>
    );
}
