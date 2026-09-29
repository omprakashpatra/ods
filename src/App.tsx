import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ToastContainer } from './components/common/ToastContainer';
import { FloatingSupport } from './components/common/FloatingSupport';
import { ScrollToTop } from './components/common/ScrollToTop';

// Modals
import { ServiceDetailModal } from './components/modals/ServiceDetailModal';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { QuoteRequestModal } from './components/modals/QuoteRequestModal';
import { WriteReviewModal } from './components/modals/WriteReviewModal';
import { AuthModal } from './components/pages/AuthModal';

// Landing Sections
import { HeroSection } from './components/sections/HeroSection';
import { TrustSection } from './components/sections/TrustSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { AboutSection } from './components/sections/AboutSection';
import { WhyChooseSection } from './components/sections/WhyChooseSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { PricingSection } from './components/sections/PricingSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { NewsletterSection } from './components/sections/NewsletterSection';

// Dashboards & Legal
import { CustomerDashboard } from './components/pages/CustomerDashboard';
import { AdminDashboard } from './components/pages/AdminDashboard';
import { LegalPage } from './components/pages/LegalPage';

// Inner View Breadcrumb Bar
const BreadcrumbBar: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  const { setActivePage } = useApp();
  return (
    <div className="bg-slate-100/80 border-b border-slate-200/80 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button 
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-sky-600 transition-colors cursor-pointer font-medium"
          >
            Home
          </button>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-slate-900">{title}</span>
        </div>
        {subtitle && (
          <span className="text-[11px] text-slate-500 hidden sm:inline">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

const MainContent: React.FC = () => {
  const { activePage } = useApp();

  return (
    <main className="min-h-[calc(100vh-140px)] flex flex-col">
      {activePage === 'home' && (
        <>
          <HeroSection />
          <TrustSection />
          <ServicesSection />
          <AboutSection />
          <WhyChooseSection />
          <ProcessSection />
          <PortfolioSection />
          <PricingSection />
          <ReviewsSection />
          <FaqSection />
          <ContactSection />
          <NewsletterSection />
        </>
      )}

      {activePage === 'services' && (
        <>
          <BreadcrumbBar title="Services" subtitle="Explore all 8 specialized digital solutions" />
          <ServicesSection />
          <PricingSection />
          <ContactSection />
          <NewsletterSection />
        </>
      )}

      {activePage === 'portfolio' && (
        <>
          <BreadcrumbBar title="Portfolio" subtitle="Showcases & case studies across Web, Data & Brand" />
          <PortfolioSection />
          <ReviewsSection />
          <ContactSection />
        </>
      )}

      {activePage === 'pricing' && (
        <>
          <BreadcrumbBar title="Pricing" subtitle="Transparent, milestone-based investment tiers" />
          <PricingSection />
          <FaqSection />
          <ContactSection />
        </>
      )}

      {activePage === 'reviews' && (
        <>
          <BreadcrumbBar title="Customer Reviews" subtitle="Verified feedback & project ratings" />
          <ReviewsSection />
          <TrustSection />
          <ContactSection />
        </>
      )}

      {activePage === 'about' && (
        <>
          <BreadcrumbBar title="About ODS" subtitle="Mission, Vision & Core Values" />
          <AboutSection />
          <WhyChooseSection />
          <ProcessSection />
          <ContactSection />
        </>
      )}

      {activePage === 'faq' && (
        <>
          <BreadcrumbBar title="FAQ & Knowledge Base" subtitle="Answers to pricing, turnaround & revisions" />
          <FaqSection />
          <ContactSection />
        </>
      )}

      {activePage === 'contact' && (
        <>
          <BreadcrumbBar title="Contact Us" subtitle="Direct channels, WhatsApp & quote requests" />
          <ContactSection />
          <FaqSection />
        </>
      )}

      {activePage === 'dashboard' && (
        <>
          <BreadcrumbBar title="Customer Dashboard" subtitle="Manage quotes, active requests & support tickets" />
          <CustomerDashboard />
        </>
      )}

      {activePage === 'admin' && (
        <>
          <BreadcrumbBar title="Admin Operations Console" subtitle="Quotation engine, review moderation & support desk" />
          <AdminDashboard />
        </>
      )}

      {activePage === 'privacy' && (
        <LegalPage type="privacy" />
      )}

      {activePage === 'terms' && (
        <LegalPage type="terms" />
      )}

      {activePage === 'refund' && (
        <LegalPage type="refund" />
      )}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-sky-500 selection:text-white">
        {/* Sticky Header */}
        <Navbar />

        {/* Dynamic Route Content */}
        <MainContent />

        {/* Footer */}
        <Footer />

        {/* Global Modals */}
        <ServiceDetailModal />
        <ProjectDetailModal />
        <QuoteRequestModal />
        <WriteReviewModal />
        <AuthModal />

        {/* Interactive Floating Helpers */}
        <FloatingSupport />
        <ScrollToTop />
        <ToastContainer />
      </div>
    </AppProvider>
  );
}
