export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <p className="text-sm font-mono text-zinc-500 mb-4 tracking-widest uppercase">
        Hallo, ich bin
      </p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-4">
        Dein Name
      </h1>
      <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-xl">
        Web-Entwickler · Full-Stack · Open-Source-Enthusiast
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
        >
          Meine Projekte
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-medium transition-colors"
        >
          Kontakt
        </a>
      </div>
    </section>
  );
}
