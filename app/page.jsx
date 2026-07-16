import CTASection from './components/CTASection';
import EzyPlatformSection from './components/EzyPlatformSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import InfraSection from './components/InfraSection';
import MobileCTA from './components/MobileCTA';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';
import RolesSection from './components/RolesSection';
import SocialProofSection from './components/SocialProofSection';
import TrialSection from './components/TrialSection';
import UseCasesSection from './components/UseCasesSection';
import VibeIntro from './components/VibeIntro';
import WhyInterDataSection from './components/WhyInterDataSection';

const SHOW_TRIAL_SECTION = false;
const SHOW_CTA_SECTION = false;

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <PricingSection />
      <VibeIntro />
      <EzyPlatformSection />
      <InfraSection />
      <WhyInterDataSection />
      <UseCasesSection />
      <ProcessSection />
      <RolesSection />
      {SHOW_TRIAL_SECTION && <TrialSection />}
      <SocialProofSection />
      <FAQSection />
      {SHOW_CTA_SECTION && <CTASection />}
      <Footer />
      <MobileCTA />
    </main>
  );
}
