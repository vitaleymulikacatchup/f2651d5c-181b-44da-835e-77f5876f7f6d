"use client"

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutFloatingOverlay
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={50}
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "FAQ", id: "faq" },
          { name: "How To Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "Footer", id: "footer" },
        ]}
        buttonText="Get MemeMint"
        onButtonClick={() => { console.log('Button clicked'); }}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Welcome to MemeMint"
          subtitle="The memecoin you’ve been waiting for!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="What is MemeMint?"
          descriptions={["MemeMint is your go-to memecoin and community!", "Join us to reshape the future of transactions with fun."]}
        />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is MemeMint?", content: "MemeMint is a community-driven memecoin aiming to spread joy and innovation in transactions." },
            { title: "How can I buy MemeMint?", content: "You can buy MemeMint on various exchanges, details can be found in the How to Buy section." },
            { title: "What is the purpose of MemeMint?", content: "MemeMint aims to make crypto fun, accessible, and engaging." },
            { title: "How can I get involved?", content: "You can get involved by following us on social media, joining our community discussions, and participating in events!" },
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy MemeMint"
          steps={[
            { title: "Step 1", description: "Download a crypto wallet.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Buy Ethereum or Binance Coin.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Swap your ETH/BNB for MemeMint on our chosen exchanges!", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Our token distribution and structure ensure sustainability and growth."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1,000,000,000 MEMES" },
            { id: 2, title: "Circulating Supply", description: "600,000,000 MEMES" },
            { id: 3, title: "Liquidity", description: "30% of total supply allocated for liquidity pools" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="MemeMint Logo"
          logoText="MemeMint"
          items={[
            { label: "Privacy Policy", onClick: () => console.log('Privacy Policy Clicked') },
            { label: "Terms of Service", onClick: () => console.log('Terms of Service Clicked') },
            { label: "Contact Us", onClick: () => console.log('Contact Us Clicked') },
          ]}
          className="bg-bg-gradient"
          gradientStyle={{}
        />
      </div>
    </SiteThemeProvider>
  );
}