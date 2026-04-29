import React from 'react';
import { motion } from "motion/react";
import { Check, ArrowRight, Zap, Shield, Crown, Star, Mail, Phone, Linkedin, MessageCircle, Activity } from "lucide-react";
import { GlassCont } from "../components/ThreeDAssets";
import { BackgroundVideo } from "../components/BackgroundVideo";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic Plan",
      subtitle: "Digital Presence",
      icon: <Zap className="w-8 h-8 text-secondary" />,
      features: [
        "Frontend Visibility (Static)",
        "5-6 Optimized Pages",
        "Fixed Sitemap: Home, Services, About, Contact",
        "Template-based UI Design",
        "2D & 3D Visual Accents",
        "Vercel Hosting Setup",
        "Simple WhatsApp Trigger",
        "Basic SEO Optimization",
        "Add-on Features available"
      ],
      description: "Perfect for startups and local businesses needing a professional web presence with high-end aesthetics.",
      badge: "Quick Launch"
    },
    {
      name: "Professional Plan",
      subtitle: "Conversion Engine",
      icon: <Shield className="w-8 h-8 text-primary" />,
      recommended: true,
      features: [
        "Discovery & Competitor Analysis",
        "6-7 High-Conversion Pages",
        "Full Backend & Database Integration",
        "Fluent 2D-3D Flow Design",
        "Admin Console / CMS included",
        "Lead System Integration (Smart Forms)",
        "WhatsApp & Email Notifications",
        "CRM Basics & SEO Setup",
        "Ongoing Maintenance & Tracking",
        "Local SEO Focus"
      ],
      description: "A complete lead generation machine designed to outperform competitors and manage your business autonomously."
    },
    {
      name: "Premium Plan",
      subtitle: "Enterprise Protocol",
      icon: <Crown className="w-8 h-8 text-accent" />,
      features: [
        "Multi-page Expanded Architecture",
        "Custom Premium UI/UX Design",
        "Advanced 3D Graphics & Animations",
        "Low-Latency Optimized Infrastructure",
        "Programmatic SEO & Blog System",
        "Advanced Lead Automation (WhatsApp/Email)",
        "Integrated Growth Dashboard",
        "3 Months Free Optimization",
        "Enterprise-Level Deployment",
        "Ongoing Growth & Support Strategy"
      ],
      description: "The ultimate digital ecosystem. Fully automated, infinitely scalable, and designed for market dominance."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 overflow-hidden relative">
      <BackgroundVideo 
        videoUrl="https://cdn.pixabay.com/video/2021/09/01/87134-595701833_large.mp4"
        opacity={0.15}
        overlayColor="rgba(10, 10, 15, 0.9)"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="meta-label inline-block mb-4"
          >
            Protocol Tiers & Features
          </motion.span>
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="hero-title text-white uppercase mb-6 text-5xl md:text-7xl font-black"
          >
            Investment <span className="text-gradient">Architectures</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-subtext text-xl max-w-3xl mx-auto"
          >
            Choose the computational density required to dominate your local market. 
            All plans include our core neural design philosophy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              <GlassCont className={`h-full relative overflow-hidden flex flex-col p-8 ${plan.recommended ? 'border-primary/30 shadow-[0_0_50px_rgba(0,229,255,0.1)]' : 'hierarchy-card'}`}>
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-primary text-black font-black text-[10px] py-1 px-4 tracking-tighter uppercase rounded-bl-xl shadow-lg">
                    Highest ROI
                  </div>
                )}
                <div className="mb-8">
                  <div className="mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{plan.name}</h3>
                  <p className="text-secondary font-bold text-sm tracking-widest uppercase mb-4">{plan.subtitle}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 text-sm text-white/70 group">
                      <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      <span className="group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-xl font-black uppercase text-sm tracking-widest transition-all ${plan.recommended ? 'btn-gradient text-white shadow-xl hover:scale-[1.02]' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                  Select Protocol
                </button>
              </GlassCont>
            </motion.div>
          ))}
        </div>

        {/* Detailed Breakdown Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-widest">Growth & Maintenance</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary via-primary to-accent mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <GlassCont className="p-8">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-secondary" />
                  Recurring Revenue Engine
                </h4>
                <p className="text-subtext text-sm leading-relaxed">
                  Our Professional and Premium plans include ongoing maintenance which acts as your private tech squad. 
                  We handle hosting, security monitoring, content updates, SEO tweaks, and performance tracking. 
                  Support is provided by our specialized staff on a recurring basis.
                </p>
              </GlassCont>
              <GlassCont className="p-8">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Lead Automation Funnel
                </h4>
                <p className="text-subtext text-sm leading-relaxed">
                  For Premium clients: User visits → fills form → WhatsApp auto-reply → Email follow-up → Lead stored in your dashboard → Smart reminders triggered. 
                  Minimal latency, maximum conversion.
                </p>
              </GlassCont>
            </div>
            <div className="relative">
              <GlassCont className="p-10 border-glow text-center">
                <h3 className="text-2xl font-black text-white mb-6 uppercase">Have Custom Requirements?</h3>
                <p className="text-subtext mb-8">
                  If your project requires specific integrations, multi-language support, or unconventional 3D interfaces, 
                  we architect custom protocols tailored to your exact signature.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="https://wa.me/918305341095" target="_blank" className="bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/30 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                    <MessageCircle className="w-5 h-5" />
                    Chat with an Architect
                  </a>
                  <a href="mailto:SynthoraAI13@gmail.com" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                    <Mail className="w-5 h-5" />
                    SynthoraAI13@gmail.com
                  </a>
                </div>
              </GlassCont>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
