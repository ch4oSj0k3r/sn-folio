import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Impressum — Sven Nowitzky',
};

export default function ImpressumPage() {
    return (
        <>
            <main className="max-w-2xl mx-auto px-6 py-24">
                <Link
                    href="/"
                    className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-indigo-400 transition-colors mb-12"
                >
                    ← Zurück
                </Link>

                <h1 className="text-3xl font-bold text-zinc-100 mb-12">Impressum</h1>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        Angaben gemäß § 5 DDG
                    </h2>
                    <p className="text-zinc-300 leading-relaxed">
                        Vorname Nachname
                        <br />
                        Musterstraße 1<br />
                        12345 Musterstadt
                        <br />
                        Deutschland
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        Kontakt
                    </h2>
                    <p className="text-zinc-300 leading-relaxed">
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
                        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                    </h2>
                    <p className="text-zinc-300 leading-relaxed">
                        Vorname Nachname
                        <br />
                        Adresse wie oben
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        Haftung für Inhalte
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Als Diensteanbieter bin ich gemäß den allgemeinen Gesetzen für eigene
                        Inhalte auf diesen Seiten verantwortlich. Trotz sorgfältiger inhaltlicher
                        Kontrolle übernehme ich keine Gewähr für die Aktualität, Vollständigkeit
                        oder Richtigkeit der bereitgestellten Inhalte.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        Haftung für Links
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte
                        ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte keine
                        Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                        jeweilige Anbieter oder Betreiber verantwortlich.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        Urheberrecht
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem
                        deutschen Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen des
                        Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
