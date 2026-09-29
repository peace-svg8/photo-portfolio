export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-[#27272A]">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="w-full lg:w-1/2">
          <img 
            src="/About.jpg" 
            alt="Nicholas working" 
            className="w-full h-auto rounded-sm"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-10">
            BACK TO THE CRAFT.
          </h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed font-light mb-8 max-w-xl">
            "I started editing photographs years ago and recently found myself drawn back to the craft. I'm rebuilding my skills, experimenting with different techniques, and developing my own approach to creating polished, natural-looking images."
          </p>
          <div className="w-12 h-[1px] bg-foreground/30"></div>
        </div>

      </div>
    </section>
  );
}
