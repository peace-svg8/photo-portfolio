export default function Approach() {
  const steps = [
    {
      number: "01",
      title: "ANALYZE",
      description: "Understand the photograph and identify what needs improvement."
    },
    {
      number: "02",
      title: "RETOUCH",
      description: "Clean imperfections while maintaining natural texture and detail."
    },
    {
      number: "03",
      title: "REFINE",
      description: "Work on tones, colors, lighting and overall visual balance."
    },
    {
      number: "04",
      title: "FINALIZE",
      description: "Make sure the finished photograph feels polished without looking over-processed."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-[#27272A]">
      <p className="text-xs tracking-[0.2em] text-muted mb-16 uppercase">MY APPROACH</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Side - Statement */}
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            ENHANCE.<br/>
            DON'T ERASE.
          </h2>
          <p className="text-xl text-muted leading-relaxed max-w-md">
            "Good retouching should improve an image without taking away what makes it feel real."
          </p>
        </div>

        {/* Right Side - Steps */}
        <div className="flex flex-col space-y-16">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-12 md:pl-16 border-l border-[#27272A]">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-foreground"></div>
              
              <div className="flex flex-col">
                <span className="text-sm font-medium tracking-widest text-muted mb-2">
                  {step.number} — {step.title}
                </span>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
