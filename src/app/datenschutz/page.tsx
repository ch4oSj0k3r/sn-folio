import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung — Sven Nowitzky',
};

export default function DatenschutzPage() {
    return (
        <>
            <main className="max-w-2xl mx-auto px-6 py-24">
                <Link
                    href="/#footer"
                    className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-indigo-400 transition-colors mb-12"
                >
                    ← Zurück
                </Link>

                <h1 className="text-3xl font-bold text-zinc-100 mb-12">Datenschutzerklärung</h1>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        1. Verantwortlicher
                    </h2>
                    <p className="text-zinc-300 leading-relaxed">
                        Sven Nowitzky
                        <br />
                        Friedrichstraße 25
                        <br />
                        45899 Gelsenkirchen
                        <br />
                        Deutschland
                        <br />
                        E-Mail:{' '}
                        <a
                            href="mailto:s.nowitzky@outlook.de"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            s.nowitzky@outlook.de
                        </a>
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        2. Hosting
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Diese Website wird bei Netlify, Inc. gehostet. Details zur Datenverarbeitung
                        durch Netlify finden Sie in Abschnitt 6.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        3. Cookies & Tracking
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Diese Website verwendet keine Cookies und setzt keine Tracking- oder
                        Analyse-Werkzeuge ein. Es werden keine personenbezogenen Daten zu
                        Werbezwecken verarbeitet.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        4. Externe Links
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Diese Website enthält Links zu externen Diensten (LinkedIn, XING). Beim
                        Anklicken dieser Links verlassen Sie diese Website. Für die
                        Datenverarbeitung auf den verlinkten Seiten sind ausschließlich deren
                        Betreiber verantwortlich.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        5. Ihre Rechte
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16
                        DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18
                        DSGVO) sowie Datenübertragbarkeit (Art. 20 DSGVO). Zudem haben Sie das
                        Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        6. Hosting durch Netlify
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Diese Website wird bei Netlify, Inc., 2325 3rd Street, Suite 296, San
                        Francisco, CA 94107, USA gehostet.
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm mt-3">
                        Beim Aufruf der Website verarbeitet Netlify technisch notwendige Daten,
                        insbesondere IP-Adressen sowie Server-Log-Dateien, um die Website
                        bereitzustellen und die Sicherheit und Stabilität des Dienstes zu
                        gewährleisten.
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm mt-3">
                        Weitere Informationen finden Sie in der Datenschutzerklärung von Netlify:{' '}
                        <a
                            href="https://www.netlify.com/privacy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            https://www.netlify.com/privacy/
                        </a>
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm mt-3">
                        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        7. Aktualität
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung
                        dieser Website kann eine Anpassung notwendig werden.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
