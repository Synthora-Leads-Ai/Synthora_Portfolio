/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  NeuralSphere, 
  DataCube, 
  CoinStack, 
  CalendarBlock, 
  NodeNetwork, 
  EnergyCore,
  OrbitingChats,
  GlassCont,
  StarCluster,
  DashboardMockup,
  ProcessVisual
} from "./components/ThreeDAssets";
import { BackgroundVideo } from "./components/BackgroundVideo";
import PricingPage from "./pages/PricingPage";
import { 
  Zap, 
  Cpu, 
  Layers, 
  Activity, 
  Globe, 
  Shield, 
  BarChart3, 
  ArrowRight,
  Menu,
  X,
  Plus,
  MessageCircle,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  Star,
  Crown
} from "lucide-react";
import React, { useState, useEffect } from "react";

const TypewriterHeadline = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
        const timeout = setTimeout(() => setReverse(true), 2000);
        return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, Math.random() * 50));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-gradient min-h-[1.2em] inline-block">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse ml-1 text-white opacity-40">|</span>
    </span>
  );
};

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-accent z-[100] origin-left shadow-[0_0_15px_rgba(0,229,255,0.4)]"
      style={{ scaleX }}
    />
  );
};

const Parallax = ({ children, offset = 50, className = "" }: { children: React.ReactNode, offset?: number, className?: string }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

const WhatsAppCTA = () => (
  <motion.a
    href="https://wa.me/918305341095"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.5, y: 100 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-[90] flex items-center justify-center w-16 h-16 rounded-full glass-premium border border-secondary/30 shadow-[0_0_30px_rgba(0,229,255,0.2)] group"
  >
    {/* Pulsing Background Glow */}
    <div className="absolute inset-0 rounded-full bg-secondary/20 blur-xl animate-pulse group-hover:bg-secondary/30 transition-colors" />
    
    {/* Main Icon */}
    <div className="relative text-secondary group-hover:text-white transition-colors">
      <MessageCircle size={32} />
    </div>

    {/* Notification Badge */}
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-bg flex items-center justify-center shadow-lg shadow-accent/40"
    >
      <span className="w-2 h-2 bg-white rounded-full animate-ping" />
      <span className="absolute w-1.5 h-1.5 bg-white rounded-full" />
    </motion.div>

    {/* Hover Label */}
    <div className="absolute right-full mr-4 px-4 py-2 glass rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/5">
      <span className="text-secondary font-display font-bold text-xs uppercase tracking-widest leading-none">Initialize Comms</span>
    </div>
  </motion.a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-premium rounded-2xl px-6 py-3 border border-white/5 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-3 h-3 rounded-[3px] bg-secondary shadow-[0_0_15px_var(--color-secondary)]"></div>
          <span className="font-sans font-extrabold text-lg tracking-tighter text-white uppercase italic">Synthora</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#demos" className="hover:text-primary transition-colors">Demos</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#team" className="hover:text-primary transition-colors">Team</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/918305341095?text=Hi! I'd like to book a call to discuss my project" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-5 py-2 rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform active:scale-95">
            Book a Call
          </a>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 glass-premium rounded-2xl p-6 flex flex-col gap-4 text-center border border-white/10"
        >
          <a href="#demos" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Demos</a>
          <a href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#team" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Team</a>
          <a href="#pricing" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

const LetterAnimation = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const words = text.split(" ");
  
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const childVars = {
    initial: { opacity: 0, y: 40, rotateX: 45 },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      }
    },
  };

  return (
    <motion.span variants={containerVars} initial="initial" animate="animate" className="inline-block">
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.2em]">
          {word.split("").map((char, j) => (
            <motion.span key={j} variants={childVars} className="inline-block">
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

const Hero = () => (
  <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pb-20 pt-32 px-6">
    
    <BackgroundVideo 
      videoUrl="https://cdn.pixabay.com/video/2022/10/24/136125-763462947_large.mp4"
      opacity={0.9}
      overlayColor="rgba(0, 0, 0, 0.2)"
    />

    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="text-center max-w-5xl z-10"
    >
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
        Build Your Business Online — <br/>
        <span className="text-gradient">Fast, Simple, Effective</span>
      </h1>
      <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-6 font-medium leading-relaxed">
        Websites, AI Automations & Growth Systems for local businesses and founders who need results now.
      </p>
      <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">
        We don't just build websites — we build systems that bring customers.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
        <a href="#demos" className="w-full btn-gradient text-white px-10 py-5 rounded-full font-display font-black text-lg shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-105 transition-all border border-white/20 flex items-center justify-center gap-3">
          View Demo Websites
        </a>
        <a href="#contact" className="w-full glass px-10 py-5 rounded-full font-display font-bold text-lg text-white hover:bg-white/20 transition-all border border-white/20 backdrop-blur-md">
          Book a Free Call
        </a>
      </div>
    </motion.div>

    {/* Scroll indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 flex justify-center opacity-40"
    >
      <div className="w-px h-16 bg-gradient-to-b from-white via-white to-transparent" />
    </motion.div>

  </section>
);

const TrustStrip = () => (
  <section className="py-12 px-6 border-y border-white/5">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-white/60 text-sm mb-6 uppercase tracking-widest">
        Trusted by growing local businesses across industries
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 text-white/40 text-lg font-medium">
        <span className="hover:text-white/70 transition-colors">Salon</span>
        <span className="text-white/20">•</span>
        <span className="hover:text-white/70 transition-colors">Restaurant</span>
        <span className="text-white/20">•</span>
        <span className="hover:text-white/70 transition-colors">Services</span>
        <span className="text-white/20">•</span>
        <span className="hover:text-white/70 transition-colors">Startups</span>
      </div>
    </div>
  </section>
);

const DemoProjects = () => (
  <section id="demos" className="section-spacing px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-black text-white mb-4"
      >
        See What We Can Build For You
      </motion.h2>
      <p className="text-subtext text-lg">
        Real demos. Real results. Ready to launch.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {[
        { 
          name: "Flower Salon Website", 
          url: "https://flower-salon-demo.vercel.app/",
          image: "🌸",
          color: "from-pink-500/20 to-purple-500/20"
        },
        { 
          name: "Nitrogen Salon Website", 
          url: "https://nitrogen-salon-demo.vercel.app/",
          image: "💇",
          color: "from-blue-500/20 to-cyan-500/20"
        },
        { 
          name: "Zayaka Restaurant Website", 
          url: "https://zayaka-demo.vercel.app/",
          image: "🍽️",
          color: "from-orange-500/20 to-red-500/20"
        }
      ].map((demo, i) => (
        <motion.div
           key={demo.name}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: i * 0.1 }}
        >
          <a href={demo.url} target="_blank" rel="noopener noreferrer" className="block group">
            <GlassCont className="p-0 overflow-hidden hover:border-secondary/40 transition-all">
              <div className={`aspect-video bg-gradient-to-br ${demo.color} flex items-center justify-center text-6xl`}>
                {demo.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                  {demo.name}
                </h3>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full" />
                    Clean design
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full" />
                    Mobile responsive
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full" />
                    Lead ready
                  </div>
                </div>
              </div>
            </GlassCont>
          </a>
        </motion.div>
      ))}
    </div>

    <div className="text-center">
      <p className="text-xl text-white mb-6">
        Like what you see? Just say <span className="text-gradient font-bold">"YES"</span> — we'll build yours next.
      </p>
      <a href="https://wa.me/918305341095?text=YES" target="_blank" className="inline-flex items-center gap-3 btn-gradient text-white px-10 py-5 rounded-full font-display font-black text-lg shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-105 transition-all border border-white/20">
        <MessageCircle className="w-6 h-6" />
        Say "YES" on WhatsApp
      </a>
    </div>
  </section>
);

const WallOfLove = () => (
  <section className="section-spacing px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-black text-white mb-4"
      >
        Wall of Trust
      </motion.h2>
      <p className="text-subtext text-lg">
        What people say about us
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {[
        { quote: "Very smooth process. Got my website live quickly.", author: "Local Business Owner" },
        { quote: "Simple, clean, and exactly what I needed.", author: "Startup Founder" }
      ].map((testimonial, i) => (
        <motion.div
           key={i}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: i * 0.1 }}
        >
          <GlassCont className="p-8 h-full">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-white/80 mb-6 leading-relaxed text-lg">"{testimonial.quote}"</p>
            <div>
              <p className="text-white/60 text-sm">— {testimonial.author}</p>
            </div>
          </GlassCont>
        </motion.div>
      ))}
    </div>
  </section>
);



const DashboardSection = () => (
  <section className="section-spacing px-6 relative overflow-hidden flex flex-col items-center">
    <BackgroundVideo 
      videoUrl="https://cdn.pixabay.com/video/2021/09/01/87134-595701833_large.mp4"
      opacity={0.4}
      overlayColor="rgba(10, 10, 15, 0.75)"
    />
    <div className="text-center mb-16 z-10">
      <span className="meta-label">Command Center</span>
      <h2 className="hero-title text-white uppercase mb-6 hierarchy-heading">Autonomous Control</h2>
    </div>
    <div className="w-full flex justify-center">
      <DashboardMockup />
    </div>
  </section>
);

const HowWeWorkSection = () => (
  <section id="process" className="section-spacing px-6 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Simple process. No confusion.</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        { step: "01", title: "Discovery", desc: "We understand your business needs" },
        { step: "02", title: "Build", desc: "We design & develop your website" },
        { step: "03", title: "Launch", desc: "Your website goes live quickly" },
        { step: "04", title: "Support", desc: "We help you grow continuously" }
      ].map((item, i) => (
        <motion.div
          key={item.step}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <div className="w-20 h-20 rounded-full glass border border-secondary/20 flex items-center justify-center text-secondary font-black text-2xl mx-auto mb-6">
            {item.step}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
          <p className="text-subtext text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  recommended?: boolean;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features, recommended = false, delay = 0 }) => (
  <GlassCont delay={delay} className={`h-full hierarchy-card ${recommended ? 'border-secondary/40 !filter-none !opacity-100' : ''}`}>
    {recommended && <span className="absolute top-4 right-4 bg-accent text-white text-[8px] font-black px-2 py-1 rounded-full uppercase shadow-[0_0_10px_rgba(255,77,141,0.4)] hierarchy-cta">Optimal</span>}
    <span className="meta-label">{plan}</span>
    <div className="text-4xl font-bold text-white mb-6 tracking-tighter">{price}<span className="text-sm font-light opacity-50">/mo</span></div>
    <ul className="space-y-4 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-white/60">
          <div className="w-1 h-1 rounded-full bg-secondary" />
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-full font-bold text-sm transition-all ${recommended ? 'btn-gradient text-white shadow-[0_0_30px_rgba(0,229,255,0.3)]' : 'glass border border-white/10 text-white hover:bg-white/5'}`}>
      Initialize Plan
    </button>
  </GlassCont>
);

const TeamSection = () => (
  <section id="team" className="section-spacing px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-black text-white mb-4"
      >
        Meet the Team
      </motion.h2>
      <p className="text-subtext text-lg max-w-2xl mx-auto">
        Built by a focused team of 3 engineers who care about speed, simplicity, and results.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {[
        { name: "Sahil Sahu", role: "Development", icon: <Cpu className="w-8 h-8 text-secondary" /> },
        { name: "Uday Jhariya", role: "Design", icon: <Activity className="w-8 h-8 text-primary" /> },
        { name: "Nakul Narang", role: "Automation", icon: <Zap className="w-8 h-8 text-accent" /> }
      ].map((member, i) => (
        <motion.div
           key={member.name}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: i * 0.1 }}
        >
          <GlassCont className="p-8 text-center hover:border-white/20 transition-all group">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-white/10 transition-colors">
              {member.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
            <p className="text-secondary text-sm font-medium uppercase tracking-widest">{member.role}</p>
          </GlassCont>
        </motion.div>
      ))}
    </div>

    <div className="text-center">
      <p className="text-white/70 text-lg">
        <span className="text-secondary font-bold">Small team</span> = Faster execution
      </p>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="section-spacing px-6 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-black text-white mb-4"
      >
        Simple plans to get started fast ⚡
      </motion.h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <GlassCont className="p-10 h-full flex flex-col">
          <div className="mb-6">
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Basic Plan</h3>
            <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">For visibility</p>
            <div className="text-4xl font-black text-white mb-2">₹2,999</div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "5–6 pages",
              "Clean UI design",
              "Mobile responsive",
              "WhatsApp integration",
              "Basic SEO"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <div className="text-center mb-6">
            <p className="text-white/60 text-sm mb-2">Best for:</p>
            <p className="text-white font-bold">Getting online fast</p>
          </div>
          <a href="https://wa.me/918305341095?text=Hi! I'm interested in the Basic Plan (₹2,999)" target="_blank" className="w-full py-4 rounded-xl font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-center block">
            Get Started
          </a>
        </GlassCont>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <GlassCont className="p-10 h-full border-primary/30 flex flex-col relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black font-black text-xs py-1 px-4 rounded-full uppercase">
            Popular
          </div>
          <div className="mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Pro Plan</h3>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">For growth</p>
            <div className="text-4xl font-black text-white mb-2">₹4,999</div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Full website + backend",
              "Admin panel",
              "Lead system (forms + WhatsApp + email)",
              "SEO setup",
              "Conversion-focused design"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <div className="text-center mb-6">
            <p className="text-white/60 text-sm mb-2">Best for:</p>
            <p className="text-white font-bold">Getting real leads</p>
          </div>
          <a href="https://wa.me/918305341095?text=Hi! I'm interested in the Pro Plan (₹4,999)" target="_blank" className="w-full py-4 rounded-xl font-bold btn-gradient text-white shadow-xl hover:scale-[1.02] transition-all text-center block">
            Get Started
          </a>
        </GlassCont>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <GlassCont className="p-10 h-full flex flex-col">
          <div className="mb-6">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Enterprise Plan</h3>
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">For scaling 🚀</p>
            <div className="text-4xl font-black text-white mb-2">₹9,999</div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Advanced UI/UX + 3D",
              "SEO system (blogs + location pages)",
              "Lead automation",
              "WhatsApp auto replies",
              "Email follow-ups",
              "Monthly growth support"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <div className="text-center mb-6">
            <p className="text-white/60 text-sm mb-2">Best for:</p>
            <p className="text-white font-bold">Full business automation</p>
          </div>
          <a href="https://wa.me/918305341095?text=Hi! I'm interested in the Enterprise Plan (₹9,999)" target="_blank" className="w-full py-4 rounded-xl font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-center block">
            Get Started
          </a>
        </GlassCont>
      </motion.div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="section-spacing px-6 max-w-4xl mx-auto">
    <h2 className="hero-title text-white uppercase mb-16 text-center text-5xl">F.A.Q</h2>
    <div className="space-y-6 text-center md:text-left">
      {/* FAQ items wrapped in div to handle key */}
      {[
        { q: "How quickly can I get online?", a: "Most local businesses achieve a stable online presence and full setup within 48 to 72 hours." },
        { q: "Is the management truly hassle-free?", a: "Yes. Once we set everything up, Synthora handles updates and monitoring so you don't have to." },
        { q: "Can I upgrade my plan later?", a: "Absolutely. As your business grows, you can scale your digital assets and features at any time." }
      ].map((item, i) => (
        <div key={i}>
          <GlassCont className="p-0 overflow-hidden text-left hierarchy-card">
            <details className="group">
              <summary className="p-8 cursor-pointer list-none flex justify-between items-center text-white/90 font-bold group-hover:text-secondary transition-colors">
                {item.q}
                <Plus className="w-5 h-5 group-open:rotate-45 transition-transform opacity-40 group-hover:opacity-100" />
              </summary>
              <div className="px-8 pb-8 text-subtext leading-relaxed text-base">
                {item.a}
              </div>
            </details>
          </GlassCont>
        </div>
      ))}
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="section-spacing px-6 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Have an idea or want a website like our demos?
        </h2>
        <p className="text-subtext text-lg mb-8">
          Check our demo projects. If you like it, just say <span className="text-gradient font-bold">"YES"</span>
        </p>
        <p className="text-white/60 text-sm">
          We usually respond within 24 hours
        </p>
      </div>
      
      <GlassCont className="p-10">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-2 text-sm">Name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2 text-sm">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-white font-medium mb-2 text-sm">Message</label>
            <textarea 
              rows={5}
              placeholder="Tell us about your project..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors resize-none"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full btn-gradient text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.02] transition-all"
          >
            Let's build your business online
          </button>
        </form>
      </GlassCont>

      <div className="text-center mt-12">
        <p className="text-white/60 mb-4">Or reach us directly:</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/918305341095" target="_blank" className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
          <span className="hidden sm:block text-white/20">•</span>
          <a href="mailto:SynthoraAI13@gmail.com" className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span className="font-medium">SynthoraAI13@gmail.com</span>
          </a>
          <span className="hidden sm:block text-white/20">•</span>
          <a href="tel:+918305341095" className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
            <span className="font-medium">+91 8305341095</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ title, description, children }: { title: string, description: string, children?: any }) => (
  <GlassCont className="h-full hierarchy-card">
    <span className="meta-label">{title}</span>
    <p className="text-white/60 text-sm leading-relaxed mb-8">{description}</p>
    <div className="flex items-center justify-center pt-4">
        {children}
    </div>
  </GlassCont>
);

const ServicesSection = () => (
  <section id="services" className="section-spacing px-6 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-4">From idea to growth — we handle everything</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <GlassCont className="p-10 h-full">
          <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
            <Globe className="w-8 h-8 text-secondary" />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">Website Development</h3>
          <p className="text-white/60 mb-6 leading-relaxed">
            We create fast, modern, and mobile-friendly websites for your business.
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-secondary rounded-full" />
              Business websites
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-secondary rounded-full" />
              Landing pages
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-secondary rounded-full" />
              Demo-based fast builds
            </li>
          </ul>
        </GlassCont>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <GlassCont className="p-10 h-full border-primary/30">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
            <Cpu className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">AI Automation</h3>
          <p className="text-white/60 mb-6 leading-relaxed">
            We help you automate your business workflows.
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              WhatsApp automation
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              Lead capture systems
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              Smart response setup
            </li>
          </ul>
        </GlassCont>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <GlassCont className="p-10 h-full">
          <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
            <Activity className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">Design</h3>
          <p className="text-white/60 mb-6 leading-relaxed">
            We design clean, modern, and conversion-focused UI.
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full" />
              UI/UX design
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full" />
              Website design
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full" />
              Brand look
            </li>
          </ul>
        </GlassCont>
      </motion.div>
    </div>
  </section>
);

const CaseStudiesSection = () => (
  <section id="case-studies" className="section-spacing px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
        Real Results You Can Expect
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <GlassCont>
        <div className="flex flex-col gap-6">
          <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-6xl">
            💇
          </div>
          <div>
            <h3 className="text-2xl font-black text-white mb-3">
              Salon Website Demo
            </h3>
            <ul className="space-y-3 text-white/70 mb-4">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                Better online visibility
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                More customer trust
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                Easy contact via WhatsApp
              </li>
            </ul>
            <a href="https://flower-salon-demo.vercel.app/" target="_blank" className="flex items-center gap-2 text-secondary font-bold group">
              View Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </GlassCont>

      <GlassCont>
        <div className="flex flex-col gap-6">
          <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center text-6xl">
            🍽️
          </div>
          <div>
            <h3 className="text-2xl font-black text-white mb-3">
              Restaurant Website Demo
            </h3>
            <ul className="space-y-3 text-white/70 mb-4">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                Menu showcase
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                Mobile-friendly design
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                More local reach
              </li>
            </ul>
            <a href="https://zayaka-demo.vercel.app/" target="_blank" className="flex items-center gap-2 text-secondary font-bold group">
              View Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </GlassCont>
    </div>

    <div className="text-center mt-12">
      <p className="text-2xl text-white/80 font-medium">
        "Simple systems → Real business growth"
      </p>
    </div>
  </section>
);

const MetricsSection = () => (
  <section className="section-spacing bg-[#0D0F14]/40 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="text-center group flex flex-col items-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full glass border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.25)] transition-all duration-500">
                <Globe className="w-11 h-11" />
            </div>
          </div>
          <div className="text-5xl font-display font-black text-white mb-3 tracking-tighter">$42.8k</div>
          <div className="text-subtext uppercase tracking-widest text-[11px] font-bold">Avg Revenue Growth</div>
        </div>
        <div className="text-center group flex flex-col items-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full glass border border-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(0,229,255,0.25)] transition-all duration-500">
                <BarChart3 className="w-11 h-11" />
            </div>
          </div>
          <div className="text-5xl font-display font-black text-white mb-3 tracking-tighter">312%</div>
          <div className="text-subtext uppercase tracking-widest text-[11px] font-bold">ROI Enhancement</div>
        </div>
        <div className="text-center group flex flex-col items-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full glass border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,77,141,0.25)] transition-all duration-500">
                <Zap className="w-11 h-11" />
            </div>
          </div>
          <div className="text-5xl font-display font-black text-white mb-3 tracking-tighter">1,482</div>
          <div className="text-subtext uppercase tracking-widest text-[11px] font-bold">Live Bookings</div>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="section-spacing px-6 overflow-hidden flex flex-col items-center relative">
    <BackgroundVideo 
      videoUrl="https://cdn.pixabay.com/video/2020/09/27/50849-463870674_large.mp4"
      opacity={0.5}
      overlayColor="rgba(10, 10, 15, 0.7)"
    />
    <div className="max-w-5xl mx-auto relative text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30">
        <EnergyCore />
      </div>
      
      <GlassCont className="text-center py-20 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
            Just Say <span className="text-gradient italic">"YES"</span> <br/>
            To Start Growing.
          </h2>
          <p className="text-subtext max-w-xl mx-auto mb-12 text-lg">
            Ready to boost your local business? We handle the design, setup, and updates. You just handle the customers.
          </p>
          <a href="https://wa.me/918305341095" target="_blank" className="btn-gradient text-white px-10 py-5 rounded-full font-display font-black text-xl shadow-[0_0_50px_rgba(139,92,246,0.3)] hover:scale-105 transition-all inline-block uppercase tracking-widest">
            Claim Your Market
          </a>
        </div>
      </GlassCont>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-[3px] bg-secondary shadow-[0_0_15px_var(--color-secondary)]"></div>
          <span className="font-sans font-extrabold text-2xl tracking-tighter text-white uppercase italic">Synthora</span>
        </div>
        <p className="text-subtext text-sm leading-relaxed max-w-sm mb-8">
          Empowering local businesses with premium digital protocols. 
          We handle the design, setup, and updates so you can focus on growth.
        </p>
        <div className="flex gap-4">
          <a href="https://x.com/synthoraaii" target="_blank" className="p-2 glass rounded-lg hover:text-secondary transition-colors"><Twitter size={18} /></a>
          <a href="https://www.linkedin.com/in/synthora-ai-leads-526510405" target="_blank" className="p-2 glass rounded-lg hover:text-secondary transition-colors"><Linkedin size={18} /></a>
          <a href="https://wa.me/918305341095" target="_blank" className="p-2 glass rounded-lg hover:text-secondary transition-colors"><MessageCircle size={18} /></a>
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Connect</h4>
        <ul className="space-y-4 text-sm text-subtext">
          <li className="flex items-center gap-3">
            <Mail size={14} className="text-secondary" />
            <a href="mailto:SynthoraAI13@gmail.com" className="hover:text-white transition-colors">SynthoraAI13@gmail.com</a>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={14} className="text-secondary" />
            <a href="tel:+918305341095" className="hover:text-white transition-colors">+91 8305341095</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Protocol</h4>
        <ul className="space-y-4 text-sm text-subtext">
          <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Strategy</Link></li>
          <li><a href="#features" className="hover:text-white transition-colors">Market Solutions</a></li>
          <li><a href="#process" className="hover:text-white transition-colors">Growth Process</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-white/30 text-[10px] font-medium uppercase tracking-[0.2em]">
        © 2026 Synthora AI Labs. All Growth Rights Reserved.
      </div>
      <div className="flex gap-6 text-white/30 text-[10px] uppercase tracking-widest">
        <a href="#" className="hover:text-primary transition-colors">Security</a>
        <a href="#" className="hover:text-primary transition-colors">Protocol</a>
        <a href="#" className="hover:text-primary transition-colors">Sync</a>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <>
    <Hero />
    <TrustStrip />
    <DemoProjects />
    <WallOfLove />
    <ServicesSection />
    <CaseStudiesSection />
    <TeamSection />
    <HowWeWorkSection />
    <PricingSection />
    <ContactSection />
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-primary selection:text-white bg-bg relative overflow-x-hidden">
        <ScrollProgressBar />
        <WhatsAppCTA />
        {/* Global Background Layer */}
        <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
          <div className="mesh-gradient absolute inset-0 opacity-40" />
          <StarCluster />
        </div>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
