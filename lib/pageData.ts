import siteData from "@/data/site.json";

import {
  SeoMeta,
  MenuItem,
  SiteData,
  FooterData,
  HeroData,
  FeatureCard,
  AboutPageData,
  ServiceData,
  WhyChooseUsData,
  TestimonialData,
  CtaBannerData,
  BlogData,
  PartnersData,
  ContactSectionData,
  HowWeWorkData, // new type — add to typeSection.ts (see note below)
} from "@/type/typeSection";

const sec = siteData.ServiceIndustries.sections;
const headerData = sec.Header.variants.ServiceHeader1;

export const pageData = {
  meta: headerData.meta as SeoMeta,
  site: headerData.site as SiteData,
  menu: headerData.nav as MenuItem[],
  Footer: sec.Footer.variants.ServiceFooter1 as FooterData,

  // Home section data
  banner: sec.Banner.variants.ServiceBanner1 as HeroData[],
  featureCards: sec.FeatureCards.variants.ServiceFeatureCards1 as FeatureCard[],
  AboutPage: sec.AboutPage.variants.ServiceAboutPage1 as AboutPageData,
  featureStrip: sec.FeatureStrip.variants.ServiceFeatureStrip1 as FeatureCard[],
  partners: sec.Partners.variants.ServicePartners1 as PartnersData,
  service: sec.Service.variants.ServiceService1 as ServiceData,
  whyChooseUs: sec.WhyChooseUs.variants.ServiceWhyChooseUs1 as WhyChooseUsData,
  howWeWork: sec.HowWeWork.variants.ServiceHowWeWork1 as HowWeWorkData,
  Testimonial: sec.Testimonial.variants.ServiceTestimonial1 as TestimonialData,
  blog: sec.Blog.variants.ServiceBlog1 as BlogData,
  contactSection: sec.ContactSection.variants.ServiceContactSection1 as ContactSectionData,
};