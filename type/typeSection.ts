// --- Base & Utility Interfaces ---

export interface CtaButton {
  label: string;
  href: string;
  variant?: string;
  icon?: string;
}

export interface ImageRef {
  src: string;
  alt: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface NavChild {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface SeoMeta {
  siteTitle: string;
  siteDescription: string;
  keywords: string[];
}

export interface SiteData {
  siteName: string;
  tagline: string;
  logo: {
    light: string;
  };
  TopBar: {
    phone: string;
    phoneHref: string;
    ctaButton: CtaButton;
  };
  copyright: string;
}

// --- Header & Footer Data ---

export interface FooterColumn {
  title: string;
  links: NavChild[];
}

export interface FooterContact {
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
}

export interface FooterData {
  logoImage: string;
  desc: string;
  ctaButton: CtaButton;
  columns: FooterColumn[];
  footerContact: FooterContact;
  socialLinks: SocialLink[];
  copyright: string;
  legalLinks: LegalLink[];
}

// --- Section Data Interfaces ---

export interface HeroSocialProof {
  avatarImages: string[];
  ratingBadge: string;
  label: string;
}

export interface HeroData {
  badge: string;
  title: string;
  highlightedTitle: string;
  desc: string;
  buttons: CtaButton[];
  bgImageUrl: string;
  socialProof: HeroSocialProof;
}

export interface FeatureCard {
  icon: string;
  title: string;
  desc: string;
}

export interface AboutStat {
  id: number;
  number: string;
  suffix: string;
  label: string;
  iconName: string;
}

export interface AboutPageData {
  pretitle: string;
  title: string;
  highlightedTitle: string;
  sideImages: {
    mainLeft: string;
  };
  badge: {
    title: string;
    desc: string;
  };
  subTitle: string;
  heading: string;
  desc: string;
  stats: AboutStat[];
  button: {
    label: string;
    href: string;
  };
}

export interface PartnerItem {
  id: number;
  name: string;
  logo: string;
}

export interface PartnersData {
  badge: string;
  title: string;
  desc: string;
  partners: PartnerItem[];
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  image: ImageRef;
  href: string;
}

export interface ServiceData {
  badge: string;
  title: {
    normal: string;
    highlighted: string;
  };
  description: string;
  services: ServiceItem[];
  bottomBanner: {
    callSection: {
      title: string;
      phone: string;
      phoneHref: string;
    };
    emergencySection: {
      title: string;
      desc: string;
    };
    button: {
      label: string;
      href: string;
    };
  };
}

export interface WhyChooseUsFeature {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  badge: string;
  title: {
    normal: string;
    highlighted: string;
  };
  description: string;
  sideImage: ImageRef;
  features: WhyChooseUsFeature[];
}

export interface WorkStep {
  id: number;
  number: string;
  title: string;
  desc: string;
}

export interface HowWeWorkData {
  badge: string;
  title: string;
  steps: WorkStep[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface TestimonialData {
  badge: string;
  title: string;
  testimonialItems: TestimonialItem[];
}

export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  date: string;
  title: string;
  readMoreText: string;
}

export interface BlogData {
  badge: string;
  title: string;
  posts: BlogPost[];
}

export interface CtaBannerData {
  title: string;
  desc: string;
  button: CtaButton;
}

export interface ContactItem {
  iconTitle: string;
  values: string[];
}

export interface ContactMap {
  title: string;
  address: string;
  directionsText: string;
  directionsUrl: string;
  embedUrl: string;
}

export interface ContactSectionData {
  title: string;
  contactItems: ContactItem[];
  map: ContactMap;
}