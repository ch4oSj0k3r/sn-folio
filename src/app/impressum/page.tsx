import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Impressum — Sven Nowitzky',
};

export default function ImpressumPage() {
    return (
        <>
            <Navbar />
            <main className="max-w-2xl mx-auto px-6 py-24">
                <h1 className="text-3xl font-bold text-zinc-100 mb-12">Impressum</h1>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        Angaben gemäß § 5 TMG
                    </h2>
                    <p className="text-zinc-300 leading-relaxed">
                        Vorname Nachname
                        <br />
                        Musterstraße 1<br />
                        12345 Musterstadt
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
                        Haftung für Inhalte
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
                        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
                        TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        Haftung für Links
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
                        ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch
                        keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                        jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">
                        Urheberrecht
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                        unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                        Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                        bzw. Erstellers.
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
