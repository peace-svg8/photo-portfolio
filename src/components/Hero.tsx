import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Typography Side */}
        <div className="flex flex-col z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm tracking-[0.2em] text-muted mb-6 uppercase"
          >
            PHOTO RETOUCHING
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            TURNING RAW <br className="hidden md:block"/>
            PHOTOGRAPHS <br className="hidden md:block"/>
            INTO REFINED <br className="hidden md:block"/>
            VISUALS.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted max-w-md mb-12 leading-relaxed"
          >
            Professional photo retouching, color correction and image enhancement with a focus on natural, polished results.
          </motion.p>
          
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href="#work"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-widest hover:text-muted transition-colors w-fit pb-1 border-b border-foreground hover:border-muted"
          >
            VIEW SELECTED WORK <span className="text-lg">→</span>
          </motion.a>
        </div>

        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[60vh] lg:h-[80vh] w-full"
        >
          <img 
            src="/Hero section.jpg" 
            alt="Retouching Portfolio Showcase" 
            className="absolute inset-0 w-full h-full object-cover rounded-sm"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
        
      </div>
    </section>
  );
}
