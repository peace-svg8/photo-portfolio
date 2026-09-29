export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 w-full bg-[#111] text-center flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
          HAVE AN IMAGE <br className="hidden md:block"/>
          THAT NEEDS MORE?
        </h2>
        <p className="text-xl md:text-2xl text-muted mb-16 font-light">
          "Let's create something worth looking at."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://wa.me/2348168233259"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-foreground text-background font-medium tracking-widest text-sm hover:bg-muted transition-colors w-full sm:w-auto text-center"
          >
            WHATSAPP: 0816 823 3259 →
          </a>
          <a 
            href="mailto:nicholasamehin979@gmail.com"
            className="px-8 py-4 bg-transparent border border-[#27272A] text-foreground font-medium tracking-widest text-sm hover:border-muted transition-colors w-full sm:w-auto text-center"
          >
            EMAIL →
          </a>
        </div>
      </div>
    </section>
  );
}
