import React from 'react';
import { motion } from "motion/react";
import { Check, ArrowRight, MessageCircle, Mail } from "lucide-react";
import { GlassCont } from "../components/ThreeDAssets";
import { BackgroundVideo } from "../components/BackgroundVideo";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const comparisonData = [
    { feature: "Pricing", starter: "₹2,999", growth: "₹4,999", business: "₹7,999", premium: "₹9,999" },
    { feature: "Pages Included", starter: "Landing Page + Basic Multi-section Website", growth: "Landing Page + 5 Custom Pages", business: "10 Multi Funnel Pages", premium: "Fully Custom Solution (As Needed)" },
    { feature: "Mobile Responsive", starter: "Yes", growth: "Yes", business: "Yes", premium: "Yes" },
    { feature: "SEO Setup", starter: "Basic", growth: "Intermediate", business: "Advanced + Local SEO", premium: "Advanced + Content SEO" },
    { feature: "Security & Reliability", starter: "Yes", growth: "Yes", business: "Yes", premium: "Yes" },
    { feature: "Design", starter: "Clean Template Based", growth: "Premium UI Design", business: "Custom Brand Design", premium: "Fully Premium Custom Design" },
    { feature: "Revisions", starter: "Unlimited", growth: "Unlimited", business: "Unlimited", premium: "Unlimited" },
    { feature: "Delivery Time", starter: "5–7 Days", growth: "7–10 Days", business: "14–20 Days", premium: "20+ Days" },
    { feature: "E-commerce Functionality", starter: "No", growth: "Partial", business: "Full Store Setup", premium: "Complete Advanced Store" },
    { feature: "Payment Integration", starter: "Optional", growth: "Yes", business: "Yes", premium: "Yes" },
    { feature: "Hosting Support", starter: "Paid Add-on", growth: "Paid Add-on", business: "Included", premium: "Included" },
    { feature: "Lead Generation Tools", starter: "Contact Form", growth: "Smart Forms + WhatsApp", business: "Email + CRM Integration", premium: "Full Automation System" },
    { feature: "Backend & Control Panel", starter: "No", growth: "Basic Lead Panel", business: "Admin Console", premium: "Admin Console + CMS" },
    { feature: "Analytics Dashboard", starter: "No", growth: "Basic", business: "Advanced", premium: "Full Business Insights" },
    { feature: "Social Media Integration", starter: "Add-on", growth: "Included", business: "Included", premium: "Included" },
    { feature: "Support & Maintenance", starter: "1 Month", growth: "1 Month", business: "3 Months Free", premium: "5 Months Free" },
    { feature: "Extra Benefits", starter: "Fast Launch Setup", growth: "Growth Ready Website", business: "Staff Admin Support", premium: "Priority Support + Scaling Help" },
    { feature: "Best For", starter: "New Businesses", growth: "Growing Brands", business: "Established Businesses", premium: "Serious Scale & Automation" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 overflow-hidden relative">
      <BackgroundVideo 
        videoUrl="https://cdn.pixabay.com/video/2021/09/01/87134-595701833_large.mp4"
        opacity={0.15}
        overlayColor="rgba(10, 10, 15, 0.9)"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors mb-8">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-black text-white uppercase mb-6"
          >
            Detailed <span className="text-gradient">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-subtext text-xl max-w-3xl mx-auto"
          >
            Compare all features across our plans and choose what fits your business needs
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <GlassCont className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-white font-bold uppercase text-sm tracking-wider">Features</th>
                  <th className="p-4 text-secondary font-bold uppercase text-sm tracking-wider text-center">Starter Plan</th>
                  <th className="p-4 text-primary font-bold uppercase text-sm tracking-wider text-center bg-primary/5">Growth Plan</th>
                  <th className="p-4 text-accent font-bold uppercase text-sm tracking-wider text-center">Business Plan</th>
                  <th className="p-4 text-secondary font-bold uppercase text-sm tracking-wider text-center">Premium Plan</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white/80 font-medium">{row.feature}</td>
                    <td className="p-4 text-white/60 text-sm text-center">{row.starter}</td>
                    <td className="p-4 text-white/60 text-sm text-center bg-primary/5">{row.growth}</td>
                    <td className="p-4 text-white/60 text-sm text-center">{row.business}</td>
                    <td className="p-4 text-white/60 text-sm text-center">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCont>
        </motion.div>

        {/* CTA Section */}
        <div className="text-center">
          <GlassCont className="p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-white/60 mb-8">
              Not sure which plan is right for you? Let's discuss your requirements and find the perfect fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/918305341095?text=Hi! I need help choosing the right plan" target="_blank" className="bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/30 py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a href="mailto:SynthoraAI13@gmail.com" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </GlassCont>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
