export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-[#27272A] flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-muted tracking-widest">
      
      <div>
        <span className="font-medium text-foreground">NICHOLAS <span className="text-muted font-light">/ PEACE</span></span>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs">
        <a href="#work" className="hover:text-foreground transition-colors">WORK</a>
        <a href="#about" className="hover:text-foreground transition-colors">ABOUT</a>
        <a href="#contact" className="hover:text-foreground transition-colors">CONTACT</a>
        <a href="https://wa.me/2348168233259" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">WHATSAPP</a>
        <a href="mailto:nicholasamehin979@gmail.com" className="hover:text-foreground transition-colors">EMAIL</a>
      </div>

      <div className="text-xs">
        © 2026 Nicholas Peace. All rights reserved.
      </div>
      
    </footer>
  );
}
