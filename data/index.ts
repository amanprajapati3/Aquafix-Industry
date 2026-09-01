import siteData from "./site.json";
import {
  ServiceDetailData,
  BlogDetailData,
  TeamDetailsData,
  ProjectDetailsData,
} from "@/type/typeSection";

export type RawSiteData = typeof siteData;

export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

export type ServiceHeaderData =
  typeof siteData.ServiceIndustries.sections.Header.variants.ServiceHeader1;
export type ServiceFooterData =
  typeof siteData.ServiceIndustries.sections.Footer.variants.ServiceFooter1;
export type ServiceBannerData =
  typeof siteData.ServiceIndustries.sections.Banner.variants.ServiceBanner1;
export type ServiceFeatureCardsData =
  typeof siteData.ServiceIndustries.sections.FeatureCards.variants.ServiceFeatureCards1;
export type ServiceAboutPageData =
  typeof siteData.ServiceIndustries.sections.AboutPage.variants.ServiceAboutPage1;
export type ServiceFeatureStripData =
  typeof siteData.ServiceIndustries.sections.FeatureStrip.variants.ServiceFeatureStrip1;
export type ServicePartnersData =
  typeof siteData.ServiceIndustries.sections.Partners.variants.ServicePartners1;
export type ServiceServiceData =
  typeof siteData.ServiceIndustries.sections.Service.variants.ServiceService1;
export type ServiceWhyChooseUsData =
  typeof siteData.ServiceIndustries.sections.WhyChooseUs.variants.ServiceWhyChooseUs1;
export type ServiceHowWeWorkData =
  typeof siteData.ServiceIndustries.sections.HowWeWork.variants.ServiceHowWeWork1;
export type ServiceTestimonialData =
  typeof siteData.ServiceIndustries.sections.Testimonial.variants.ServiceTestimonial1;
export type ServiceBlogData =
  typeof siteData.ServiceIndustries.sections.Blog.variants.ServiceBlog1;
export type ServiceContactSectionData =
  typeof siteData.ServiceIndustries.sections.ContactSection.variants.ServiceContactSection1;
export type ServiceVisionMissionData =
  typeof siteData.ServiceIndustries.sections.VisionMissionPage.variants.ServiceVisionMissionPage1;
export type ServiceFaqData =
  typeof siteData.ServiceIndustries.sections.FaqSection.variants.ServiceFaqSection1;
export type ServiceEnquiryData =
  typeof siteData.ServiceIndustries.sections.EnquirySection.variants.ServiceEnquirySection1;
export type ServiceIndustrySectionData =
  typeof siteData.ServiceIndustries.sections.IndustrySection.variants.ServiceIndustrySection1;
export type ServicePricingSectionData =
  typeof siteData.ServiceIndustries.sections.PricingSection.variants.ServicePricingSection1;
export type ServiceGetQuoteData =
  typeof siteData.ServiceIndustries.sections.GetQuoteSection.variants.GetQuoteSection1;
export type ServiceAwardsData =
  typeof siteData.ServiceIndustries.sections.AwardsSection.variants.ServiceAwardsSection1;
export type ServiceTeamData =
  typeof siteData.ServiceIndustries.sections.Team.variants.ServiceTeam1;
export type ServiceProjectData =
  typeof siteData.ServiceIndustries.sections.ProjectSection.variants.ProjectSection1;
export type ServiceProjectDetailsData =
  typeof siteData.ServiceIndustries.sections.ProjectDetails.variants.ServiceProjectDetails1;
export type ServiceLegalData =
  typeof siteData.ServiceIndustries.sections.LegalPages.terms;

export type ServiceDetailsMap =
  typeof siteData.ServiceIndustries.sections.serviceDetails.variants.serviceDetails1;

export type BlogDetailsMap =
  typeof siteData.ServiceIndustries.sections.BlogDetails.variants.BlogDetails1;
export type ServiceTeamDetailsData =
  typeof siteData.ServiceIndustries.sections.TeamDetails.variants.ServiceTeamDetails1;

const sec = siteData.ServiceIndustries.sections;

const serviceDetailsMap = sec.serviceDetails.variants.serviceDetails1 as Record<
  string,
  ServiceDetailData
>;

const blogDetailsMap = (sec as any)?.BlogDetails?.variants
  ?.BlogDetails1 as Record<string, BlogDetailData>;

const teamDetailsData = sec.TeamDetails.variants
  .ServiceTeamDetails1 as TeamDetailsData;

const projectDetailsData = sec.ProjectDetails.variants
  .ServiceProjectDetails1 as ProjectDetailsData;

export const site = {
  header: sec.Header.variants.ServiceHeader1,
  footer: sec.Footer.variants.ServiceFooter1,
  banner: sec.Banner.variants.ServiceBanner1,
  featureCards: sec.FeatureCards.variants.ServiceFeatureCards1,
  aboutPage: sec.AboutPage.variants.ServiceAboutPage1,
  featureStrip: sec.FeatureStrip.variants.ServiceFeatureStrip1,
  partners: sec.Partners.variants.ServicePartners1,
  service: sec.Service.variants.ServiceService1,
  whyChooseUs: sec.WhyChooseUs.variants.ServiceWhyChooseUs1,
  howWeWork: sec.HowWeWork.variants.ServiceHowWeWork1,
  testimonial: sec.Testimonial.variants.ServiceTestimonial1,
  blog: sec.Blog.variants.ServiceBlog1,
  contactSection: sec.ContactSection.variants.ServiceContactSection1,
  visionMission: sec.VisionMissionPage.variants.ServiceVisionMissionPage1,
  faq: sec.FaqSection.variants.ServiceFaqSection1,
  enquiry: sec.EnquirySection.variants.ServiceEnquirySection1,
  industry: sec.IndustrySection.variants.ServiceIndustrySection1,
  pricing: sec.PricingSection.variants.ServicePricingSection1,
  quote: sec.GetQuoteSection.variants.GetQuoteSection1,
  awards: sec.AwardsSection.variants.ServiceAwardsSection1,
  team: sec.Team.variants.ServiceTeam1,
  project: sec.ProjectSection.variants.ProjectSection1,
  legal: sec.LegalPages,

  serviceDetails: serviceDetailsMap,
  blogDetails: blogDetailsMap,
  teamDetails: teamDetailsData,
  projectDetails: projectDetailsData,
};

export function getServiceBySlug(slug: string): ServiceDetailData | null {
  return serviceDetailsMap[slug] || null;
}

export function getBlogBySlug(slug: string): BlogDetailData | null {
  return blogDetailsMap?.[slug] || null;
}

export function getTeamMemberBySlug(
  slug: string,
): TeamDetailsData["members"][string] | null {
  return teamDetailsData.members[slug] || null;
}

export function getProjectBySlug(
  slug: string,
): ProjectDetailsData["projects"][string] | null {
  return projectDetailsData.projects[slug] || null;
}

export default siteData;
