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
export interface AboutValueItem {
  id: number;
  title: string;
  desc: string;
  iconName: string;
}
export interface OurValuesData {
  subTitle: string;
  title: string;
  items: AboutValueItem[];
}
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  slug: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface TeamSectionData {
  subTitle: string;
  title: string;
  members: TeamMember[];
}

export interface AboutCtaBannerData {
  title: string;
  desc: string;
  phoneLabel: string;
  phoneHref: string;
}

export interface AboutPageData {
  pretitle: string;
  title: string;
  highlightedTitle: string;
  sideImages: {
    mainLeft: string;
  };
  banner: {
    breadcrumbCurrent: string;
    breadcrumbHome: string;
    backgroundImage: string;
    title: string;
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
  ourValues: OurValuesData;
  team?: TeamSectionData;
  ctaBanner?: AboutCtaBannerData;
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

export interface ServiceBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface ImageRef {
  src: string;
  alt: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  iconName: string;
  title: string;
  description: string;
  image: ImageRef;
  href: string;
  linkText?: string;
}

export interface ServiceFeatureItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface ServiceBottomBanner {
  tagline: string;
  title: {
    normal: string;
    highlighted: string;
  };
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
  features: ServiceFeatureItem[];
}

export interface ServiceData {
  banner?: ServiceBannerData;
  badge: string;
  title: {
    normal: string;
    highlighted: string;
  };
  description: string;
  services: ServiceItem[];
  bottomBanner: ServiceBottomBanner;
}

export interface ServiceDetailBanner {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface ServiceDetailHero {
  title: {
    normal: string;
    highlighted: string;
  };
  description: string;
  checklist: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface ServiceDetailGridItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface ServiceDetailSection {
  tagline: string;
  title: string;
  items: ServiceDetailGridItem[];
}

export interface ServiceDetailData {
  slug: string;
  banner?: ServiceDetailBanner;
  hero: ServiceDetailHero;
  featuresSection: ServiceDetailSection;
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

export interface TestimonialBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
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
  banner?: TestimonialBannerData;
  badge: string;
  title: string;
  testimonialItems: TestimonialItem[];
}

export interface BlogBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  date: string;
  title: string;
  description?: string;
  readMoreText: string;
}

export interface BlogData {
  banner?: BlogBannerData;
  badge: string;
  title: string;
  posts: BlogPost[];
  CtaBanner?: {
    title: string;
    desc: string;
    button: {
      label: string;
      href: string;
    };
  };
}

export interface BlogDetailPoint {
  step: number;
  title: string;
  description: string;
}

export interface BlogDetailPost {
  id: number;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  date: string;
  author: string;
  points: BlogDetailPoint[];
}

export interface BlogCategory {
  name: string;
  count: number;
  icon?: string;
}

export interface BlogSidebar {
  categories: BlogCategory[];
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

export interface BlogDetailData {
  slug: string;
  banner: BlogBannerData;
  post: BlogDetailPost;
  sidebar: BlogSidebar;
}

export interface CtaBannerData {
  title: string;
  desc: string;
  button: CtaButton;
}

export interface ContactBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface ContactTopCard {
  iconName: string;
  title: string;
  description: string;
  value: string;
}

export interface ContactFormFeature {
  iconName: string;
  title: string;
  description: string;
}

export interface ContactFormSection {
  tagline: string;
  title: string;
  description: string;
  features: ContactFormFeature[];
  submitButtonText: string;
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
  banner?: ContactBannerData;
  tagline?: string;
  title: string;
  description?: string;
  topCards?: ContactTopCard[];
  formSection?: ContactFormSection;
  contactItems: ContactItem[];
  map: ContactMap;
}

export interface VisionPageBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface VisionMissionCard {
  id: number;
  title: string;
  desc: string;
  image: string;
  iconName: string;
}

export interface VisionMissionValue {
  id: number;
  title: string;
  desc: string;
  iconName: string;
}

export interface VisionMissionSectionData {
  subTitle: string;
  title: string;
  cards: VisionMissionCard[];
  values: VisionMissionValue[];
}

export interface ServiceVisionMissionVariant {
  banner: VisionPageBannerData;
  visionMission: VisionMissionSectionData;
}

export interface VisionMissionPageData {
  VisionMissionPage: {
    variants: Record<string, ServiceVisionMissionVariant>;
  };
}

export interface FaqBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FAQContactCtaData {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface ServiceFaqSection1Data {
  banner?: FaqBannerData;
  tagline: string;
  title: string;
  description: string;
  faqs: FaqItem[];
  contactCta: FAQContactCtaData;
}

export interface FaqSectionVariants {
  ServiceFaqSection1: ServiceFaqSection1Data;
}

export interface FaqSectionData {
  FaqSection: {
    variants: FaqSectionVariants;
  };
}

export interface EnquiryBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface EnquiryFeature {
  iconName: string;
  title: string;
  description: string;
}

export interface EnquiryFormData {
  title: string;
  submitButtonText: string;
}

export interface ServiceEnquiryData {
  banner?: EnquiryBannerData;
  tagline: string;
  title: string;
  description: string;
  features: EnquiryFeature[];
  form: EnquiryFormData;
}

export interface EnquirySectionVariants {
  ServiceEnquirySection1: ServiceEnquiryData;
}

export interface EnquirySectionData {
  EnquirySection: {
    variants: EnquirySectionVariants;
  };
}

export interface IndustryBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface IndustryCardItem {
  id: number;
  title: string;
  description: string;
  image: string;
  iconName: string;
  link?: string;
}

export interface ServiceIndustryData {
  banner?: IndustryBannerData;
  tagline: string;
  title: string;
  description: string;
  cards: IndustryCardItem[];
}

export interface PricingBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface PricingTab {
  id: string;
  label: string;
  iconName: string;
}

export interface PricingPlanItem {
  id: string;
  name: string;
  price: string;
  period: string;
  billingInfo: string;
  isRecommended: boolean;
  badgeText?: string;
  iconName: string;
  includedTitle: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  footerNote: string;
  footerIcon: string;
}

export interface PricingBottomFeature {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicePricingSectionData {
  banner?: PricingBannerData;
  tagline: string;
  title: string;
  description: string;
  tabs: PricingTab[];
  plans: Record<string, PricingPlanItem[]>;
  bottomFeatures: PricingBottomFeature[];
}

export interface QuoteBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface QuoteFeatureItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServiceTypeOption {
  label: string;
  value: string;
}

export interface QuoteFormFields {
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  typeOptions: ServiceTypeOption[];
  requirementsPlaceholder: string;
  submitButtonText: string;
}

export interface GetQuoteSectionData {
  banner?: QuoteBannerData;
  tagline: string;
  title: string;
  description: string;
  features: QuoteFeatureItem[];
  formTitle: string;
  formFields: QuoteFormFields;
}

export interface AwardBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface AwardCardItem {
  id: string;
  image: string;
  iconName: string;
  title: string;
  description: string;
}

export interface AwardBottomCta {
  iconName: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface ServiceAwardsSectionData {
  banner?: AwardBannerData;
  tagline: string;
  title: string;
  description: string;
  awards: AwardCardItem[];
  bottomCta: AwardBottomCta;
}

export interface LegalBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}

export interface LegalContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

export interface LegalSectionItem {
  id: string | number;
  title: string;
  content: string;
  contactInfo?: LegalContactInfo;
}

export interface ServiceLegalPageData {
  banner?: LegalBannerData;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSectionItem[];
}

export interface Socials {
  linkedin?: string;
  email?: string;
}

export interface TeamPageMember {
  id: number;
  slug: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  socials: Socials;
}

export interface TeamHeading {
  subTitle: string;
  title: string;
  description: string;
}

export interface TeamBanner {
  title: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  backgroundImage: string;
  homeHref: string;
}

export interface TeamData {
  banner: TeamBanner;
  heading: TeamHeading;
  members: TeamPageMember[];
}

export interface TeamDetailsBannerData {
  title: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  backgroundImage: string;
  homeHref: string;
}
export interface TeamMemberQuickInfo {
  joinedDate: string;
  email: string;
  phone: string;
  location: string;
}
export interface TeamMemberHelpWidget {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}
export interface TeamMemberStat {
  id: number;
  iconName: string;
  value: string;
  label: string;
}
export interface TeamMemberCertification {
  id: number;
  title: string;
  subtitle: string;
}
export interface TeamMemberDetailData {
  slug: string;
  designation: string;
  name: string;
  image: string;
  experienceBadge: string;
  quickInfo: TeamMemberQuickInfo;
  aboutTitle: string;
  aboutParagraphs: string[];
  areasOfExpertise: string[];
  certifications: TeamMemberCertification[];
  stats: TeamMemberStat[];
  helpWidget: TeamMemberHelpWidget;
}
export interface TeamDetailsData {
  banner: TeamDetailsBannerData;
  members: Record<string, TeamMemberDetailData>;
}

export interface ProjectBannerData {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  backgroundImage: string;
  homeHref: string;
}
export interface ProjectFilterCategory {
  id: string;
  label: string;
}
export interface ProjectItemData {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  image: string;
  linkText: string;
}
export interface ProjectSectionVariantData {
  banner: ProjectBannerData;
  tagline: string;
  title: string;
  description: string;
  categories: ProjectFilterCategory[];
  projects: ProjectItemData[];
}
export interface ProjectSectionData {
  variants: { ProjectSection1: ProjectSectionVariantData };
}

export interface ProjectDetailStat {
  id: string;
  value: string;
  label: string;
  iconName: string;
}

export interface ProjectDetailMeta {
  projectType: string;
  location: string;
  projectValue: string;
  servicesProvided: string;
  client: string;
}

export interface ProjectDetailScope {
  id: string;
  text: string;
}

export interface ProjectDetailItem {
  slug: string;
  badge: string;
  title: string;
  location: string;
  description: string;
  mainImage: string;
  galleryThumbnails: string[];
  moreImagesCount: number;
  stats: ProjectDetailStat[];
  overview: string;
  metaInfo: ProjectDetailMeta;
  galleryImages: string[];
  scopeOfWork: ProjectDetailScope[];
  scopeImage: string;
  scopeBadgeText: string;
  challenge: string;
  solution: string;
}

export interface ProjectDetailsData {
  banner: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    title: string;
    backgroundImage: string;
    homeHref: string;
  };
  projects: Record<string, ProjectDetailItem>;
}
