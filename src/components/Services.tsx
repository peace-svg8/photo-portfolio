import { ArrowRight } from 'lucide-react';

const services = [
  {
    number: "01",
    title: "PORTRAIT RETOUCHING",
    description: "Natural skin cleanup, texture preservation and facial refinement.",
  },
  {
    number: "02",
    title: "COLOR CORRECTION",
    description: "Exposure, contrast, white balance and color refinement.",
  },
  {
    number: "03",
    title: "IMAGE ENHANCEMENT",
    description: "Improving lighting, detail, tonal balance and overall visual quality.",
  },
  {
    number: "04",
    title: "CREATIVE EDITING",
    description: "Advanced Photoshop manipulation and creative image transformation.",
  }
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-[#27272A]">
      <p className="text-xs tracking-[0.2em] text-muted mb-16 uppercase">WHAT I DO</p>
      
      <div className="flex flex-col">
        {services.map((service) => (
          <div 
            key={service.number} 
            className="group flex flex-col md:flex-row md:items-center py-10 md:py-12 border-b border-[#27272A] last:border-b-0 hover:bg-[#111] transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12 cursor-pointer"
          >
            <div className="text-muted text-sm font-medium w-16 mb-4 md:mb-0 transition-colors group-hover:text-foreground">
              {service.number}
            </div>
            
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight md:w-1/3 mb-4 md:mb-0 transition-transform duration-500 group-hover:translate-x-2">
              {service.title}
            </h3>
            
            <p className="text-muted text-lg flex-1 md:pr-12 transition-colors group-hover:text-gray-300">
              {service.description}
            </p>
            
            <div className="hidden md:flex opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-white">
              <ArrowRight size={28} strokeWidth={1} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
