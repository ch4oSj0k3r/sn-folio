import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero.webp"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
        suppressHydrationWarning
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center bg-black/60 p-8 rounded-4xl">
        <p className="text-sm font-mono text-zinc-400 mb-4 tracking-widest uppercase">
          Hallo, ich bin
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
          Sven Nowitzky
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl">
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
            className="px-6 py-3 rounded-lg border border-zinc-400 hover:border-white text-zinc-300 hover:text-white font-medium transition-colors"
          >
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
}
