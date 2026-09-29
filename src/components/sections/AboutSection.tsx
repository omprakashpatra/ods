import React from 'react';
import { ABOUT_TEAM_IMAGE } from '../../data/initialData';
import { 
  Target, 
  Compass, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Lightbulb, 
  HeartHandshake, 
  Clock 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const coreValues = [
    {
      title: 'Quality',
      desc: 'Precision in code, design balance, and error-free formula logic.',
      icon: Award
    },
    {
      title: 'Transparency',
      desc: 'Clear upfront quotation, explicit timelines, and honest capability assessments.',
      icon: ShieldCheck
    },
    {
      title: 'Innovation',
      desc: 'Applying modern web frameworks and smart automation to eliminate daily friction.',
      icon: Lightbulb
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Iterative review cycles ensuring the delivered work fulfills your business objectives.',
      icon: HeartHandshake
    },
    {
      title: 'Reliability',
      desc: 'Deadlines committed are deadlines met, supported by responsive post-delivery care.',
      icon: Clock
    }
  ];

  return (
    <section id="about-section" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Story + Team Visual */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
              <span>About Om Digital Services</span>
              <span aria-hidden="true">·</span>
              <span>Est. Digital Practice</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Helping People Turn Digital Ideas Into{' '}
              <span className="text-sky-600">Real Solutions.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At ODS (Om Digital Services), we bridge the gap between complex digital tools and practical business needs. Many individuals, startups, and growing enterprises find themselves held back by outdated websites, convoluted spreadsheets, or generic design assets.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We approach every engagement with a hands-on, craftsman mindset: whether creating a mobile-first website, automating a multi-branch Excel dashboard, or formatting company proposals, our focus remains on clarity, speed, and real operational value.
            </p>

            {/* Mission & Vision Bento */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-2">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To provide accessible, high-standard digital services that empower creators, entrepreneurs, and businesses to operate efficiently and project a world-class brand image.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To become the most trusted and transparent digital solutions partner, renowned for craftsmanship, reliability, and human-first customer service.
                </p>
              </div>
            </div>

          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <img
                src={ABOUT_TEAM_IMAGE}
                alt="ODS digital team collaboration"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-semibold text-sky-400">Craftsmanship & Collaboration</p>
                <h4 className="text-sm font-bold mt-0.5">Every project is handled with senior attention to detail</h4>
              </div>
            </div>
          </div>

        </div>

        {/* 5 Core Values Matrix */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Our Core Operating Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Guiding principles that govern how we interact, quote, and deliver for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-4.5 rounded-xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all text-left">
                  <div className="w-9 h-9 rounded-lg bg-sky-100/70 text-sky-700 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
