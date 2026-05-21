import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung — Sven Nowitzky',
};

export default function DatenschutzPage() {
    return (
        <>
            <Navbar />
            <main className="max-w-2xl mx-auto px-6 py-24">
                <h1 className="text-3xl font-bold text-zinc-100 mb-12">Datenschutzerklärung</h1>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        1. Verantwortlicher
                    </h2>
                    <p className="text-zinc-300 leading-relaxed">
                        Vorname Nachname
                        <br />
                        Musterstraße 1<br />
                        12345 Musterstadt
                        <br />
                        Deutschland
                        <br />
                        E-Mail:{' '}
                        <a
                            href="mailto:mail@example.com"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            mail@example.com
                        </a>
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        2. Hosting & Server-Logs
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Diese Website wird auf einem eigenen Server gehostet. Der Hosting-Anbieter
                        erhebt automatisch sogenannte Server-Log-Dateien, die Ihr Browser
                        übermittelt. Dazu gehören insbesondere IP-Adresse, Datum und Uhrzeit des
                        Zugriffs, aufgerufene Seiten, Browsertyp sowie das verwendete
                        Betriebssystem.
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm mt-3">
                        Die Verarbeitung dieser Daten erfolgt zur Gewährleistung eines sicheren und
                        stabilen Betriebs der Website. Eine Zusammenführung dieser Daten mit anderen
                        Datenquellen erfolgt nicht.
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm mt-3">
                        Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
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

                <section>
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        6. Aktualität
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
