import { motion } from "motion/react";
import { ReactNode } from "react";

// Glass container with reflection
export const GlassCont = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={`relative group ${className}`}
  >
    <div className="absolute inset-0 bg-secondary/5 rounded-[2rem] blur-3xl group-hover:bg-primary/10 transition-colors duration-1000" />
    <div className="relative glass p-8 rounded-[2rem] border border-white/10 overflow-hidden group-hover:border-white/20 transition-all duration-500 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  </motion.div>
);

// 1. Central Glowing AI Neural Sphere
export const NeuralSphere = () => (
  <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center hierarchy-bg-element">
    {/* Outer Ring */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-white/10 rounded-full"
    />
    {/* Inner Glowing Sphere */}
    <motion.div 
      animate={{ scale: [1, 1.05, 1], opacity: [0.7, 0.9, 0.7] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-48 h-48 md:w-72 md:h-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.8),rgba(0,229,255,0.4))] opacity-80 blur-3xl shadow-[0_0_100px_rgba(0,229,255,0.3)]"
    />
    <div className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full glass-premium border border-white/20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.8),rgba(0,229,255,0.4))] opacity-50" />
      {/* Neural Core Activity */}
      <motion.div 
        animate={{ 
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="w-1/2 h-1/2 border-2 border-secondary/40 rounded-full flex items-center justify-center"
      >
        <div className="w-4 h-4 bg-secondary rounded-full shadow-[0_0_20px_var(--color-secondary)]" />
      </motion.div>
    </div>
  </div>
);

// 2. Abstract Data Cubes with Animated Graphs
export const DataCube = () => (
  <motion.div 
    animate={{ y: [-10, 10, -10], rotateY: [0, 10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="w-32 h-32 relative preserve-3d hierarchy-bg-element"
  >
    <div className="absolute inset-0 glass-premium border border-white/20 rounded-lg flex flex-col p-4 justify-end">
      <div className="flex gap-1 items-end h-16">
        {[0.4, 0.7, 0.5, 0.9, 0.3].map((h, i) => (
          <motion.div 
            key={i}
            animate={{ height: [`${h * 100}%`, `${(h + 0.2) * 80}%`, `${h * 100}%`] }}
            transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
            className="flex-1 bg-secondary rounded-t-sm"
          />
        ))}
      </div>
      <div className="mt-2 text-[10px] font-mono text-white/50">DATA_SYNC_00{Math.floor(Math.random() * 9)}</div>
    </div>
  </motion.div>
);

// 3. Holographic Coin Stacks
export const CoinStack = () => (
  <div className="flex flex-col-reverse items-center justify-center hierarchy-bg-element">
    {[0, 1, 2, 3].map((i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
        transition={{ delay: i * 0.2, duration: 3, repeat: Infinity }}
        className="w-16 h-4 glass rounded-full border border-secondary/30 mb-[-8px] flex items-center justify-center shadow-[0_0_10px_rgba(0,244,254,0.1)]"
        style={{ zIndex: i }}
      >
         <div className="w-10 h-1 bg-secondary/20 rounded-full" />
      </motion.div>
    ))}
  </div>
);

// 4. Floating Calendar Blocks
export const CalendarBlock = () => (
  <motion.div 
    animate={{ rotateX: [0, 5, 0], rotateY: [0, 10, 0], y: [-5, 5, -5] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="w-24 h-28 glass-premium rounded-xl border border-white/10 p-3 flex flex-col items-center justify-center shadow-2xl hierarchy-bg-element"
  >
    <div className="text-secondary text-xs font-bold uppercase mb-1">Apr</div>
    <div className="text-3xl font-display font-black text-white">20</div>
    <div className="w-full h-1 bg-white/5 rounded-full mt-3" />
    <div className="w-1/2 h-1 bg-white/5 rounded-full mt-2" />
  </motion.div>
);

// 7. Connected Nodes with Flowing Energy Lines
export const NodeNetwork = () => (
  <div className="relative w-full h-64 flex items-center justify-center overflow-hidden hierarchy-bg-element">
    <svg className="absolute w-full h-full stroke-secondary/20 stroke-1 fill-none">
      <path d="M 50 100 Q 150 50 250 100 T 450 100" />
      <path d="M 100 150 Q 200 100 300 150 T 500 150" />
      <motion.circle r="3" fill="#00E5FF">
        <animateMotion dur="4s" repeatCount="indefinite" path="M 50 100 Q 150 50 250 100 T 450 100" />
      </motion.circle>
      <motion.circle r="3" fill="#8B5CF6">
        <animateMotion dur="6s" repeatCount="indefinite" path="M 100 150 Q 200 100 300 150 T 500 150" />
      </motion.circle>
    </svg>
    <div className="flex gap-16 relative z-10">
      {[1, 2, 3].map(i => (
        <div key={i} className="w-12 h-12 rounded-full glass border border-white/30 flex items-center justify-center">
          <div className="w-4 h-4 bg-primary/40 rounded-full blur-sm" />
        </div>
      ))}
    </div>
  </div>
);

// 8. Glowing Energy Core with Circular Rings
export const EnergyCore = () => (
  <div className="relative w-64 h-64 flex items-center justify-center hierarchy-bg-element">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute inset-0 border-2 border-dashed border-accent/30 rounded-full"
    />
    <motion.div 
      animate={{ scale: [1, 1.1, 1], rotate: -360 }}
      transition={{ duration: 12, repeat: Infinity }}
      className="absolute inset-4 border border-secondary/20 rounded-full"
    />
    <div className="w-32 h-32 rounded-full bg-accent/20 blur-2xl animate-pulse" />
    <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_40px_rgba(139,92,246,0.5)] flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-white/10 backdrop-blur-sm" />
    </div>
  </div>
);

// Star Cluster Particle Effect
export const StarCluster = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white transition-opacity"
        style={{
          width: Math.random() * 2 + 1 + "px",
          height: Math.random() * 2 + 1 + "px",
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
          opacity: Math.random() * 0.5 + 0.1,
        }}
        animate={{
          opacity: [0.1, 0.8, 0.1],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 5,
        }}
      />
    ))}
  </div>
);

// Holographic Dashboard Mockup
export const DashboardMockup = () => (
  <motion.div 
    animate={{ rotateX: [0, 5, 0], rotateY: [0, -5, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-full max-w-2xl px-4 perspective-1000"
  >
    <div className="glass-premium rounded-2xl border border-white/10 p-4 shadow-2xl relative overflow-hidden">
      <div className="flex gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-16 rounded-xl bg-white/5 border border-white/5 p-2">
            <div className="w-1/2 h-2 bg-white/10 rounded-full mb-2" />
            <div className="w-3/4 h-4 bg-secondary/20 rounded-lg" />
          </div>
        ))}
      </div>
      
      <div className="h-40 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-end">
        <div className="flex gap-2 items-end h-full">
          {[20, 45, 30, 60, 40, 75, 50, 90].map((h, i) => (
            <motion.div 
              key={i}
              className="flex-1 bg-gradient-to-t from-primary/20 to-primary/60 rounded-t-lg"
              initial={{ height: 0 }}
              whileInView={{ height: h + "%" }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements on top of dashboard */}
      <div className="absolute -top-10 -right-10 scale-50 opacity-40">
        <DataCube />
      </div>
    </div>
  </motion.div>
);

// Orbiting Chat Bubbles
export const OrbitingChats = () => (
    <div className="relative w-48 h-48 flex items-center justify-center hierarchy-bg-element">
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 glass rounded-2xl border border-white/20 p-2 flex items-center justify-center">
                <div className="w-6 h-1 bg-white/20 rounded-full" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 glass rounded-2xl border border-white/20 p-2 flex items-center justify-center">
                <div className="w-4 h-4 bg-secondary/30 rounded-full" />
            </div>
        </motion.div>
        <div className="w-20 h-20 rounded-full glass-premium border border-white/10 flex items-center justify-center">
             <div className="w-8 h-8 bg-primary rounded-full blur-lg" />
        </div>
    </div>
);

// Process Visual Component
export const ProcessVisual = ({ step }: { step: number }) => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-white/5 rounded-[20%] flex items-center justify-center"
    />
    <GlassCont className="scale-75 translate-y-0 opacity-100">
      <div className="text-4xl font-display font-black text-white/20 select-none">
        0{step}
      </div>
    </GlassCont>
    {step === 1 && <div className="absolute -top-4 -right-4 scale-50"><OrbitingChats /></div>}
    {step === 2 && <div className="absolute -bottom-4 -left-4 scale-50"><DataCube /></div>}
    {step === 3 && <div className="absolute -top-4 -left-4 scale-50"><CoinStack /></div>}
  </div>
);
