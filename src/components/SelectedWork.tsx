import { projects } from '../data/projects';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      
      <div className="mb-20 md:mb-32">
        <p className="text-xs tracking-[0.2em] text-muted mb-4 uppercase">SELECTED WORK</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
          A closer look at the edits.
        </h2>
        <p className="text-lg text-muted max-w-xl">
          A selection of portraits and photographs I've retouched, enhanced and refined.
        </p>
      </div>

      <div className="space-y-32 md:space-y-48">
        {projects.map((project, index) => {
          // Alternate layouts: even indices have text on left, odd have text on right
          const isEven = index % 2 === 0;
          
          return (
            <div key={project.number} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              
              {/* Text Content */}
              <div className="w-full lg:w-1/3 flex flex-col">
                <span className="text-4xl font-light text-muted mb-6">{project.number}</span>
                <h3 className="text-2xl tracking-wide font-medium mb-4 uppercase">{project.title}</h3>
                <p className="text-muted leading-relaxed mb-8">
                  {project.description}
                </p>
                
              </div>

              {/* Image / Slider Content */}
              <div className="w-full lg:w-2/3">
                <BeforeAfterSlider 
                  beforeImage={project.beforeImage} 
                  afterImage={project.afterImage} 
                />
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
